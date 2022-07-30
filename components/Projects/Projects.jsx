import Project from "../Project/Project";
import { Title } from "../Typography/Typography";

export default function Projects({ works }) {
  // console.log("works receive", {works});
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
