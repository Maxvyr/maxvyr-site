import IconGitHub from "../../public/assets/icon-github.svg";
import IconTwitter from "../../public/assets/icon-twitter.svg";
import IconTiktok from "../../public/assets/icon-tiktok.svg";
import IconYoutube from "../../public/assets/icon-youtube.svg";
import IconLinkedin from "../../public/assets/icon-linkedin.svg";
import { Link } from "@remix-run/react";

export default function Nav() {
  return (
    <nav className="bg-black/50 fixed inset-0 flex justify-between items-center w-full h-[80px] px-[20px] z-10 effect-nav md:px-[90px]">
      <Link to="/" className="text-white font-bold text-[25px] md:text-2xl">
        Maxime Vidalinc
      </Link>

      <div className="flex items-center">
        <a href="https://github.com/maxvyr" target="_blank" rel="noreferrer">
          <img
            src={IconGitHub}
            width="25"
            height="25"
            alt="icon github maxvyr"
          />
        </a>
        <a
          className="ml-[15px]"
          href="https://twitter.com/maxvyr_"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={IconTwitter}
            width="25"
            height="25"
            alt="icon instagram maxvyr"
          />
        </a>
        <a
          className="ml-[15px]"
          href="https://www.linkedin.com/in/maxime-vidalinc/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={IconLinkedin}
            width="25"
            height="25"
            alt="icon linkedin amaxvyr"
          />
        </a>
        <a
          className="ml-[15px]"
          href="https://www.youtube.com/user/maxvid30"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={IconYoutube}
            width="25"
            height="25"
            alt="icon youtube amaxvyr"
          />
        </a>
        <a
          className="ml-[15px]"
          href="https://www.tiktok.com/@maxvyr"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={IconTiktok}
            width="25"
            height="25"
            alt="icon tiktok amaxvyr"
          />
        </a>
      </div>
    </nav>
  );
}
