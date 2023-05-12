import type { Work } from "../../model/work";
import Project from "../Project/Project";
import { Title } from "../Typography/Typography";

type ProjectsProps = {
  works: Work[];
};

export default function Projects({ works }: ProjectsProps) {
  return (
    <section>
      <Title>Projets</Title>
      {works.length == 0 ? (
        <p>Pas de projets.</p>
      ) : (
        <div className="grid gap-12 my-[50px] md:grid-cols-3">
          {works.map((work, id) => (
            <Project key={id} work={work} />
          ))}
        </div>
      )}
    </section>
  );
}
