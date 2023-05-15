import React from "react";
import { Divider } from "../Divider/Divider";
import { SmallText } from "../Typography/Typography";

export default function Footer() {
  const yearDate = new Date().getFullYear();
  return (
    <footer className="flex justify-between items-center flex-col py-[50px]">
      <Divider />
      <div className="container flex justify-evenly flex-col sm:flex-row">
        <SmallText>&copy; {yearDate} Maxvyr </SmallText>
        <a
          href="https://go.maxvyr.com/newsletter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SmallText>S'incrire à la newsletter</SmallText>
        </a>

        <SmallText>
          Merci spécial à{" "}
          <a
            target="_blank"
            href="https://icons8.com"
            className="font-bold"
            rel="noreferrer"
          >
            Icons8,
          </a>{" "}
          <a
            target="_blank"
            href="https://remix.run/"
            className="font-bold"
            rel="noreferrer"
          >
            Remix,
          </a>{" "}
          <a
            target="_blank"
            href="https://tailwindcss.com/"
            className="font-bold"
            rel="noreferrer"
          >
            Tailwind
          </a>{" "}
        </SmallText>
      </div>
    </footer>
  );
}
