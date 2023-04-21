import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export async function loader({ request }: LoaderArgs) {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return json({
    message: "hello",
  });
}

export default function Hello() {
  const data = useLoaderData();

  return <div>hello</div>;
}
