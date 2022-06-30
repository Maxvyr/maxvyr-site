import Head from "next/head";
import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import { client } from "../config";

export default function index({ about, works, skills }) {
  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Maxyr - Dev Front End</title>
        <meta name='title' content='Maxime Vidalinc Developpeur Front End / ReactJS' />
        <meta
          name='description'
          content="Bonjour, je m'appelle Maxime Vidalinc et je suis un développeur front end spécialisé en ReactJS / Next JS. Bienvenur sur mon portefolio."
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://maxvyr.com/' />
        <meta property='og:title' content='Maxime Vidalinc Developpeur Front End / ReactJS' />
        <meta
          property='og:description'
          content="Bonjour, je m'appelle Maxime Vidalinc et je suis un développeur front end spécialisé en ReactJS / Next JS. Bienvenur sur mon portefolio."
        />
        <meta property='og:image' content='' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.axel-pointud.fr/' />
        <meta property='twitter:title' content='Maxime Vidalinc Developpeur Front End / ReactJS' />
        <meta
          property='twitter:description'
          content="Bonjour, je m'appelle Maxime Vidalinc et je suis un développeur front end spécialisé en ReactJS / Next JS. Bienvenur sur mon portefolio."
        />
        <meta property='twitter:image' content=''></meta>
        <link rel="shortcut icon" href="/public/images/favicon.ico" />
        <title>Maxyr - Dev Front End</title>
      </Head>

      <div className='container '>
        <Header />
        <Projects works={works} />
        <About about={about} />
        <Skills skills={skills} />
        <Contact />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const about = await client.fetch(`*[_type == "about"][0]{description}`);
  const works = await getWorks();
  const skills = await client.fetch(`*[_type == "skills"]{icon, title, _createdAt} | order(_createdAt asc)`);
  return {
    props: {
      about,
      works,
      skills, 
    },
  };
}


 async function getWorks() {
  let response = await fetch("https://api.airtable.com/v0/appVpp9nSNmoFNXBn/projects", {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`
    },
  });
  const json = await response.json();
  return json["records"];
}