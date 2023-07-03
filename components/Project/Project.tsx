import { Link } from "@remix-run/react";
import type { Work } from "../../model/work.server";

type ProjectWork = {
  work: Work;
};

export default function Project({ work }: ProjectWork) {
  return (
    <>
      {work ? (
        <article className="hover:opacity-80  hover:scale-105 hover:origin-top">
          <Link to={`/project/${work?.id}`}>
            <div className="rounded-3xl">
              <img
                className="rounded-lg cursor-pointer transition-all object-cover"
                src={work?.fields?.image_link}
                alt={work?.fields.title}
              />
            </div>
          </Link>

          <div className="pt-2">
            <Link to={`/project/${work?.id}`}>
              <p className="text-slate-600 text-lg">{work?.fields.title}</p>
            </Link>
          </div>
        </article>
      ) : (
        <p>...</p>
      )}
    </>
  );
}
