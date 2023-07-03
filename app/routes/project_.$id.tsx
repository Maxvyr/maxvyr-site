import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getWork } from "../../model/work.server";
import invariant from "tiny-invariant";
import { Title, Text } from "../../components/Typography/Typography";

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.id, `params.id is required`);

  const project = await getWork(params.id);
  return json({ project });
};

export default function IdProject() {
  const { project: work } = useLoaderData<typeof loader>();
  return (
    <div className="container">
      <div className="flex md:flex-row flex-col justify-between w-full">
        <div className="pt-20 max-w-[580px] mt-3 mx-4 lg:flex lg:gap-3 lg:justify-between lg:flex-col">
          <Title>{work.fields.title}</Title>
          <Text>{work.fields.description}</Text>
          <div className="flex lg:justify-around  gap-3 my-10">
            <a
              className="px-[50px] py-[10px] border-2 rounded-lg text-black border-black hover:border-gray hover:scale-105 hover:bg-white hover:text-black"
              href={`${work.fields.link_code_base}`}
              target="_blank"
              rel="noreferrer"
            >
              See codebase
            </a>
            <a
              className="px-[50px] py-[10px] border-2 rounded-lg text-black border-black hover:border-gray hover:scale-105 hover:bg-white hover:text-black"
              href={
                work.fields.link_project.length === 0
                  ? "https://github.com"
                  : `${work.fields.link_project}`
              }
              target="_blank"
              rel="noreferrer"
            >
              See project
            </a>
          </div>
        </div>
        <div className="max-w-[580px] pl-1 pt-2 md:pl-10 md:pt-20">
          <img
            className="rounded-3xl transition-all hover:opacity-50s object-cover"
            width="1503"
            height="965"
            src={work.fields.image_link}
            alt={work.fields.title}
          />
        </div>
      </div>
    </div>
  );
}
