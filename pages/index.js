import Head from "next/head";
import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Airtable from 'airtable';
import { client } from "../config";

export default function index({ about, works, skills }) {
  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Axel Pointud - Développeur web</title>
        <meta name='title' content='Maxime Vidalinc Developpeur Front End / ReactJS' />
        <meta
          name='description'
          content="Bonjour, je m'appelle Maxime Vidalinc et je suis un développeur front end spécialisé en ReactJS / Next JS. Bienvenur sur mon portefolio."
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.axel-pointud.fr/' />
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
        <title>Maxyr - ReactJS</title>
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
  // const works = [];
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY
  });
  
 const table = Airtable.base('appVpp9nSNmoFNXBn');

table('projects').select({
  // Selecting the first 3 records in Grid view:
  maxRecords: 8,
  view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.

  records.forEach(function(record) {
      // console.log('Retrieved', record.get('title'), record.get('description'), record.get('techno'),record.get('link_project'),record.get('link_code_base'),record.get('image_link'),);
      console.log('Retrieve', record.getId());
      // works.push(record.get("title"));
  });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { 
      console.error(err); return; 
    }
});


  const about = await client.fetch(`*[_type == "about"][0]{description}`);
  const works = await client.fetch(`*[_type == "works"] | order(_createdAt desc)`);
  const skills = await client.fetch(`*[_type == "skills"]{icon, title, _createdAt} | order(_createdAt asc)`);

  return {
    props: {
      about,
      works,
      skills,
    },
  };
}
