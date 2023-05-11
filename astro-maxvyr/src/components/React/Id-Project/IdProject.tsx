import { Title, Text } from "../Typography/Typography";

export default function IdProject({ work }: {work : any}) {

  return (
    <div>
      <div className="container">
        <div className="pt-[50px] max-w-[780px] mt-3 lg:flex lg:gap-3 lg:justify-between lg:flex-col">
          <Title>{work?.title}</Title>
          <Text>{work?.description}</Text>
          <div className="py-3">
            <img
              className="rounded-3xl transition-all hover:opacity-50s object-cover"
              width="1503"
              height="965"
              src={work?.image_link}
              alt="project maxime vidalinc"
            />
          </div>
          <div className="flex lg:justify-around  gap-3 my-10">
            <a
              className="px-[50px] py-[10px] border-2 rounded-lg text-black border-black hover:border-gray hover:scale-105 hover:bg-white hover:text-black"
              href={`${work?.link_code_base}`}
              target="_blank"
              rel="noreferrer"
            >
              Voir le code
            </a>
            <a
              className="px-[50px] py-[10px] border-2 rounded-lg text-black border-black hover:border-gray hover:scale-105 hover:bg-white hover:text-black"
              href={`${work?.link_project}`}
              target="_blank"
              rel="noreferrer"
            >
              Voir le projet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}