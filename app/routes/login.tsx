import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";
import { SocialsProvider } from "remix-auth-socials";

import { createUserSession, getUserId } from "~/session.server";
import { verifyLogin } from "~/models/user.server";
import { safeRedirect, validateEmail } from "~/utils";

import { authenticator } from "~/services/auth.server";
import { GithubButton, Logo } from "~/components";

export async function loader({ request }: LoaderArgs) {
  // const userId = await getUserId(request);
  // if (userId) return redirect("/");
  // return json({});
  console.log("login", authenticator.sessionKey);
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/dashboard",
  });
}

export async function action({ request }: ActionArgs) {
  return await authenticator.authenticate("user-pass", request, {
    successRedirect: "/notes",
    failureRedirect: "/login",
  });

  // const formData = await request.formData();
  // const email = formData.get("email");
  // const password = formData.get("password");
  // const redirectTo = safeRedirect(formData.get("redirectTo"), "/notes");
  // const remember = formData.get("remember");
  // if (!validateEmail(email)) {
  //   return json(
  //     { errors: { email: "Email is invalid", password: null } },
  //     { status: 400 }
  //   );
  // }
  // if (typeof password !== "string" || password.length === 0) {
  //   return json(
  //     { errors: { email: null, password: "Password is required" } },
  //     { status: 400 }
  //   );
  // }
  // if (password.length < 8) {
  //   return json(
  //     { errors: { email: null, password: "Password is too short" } },
  //     { status: 400 }
  //   );
  // }
  // const user = await verifyLogin(email, password);
  // if (!user) {
  //   return json(
  //     { errors: { email: "Invalid email or password", password: null } },
  //     { status: 400 }
  //   );
  // }
  // return createUserSession({
  //   request,
  //   userId: user.id,
  //   remember: remember === "on" ? true : false,
  //   redirectTo,
  // });
}

export const meta: V2_MetaFunction = () => [{ title: "Login" }];

interface SocialButtonProps {
  provider: SocialsProvider;
  label: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ provider, label }) => {
  return (
    <Form action={`/auths/${provider}`} method="post">
      <button>
        <GithubButton />
      </button>
    </Form>
  );
};

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/notes";
  const actionData = useActionData<typeof action>();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <div className="flex min-h-full flex-col justify-center">
      <div className="mx-auto w-full max-w-md rounded-md border border-primaryGray px-8 pb-[90px] pt-10">
        {/* <Form method="post" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                ref={emailRef}
                id="email"
                required
                autoFocus={true}
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={actionData?.errors?.email ? true : undefined}
                aria-describedby="email-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.email && (
                <div className="pt-1 text-red-700" id="email-error">
                  {actionData.errors.email}
                </div>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                ref={passwordRef}
                name="password"
                type="password"
                autoComplete="current-password"
                aria-invalid={actionData?.errors?.password ? true : undefined}
                aria-describedby="password-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.password && (
                <div className="pt-1 text-red-700" id="password-error">
                  {actionData.errors.password}
                </div>
              )}
            </div>
          </div>

          <input type="hidden" name="redirectTo" value={redirectTo} />
          <button
            type="submit"
            className="w-full rounded bg-blue-500  px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
          >
            Log in
          </button>
          <SocialButton
            provider={SocialsProvider.GITHUB}
            label="Login with Github"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                className="text-blue-500 underline"
                to={{
                  pathname: "/join",
                  search: searchParams.toString(),
                }}
              >
                Sign up
              </Link>
            </div>
          </div>
        </Form> */}
        <Logo />
        <div className="h-12" />
        <div>
          <h2 className="font-rowdy text-2xl text-primaryBlack ">Signin</h2>
        </div>
        <div className="h-12" />
        <div>
          <SocialButton
            provider={SocialsProvider.GITHUB}
            label="Login with Github"
          />
        </div>
        <div>
          <SocialButton
            provider={SocialsProvider.GOOGLE}
            label="Login with Github"
          />
        </div>
        <div className="h-[110px]" />
        <div className="h-[0.5px] w-full bg-primaryGray" />
        <div className="h-4" />
        <div className="flex justify-center">
          <span className="text-lg">Not have account ? &nbsp;</span>
          <span className="text-primaryRed">Signup</span>
        </div>
      </div>
    </div>
    // <>
    //   <SocialButton
    //     provider={SocialsProvider.GITHUB}
    //     label="Login with Github"
    //   />
    //   <Form method="post">
    //     <input type="email" name="email" required />
    //     <input
    //       type="password"
    //       name="password"
    //       autoComplete="current-password"
    //       required
    //     />
    //     <button>Sign In</button>
    //   </Form>
    // </>
  );
}
