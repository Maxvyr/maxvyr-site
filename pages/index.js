import Head from "next/head";
import React from "react";
import Contact from "../components/Contact/Contact";
import { Divider } from "../components/Divider/Divider";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

export default function index({ works, skills }) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Maxyr - Dev Front End</title>
        <meta
          name="title"
          content="Maxime Vidalinc Developpeur Front End / ReactJS"
        />
        <meta
          name="description"
          content="Bonjour, je m'appelle Maxime Vidalinc et je suis un développeur front end spécialisé en ReactJS / Next JS. Bienvenur sur mon portefolio."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maxvyr.com/" />
        <meta
          property="og:title"
          content="Maxime Vidalinc Developpeur Front End / ReactJS"
        />
        <meta
          property="og:description"
          content="Bonjour, je m'appelle Maxime Vidalinc et je suis un développeur front end spécialisé en ReactJS / Next JS. Bienvenur sur mon portefolio."
        />
        <meta
          property="og:image"
          content="Bonjour, je m'appelle Maxime Vidalinc et je suis un développeur front end spécialisé en ReactJS / Next JS. Bienvenur sur mon portefolio."
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://maxvyr.com/" />
        <meta
          property="twitter:title"
          content="Maxime Vidalinc Developpeur Front End / ReactJS"
        />
        <meta
          property="twitter:description"
          content="Bonjour, je m'appelle Maxime Vidalinc et je suis un développeur front end spécialisé en ReactJS / Next JS. Bienvenur sur mon portefolio."
        />
        <meta property="twitter:image" content=""></meta>
        <link rel="shortcut icon" href="/public/images/favicon.ico" />
        <title>Maxyr - Dev Front End</title>
      </Head>

      <div className="container">
        <Header />
        <Projects works={works} />
        <Divider />
        <Skills skills={skills} />
        <Divider />
        <Contact />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const works = await getWorks();
  const skills = await getSkills();

  return {
    props: {
      works,
      skills,
    },
  };
}

async function getWorks() {
  const json = await getData(
    "https://api.airtable.com/v0/appVpp9nSNmoFNXBn/projects"
  );
  return json["records"];
}

async function getSkills() {
  const json = await getData(
    "https://api.airtable.com/v0/appVpp9nSNmoFNXBn/skills"
  );
  return json["records"];
}

async function getData(url) {
  let response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
  });
  const json = await response.json();
  return json;
}
