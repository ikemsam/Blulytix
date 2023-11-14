// 'use client';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { getPost } from '@/sanity/sanity-utils';
import RichText from '@/src/components/Atom/RichText';
import CommentForm from '@/src/components/Molecules/Blog/CommentForm';
import { PortableText } from '@portabletext/react';
import groq from 'groq';
import Image from 'next/image';
import Wrapper from '../../wrapper';

type Props = {
  params: {
    slug: string;
  };
};

interface IformInputs {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

export const revalidate = 15;

export async function generateStaticParams() {
  const query = groq`*[_type=='post']{
      slug
    }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getPost(slug);
  if (post) {
    return {
      title: post.metaData_title,
      description: post.metaData_desc,
    };
  }
}

const ServicePost = async ({ params: { slug } }: Props) => {
  const post = await getPost(slug);

  return (
    <Wrapper>
      <>
        <article>
          <section>
            <div className="relative h-64 md:h-96">
              <Image
                src={urlForImage(post.mainImage).url()}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-black opacity-70 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center text-secondary">
                <h1 className="text-xl font-bold leading-relaxed text-center md:text-3xl lg:text-5xl ">
                  {post.title}
                </h1>
              </div>
            </div>
            {/* <div className="mt-8 md:p-16">
          <div className="grid grid-cols-1 gap-8 ">
            <div className="flex flex-row items-center justify-between gap-10">
              <div className="hidden lg:block">
                <Image
                  src={icons.darkLogo_Icon}
                  width={2000}
                  height={2000}
                  alt="Logo"
                  className="w-full lg:w-full dark:hidden"
                />
                <Image
                  src={icons.whiteLogo_png}
                  width={400}
                  height={400}
                  alt="Logo"
                  className="hidden lg:w-full dark:block"
                />
              </div>
              <div>
                <h1 className="mb-4 text-2xl font-bold md:text-4xl">
                  {data.title}
                </h1>
                <p className="mb-4 text-base font-light leading-10 tracking-wider text-justify">
                  {data.desc}
                </p>
              </div>
            </div>
            <div className="md:hidden">
              <Image
                src={data.data_analysis_Icon}
                alt=""
                width={500}
                height={300}
              />
            </div>
          </div>
          <section className="mb-12">
            <h2 className="mb-4 text-2xl md:text-4xl">Key Points</h2>
            <ul className="mb-4 text-base font-light leading-10 text-left list-none md:text-justify md:list-disc md:list-inside ">
              {Object.entries(data.keyPoints).map(([key, desc]: any, index) => (
                <li key={index}>
                  <strong className="font-semibold ">{key}:</strong> {desc}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl md:text-4xl">Why BluLytix</h2>
            <ul className="mb-4 text-base font-light leading-10 text-left list-none md:text-justify md:list-disc md:list-inside ">
              {data.whyChoosePoints.map((point: string, index: any) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>
          <UseCasesSection useCases={data.useCases} />
        </div> */}

            <PortableText value={post.body} components={RichText} />
          </section>
        </article>

        <hr className="max-w-full my-5 border border-primary" />
        <CommentForm postId={post._id} />
      </>
    </Wrapper>
  );
};

export default ServicePost;
