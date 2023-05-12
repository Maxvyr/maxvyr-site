import { json } from "@remix-run/node";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import { Divider } from "../../components/Divider/Divider";
import Contact from "../../components/Contact/Contact";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { getWorks } from "../../model/work.server";
import { getSkills } from "../../model/skill.server";
import { useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export async function loader({ request, params }: LoaderArgs) {
  const works = await getWorks();
  const skills = await getSkills();

  return json({ works, skills });
}

export default function Index() {
  const { works, skills } = useLoaderData<typeof loader>();
  return (
    <div className="container">
      <Header />
      <Projects works={works} />
      <Divider />
      <Skills skills={skills} />
      <Divider />
      <Contact />
    </div>
  );
}
