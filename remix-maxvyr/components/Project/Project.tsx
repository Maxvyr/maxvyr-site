import { Link } from "@remix-run/react";
import type { Work } from "../../model/work.server";

type ProjectWork = {
  work: Work;
};

export default function Project({ work }: ProjectWork) {
  return (
    <>
      {work ? (
        <article>
          <Link to={`/project/${work?.fields.title}?id=${work?.id}`}>
            <div className="rounded-3xl hover:opacity-80  hover:scale-105 hover:origin-top">
              <img
                className="rounded-lg cursor-pointer transition-all object-cover"
                width="903"
                height="665"
                src={work?.fields?.image_link}
                alt="projet maxime vidalinc"
              />
            </div>
          </Link>

          <div className="pt-2">
            <Link to={`/project/${work?.fields.title}?id=${work?.id}`}>
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
