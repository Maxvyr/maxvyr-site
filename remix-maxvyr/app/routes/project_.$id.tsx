import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderArgs) => {
  const { id } = params;
  console.log("id", id);
  return json({ id });
};

export default function IdProject() {
  const { id } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Project {id}</h1>
    </div>
  );
}
