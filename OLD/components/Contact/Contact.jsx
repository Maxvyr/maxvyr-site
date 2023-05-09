import { Title } from "../Typography/Typography";

export default function Contact() {
  return (
    <section className="py-[50px] lg:flex lg:justify-between ">
      <Title>Contact</Title>

      <div className="grid grid-cols-1 gap-5 w-[50%] mt-5 md:grid-cols-2 ">
        <a
          className="text-slate-600 text-xl lg:text-2xl hover:scale-105 hover:opacity-70 transition-colors"
          href="https://github.com/maxvyr"
          target="_blanck"
        >
          Github
        </a>
        <a
          className="text-slate-600 text-xl lg:text-2xl hover:scale-105 hover:opacity-70 transition-colors"
          href=" https://www.linkedin.com/in/maxime-vidalinc/"
          target="_blanck"
        >
          Linkedin
        </a>
        <a
          className="text-slate-600 text-xl lg:text-2xl hover:scale-105 hover:opacity-70 transition-colors"
          href="https://www.instagram.com/maxvyr_/"
          target="_blanck"
        >
          Instagram
        </a>
        <a
          className="text-slate-600 text-xl lg:text-2xl hover:scale-105 hover:opacity-70 transition-colors"
          href="mailto:contact@maxvyr.xyz"
          target="_blanck"
        >
          Email
        </a>
      </div>
    </section>
  );
}
