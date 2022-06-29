import IconGitHub from "/public/assets/icon-github.svg";
import IconTwitter from "/public/assets/icon-twitter.svg";
import IconInstagram from "/public/assets/icon-instagram.svg";
import IconTiktok from "/public/assets/icon-tiktok.svg";
import IconYoutube from "/public/assets/icon-youtube.svg";
import IconLinkedin from "/public/assets/icon-linkedin.svg";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className='fixed inset-0 flex justify-between items-center w-full h-[75px] px-[20px] z-10 effect-nav md:px-[90px]'>
      <Link href='/'>
        <a className='text-white font-bold text-[25px] md:text-2xl'>MV</a>
      </Link>

      <div className='flex items-center'>
        <a href='https://github.com/maxvyr' target='_blank' rel='noreferrer'>
          <Image src={IconGitHub} width='25' height='25' alt='icon github maxvyr' />
        </a>
        <a className='ml-[15px]' href='https://twitter.com/m4xvyr' target='_blank' rel='noreferrer'>
          <Image src={IconTwitter} width='25' height='25' alt='icon twitter maxvyr' />
        </a>
        <a className='ml-[15px]' href='https://instagram.com/m4xvyr' target='_blank' rel='noreferrer'>
          <Image src={IconInstagram} width='25' height='25' alt='icon instagram maxvyr' />
        </a>
        <a className='ml-[15px]' href='https://www.linkedin.com/in/maxime-vidalinc/' target='_blank' rel='noreferrer'>
          <Image src={IconLinkedin} width='25' height='25' alt='icon linkedin amaxvyr' />
        </a>
        <a className='ml-[15px]' href='https://www.youtube.com/user/maxvid30' target='_blank' rel='noreferrer'>
          <Image src={IconYoutube} width='25' height='25' alt='icon youtube amaxvyr' />
        </a>
        <a className='ml-[15px]' href='https://www.tiktok.com/@maxvyr' target='_blank' rel='noreferrer'>
          <Image src={IconTiktok} width='25' height='25' alt='icon tiktok amaxvyr' />
        </a>
      </div>
    </nav>
  );
}
