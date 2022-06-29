import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Header() {
  const titleRef = useRef();
  const txtRef = useRef();

  const TL = gsap.timeline();

  useEffect(() => {
    TL.to(titleRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }).to(txtRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.2");
  }, [TL]);

  return (
    <header className='py-[120px] lg:flex lg:gap-3 lg:justify-between'>
      <h2 className='text-white tracking-wide text-clamp-xl invisible opacity-0 translate-y-[50px]' ref={titleRef}>
        Portfolio
      </h2>

      <p className='text-gray text-lg mt-5 max-w-[580px] invisible opacity-0 translate-y-[50px] lg:text-[26px] lg:leading-[40px]' ref={txtRef}>
      Bienvenue, je suis Maxime Vidalinc, développeur freelance Front End spécialisée ReactJS/NextJS.
      </p>
    </header>
  );
}
