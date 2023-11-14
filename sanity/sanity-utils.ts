import { groq } from 'next-sanity';
import { client } from './lib/client';

export const revalidate = 15;

export async function getAllPost(): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post"]{
				title,
				'slug':slug.current,
				'mainImage':mainImage,
				metaData_title,
				metaData_desc,
				author->,
				categories[]->,
				'body':body[0],
				'short_desc':short_desc[0].children[0].text,
				publishedAt,
				
		}| order(_createdAt desc)`,
    { next: { revalidate: 3600 } }
  );
}

export async function getPost(slug: string): Promise<Post> {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      ...,
        title,
				'slug':slug.current,
				'mainImage':mainImage,
				metaData_title,
				metaData_desc,
				author->,
				categories[]->,
				'comments': *[
            _type == 'comment' &&
            post._ref == ^._id &&
            approved == true
        ],
				'short_desc':short_desc[0].children[0].text,
				publishedAt,	
    }`,
    { slug }
  );
}
export async function getAllFeaturePost(): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post" && is_Featured == true]{
				title,
				'slug':slug.current,
				'mainImage':mainImage,
				metaData_title,
				metaData_desc,
				author->,
				categories[]->,
				'body':body[0].children[0].text,
        short_desc,
				publishedAt,
				
		}| order(_createdAt desc)`,
    { next: { revalidate: 3600 } }
  );
}
export async function getAllCategory(): Promise<Category[]> {
  return client.fetch(
    groq`*[_type == "category"]{
  		title,
			"image": image,
  	}| order(_createdAt desc)`,
    { next: { revalidate: 3600 } }
  );
}
// export async function postComment(postComment: IformInputs) {
//   const { _id, name, email, comment } = postComment;
//   const result = await client.create({
//     _type: 'comment',
//     post: {
//       _type: 'reference',
//       _ref: _id,
//     },
//     name,
//     email,
//     comment,
//   });
//   console.log(result);
//   return result;
// }
