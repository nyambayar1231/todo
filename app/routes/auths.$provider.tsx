import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export const loader = () => redirect("/login");

export const action = async ({ request, params }: ActionArgs) => {
  const user = await authenticator.authenticate(params.provider ?? "", request);
  return user;
};
