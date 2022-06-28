import Image from "next/image";
import { useRouter } from "next/router";
import { Title, Text } from "../../components/Typography/Typography";
import { client } from "../../config";
import Head from "next/head";
import { urlFor } from "../../config";

export default function project({ work }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Projet - {work[0]?.title}</title>
      </Head>
      <div className='container'>
        <div className='pt-[80px] max-w-[580px] mt-5 lg:flex lg:gap-3 lg:justify-between lg:flex-col'>
          <Title>{work[0]?.title}</Title>
          <Text>{work[0]?.description}</Text>
          <div className='flex gap-3 my-5'>
            <a className='px-[20px] py-[5px] border border-white' href={`${work[0].github}`} target='_blank' rel='noreferrer'>
              Voir le code
            </a>
            <a className='px-[20px] py-[5px] border border-white' href={`${work[0].demo}`} target='_blank' rel='noreferrer'>
              Voir le projet
            </a>
          </div>
        </div>

        <div className='mt-12'>
          <h3 className='text-[32px] font-light'>Previews</h3>
          <div className='py-5'>
            <Image
              className='rounded-lg transition-all hover:opacity-50s object-cover'
              width='1703'
              height='965'
              layout='responsive'
              src={urlFor(work[0]?.image?.asset?._ref).url()}
              alt='projet axel pointud'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const work = await client.fetch(`*[_type == "works" && _id == "${context.query.id}"]{title, image, description, github, demo}`);
  return {
    props: {
      work,
    },
  };
}
