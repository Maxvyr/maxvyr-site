export default function Project({ work }: { work: any }) {
  return (
    <>
      {work ? (
        <article>
          <a href={`/project/${work?.fields.title}`}>
            {/* <Link
            href={{
              pathname: `/project/${work?.fields.title}`,
              query: { id: work?.id },
            }}
          > */}
            <a>
              <div className="rounded-3xl hover:opacity-80  hover:scale-105 hover:origin-top">
                <img
                  className="rounded-lg cursor-pointer transition-all object-cover"
                  width="903"
                  height="665"
                  src={work?.fields?.image_link}
                  // layout="responsive"
                  alt="projet maxime vidalinc"
                />
              </div>
            </a>
          </a>

          <div className="pt-2">
            <a href={`/project/${work?.fields.title}`}>
              {/* href={{
                pathname: `/project/${work?.fields.title}`,
                query: { id: work?.id },
              }} */}
              <a className="text-slate-600 text-lg">{work?.fields.title}</a>
            </a>
          </div>
        </article>
      ) : (
        <p>...</p>
      )}
    </>
  );
}
