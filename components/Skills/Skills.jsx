/* eslint-disable @next/next/no-img-element */
import { Title, SmallText } from "../Typography/Typography";

export default function Skills({ skills }) {
  return (
    <section className="py-[50px] lg:flex lg:justify-between lg:items-baseline">
      <div className="lg:w-6/12">
        <Title>Skills</Title>
      </div>

      <div className="grid grid-cols-3 gap-10 mt-12 lg:flex lg:flex-wrap lg:w-6/12 lg:mt-0 ">
        {skills.map((skill, idx) => {
          const url = skill?.fields?.Attachments[0].url;
          const title = skill?.fields?.title;

          return (
            <div key={idx} className="flex flex-col items-center">
              <img
                className="w-[50px] h-[50px] md:w-[40px] md:h-[50px]"
                src={url}
                alt="icon langage de programmation"
              />
              <SmallText>{title}</SmallText>
            </div>
          );
        })}
      </div>
    </section>
  );
}
