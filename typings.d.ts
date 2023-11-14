type base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends base {
  title: string;
  slug: Slug;
  metaData_title: string;
  metaData_desc: string;
  author: Author;
  body: Block[];
  categories: category[];
  mainImage: string;
  short_desc: string;
  publishedAt: string;
}

interface Author extends base {
  image: Image;
  slug: Slug;
  name: string;
}

interface Image {
  _type: 'image';
  assets: Reference;
}
interface mainImage {
  _type: 'image';
  assets: Reference;
}

interface Title {
  _type: 'string';
  current: string;
}

interface Reference {
  _ref: string;
  _type: 'reference';
}

interface Slug {
  current: any;
  _type: 'slug';
}
interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}
interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

interface Category extends base {
  description: string;
  title: string;
  image: string;
}

interface IformInputs {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

interface Service {
  id: number;
  title: string;
  icon: string;
  description: string;
  image: string;
  isLocked?: boolean;
  features: string[];
  useCases?: UseCase[];
  details?: string;
}

interface UseCase {
  category: string;
  title: string;
  link: string;
  image: string;
  littleDescription: string;
}
