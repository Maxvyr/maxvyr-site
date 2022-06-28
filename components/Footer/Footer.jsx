import React from "react";

export default function Footer() {
  return (
    <footer className='container flex justify-between items-center flex-col py-[55px] sm:flex-row'>
      <p>&copy; Site web personnel</p>

      <p>
        Site réalisé avec <span className='font-bold'>Next JS, Tailwind</span> ❤️
      </p>
    </footer>
  );
}
