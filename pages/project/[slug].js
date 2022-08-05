import Image from "next/image";
import { useRouter } from "next/router";
import { Title, Text } from "../../components/Typography/Typography";
import Head from "next/head";

export default function project({ work }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Projet - {work?.title}</title>
      </Head>
      <div className="container">
        <div className="pt-[50px] max-w-[780px] mt-3 lg:flex lg:gap-3 lg:justify-between lg:flex-col">
          <Title>{work?.title}</Title>
          <Text>{work?.description}</Text>
          <div className="py-3">
            <Image
              className="rounded-3xl transition-all hover:opacity-50s object-cover"
              width="1503"
              height="965"
              layout="responsive"
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
    </>
  );
}

export async function getServerSideProps(context) {
  const work = await getWork(context.query.id);
  return {
    props: {
      work,
    },
  };
}

async function getWork(idWork) {
  let response = await fetch(
    `https://api.airtable.com/v0/appVpp9nSNmoFNXBn/projects/${idWork}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
    }
  );
  const json = await response.json();
  return json["fields"];
}
