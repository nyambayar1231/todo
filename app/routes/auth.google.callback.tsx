import type { LoaderArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export async function loader({ request }: LoaderArgs) {
  return authenticator.authenticate("google", request, {
    successRedirect: "/hello",
    failureRedirect: "/login",
  });
}
