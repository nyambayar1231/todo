import { Authenticator } from "remix-auth";
import { GitHubStrategy } from "remix-auth-github";
import { GoogleStrategy } from "remix-auth-google";

import { sessionStorage } from "~/services/session.server";
import { findOrCreateUser } from "~/models/user.server";

import { FormStrategy } from "remix-auth-form";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator(sessionStorage);

// Tell the Authenticator to use the form strategy
authenticator.use(
  new FormStrategy(async ({ form }) => {
    let email = form.get("email");
    let password = form.get("password");
    //   let user = await login(email, password);
    // the type of this user must match the type you pass to the Authenticator
    // the strategy will automatically inherit the type if you instantiate
    // directly inside the `use` method
    return password;
  }),
  // each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
  "user-pass"
);

let callbackURL = "http://localhost:3000/auth/github/callback";
let googleCallBack = "http://localhost:3000/auth/google/callback";

let githubStrategy = new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID ?? "",
    clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    callbackURL,
  },
  async ({ accessToken, refreshToken, profile }) => {
    let email = profile.emails?.[0].value;
    let user = await findOrCreateUser({
      githubId: profile.id,
      accessToken,
      refreshToken,
      email,
    });
    return user;
  }
);

authenticator.use(githubStrategy);

let googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID ?? "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    callbackURL: googleCallBack,
  },
  async (props) => {
    try {
      const { accessToken, refreshToken, extraParams, profile } = props;
      let email = profile.emails?.[0].value;
      let user = await findOrCreateUser({
        githubId: profile.id,
        accessToken,
        refreshToken,
        email,
      });

      console.log(user);
      return user;
    } catch (error) {
      console.log("aldaaa");
    }
  }
);
authenticator.use(googleStrategy);
