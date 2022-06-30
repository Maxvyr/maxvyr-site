import React from "react";

export default function Footer() {
  return (
    <footer className='container flex justify-between items-center flex-col py-[55px] sm:flex-row'>
      <p>&copy; Site web personnel</p>

      <p>Merci spécial à <a target="_blank" href="https://icons8.com" className='font-bold'>Icons8</a> ❤️</p>

      <p>
        Site réalisé avec <span className='font-bold'>Next JS, Tailwind</span> ❤️
      </p>
    </footer>
  );
}
