import React from "react";
import { Title, Text } from "../Typography/Typography";

export default function About() {
  return (
    <section className="my-[50px] lg:flex lg:justify-between">
      <div className="lg:w-6/12">
        <Title>About</Title>
      </div>
      <div className="mt-5 lg:w-6/12 ">
        <Text>
          Hi I'm Maxime 👋. I share my journey making a living my projects, exit
          my salary job in december 2023 to bootstrap in solo. I build projects
          to be free! If you are interested in becoming free, follow my
          adventures around the world! I document everything on this website,
          twitter and my podcast.
        </Text>
      </div>
    </section>
  );
}
