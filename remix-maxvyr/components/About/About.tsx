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
          Bonjour 👋 je m'appelle Maxime Vidalinc. Tu as besoin d'une application Android ou iOS, tu es aux bons
          endroits.
        </Text>
      </div>
    </section>
  );
}
