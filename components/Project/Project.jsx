import Tailwind from "/public/assets/icon-tailwind.svg";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../config";

export default function Project({ work }) {

  console.log("project work id", work?.id)

  return (
    <>
      {work ? (
        <article>
          <Link
            href={{
              pathname: `/project/${work?.fields.title}`,
              query: { id: work?.id },
            }}>
            <a>
              <div className='rounded-lg hover:opacity-50s'>
                <Image
                  className='rounded-lg cursor-pointer transition-all hover:opacity-50s object-cover'
                  width='1703'
                  height='965'
                  src={work?.fields?.image_link}
                  layout='responsive'
                  alt='projet maxvyr'
                />
              </div>
            </a>
          </Link>

          <div className='pt-2'>
            <Link
              href={{
                pathname: `/project/${work?.fields.title}`,
                query: { id: work?.id },
              }}>
              <a className='text-lg'>{work?.fields.title}</a>
            </Link>
          </div>
        </article>
      ) : (
        <p>...</p>
      )}
    </>
  );
}
