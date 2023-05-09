import Image from "next/image";
import Link from "next/link";

export default function Project({ work }) {
  return (
    <>
      {work ? (
        <article>
          <Link
            href={{
              pathname: `/project/${work?.fields.title}`,
              query: { id: work?.id },
            }}
          >
            <a>
              <div className="rounded-3xl hover:opacity-80  hover:scale-105 hover:origin-top">
                <Image
                  className="rounded-lg cursor-pointer transition-all object-cover"
                  width="903"
                  height="665"
                  src={work?.fields?.image_link}
                  layout="responsive"
                  alt="projet maxime vidalinc"
                />
              </div>
            </a>
          </Link>

          <div className="pt-2">
            <Link
              href={{
                pathname: `/project/${work?.fields.title}`,
                query: { id: work?.id },
              }}
            >
              <a className="text-slate-600 text-lg">{work?.fields.title}</a>
            </Link>
          </div>
        </article>
      ) : (
        <p>...</p>
      )}
    </>
  );
}
