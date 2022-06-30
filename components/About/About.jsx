import React from "react";
import { Title, Text } from "../Typography/Typography";

export default function About({ about }) {
  return (
    <section className='my-[220px] lg:flex lg:justify-between'>
      <div className='lg:w-6/12'>
        <Title>About</Title>
      </div>
      <div className='mt-5 lg:w-6/12 '>
        <Text>{about?.description ?? <span className='text-red-500'>Erreur lors du chargement des données</span>}</Text>
      </div>
    </section>
  );
}