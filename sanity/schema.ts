import { type SchemaTypeDefinition } from 'sanity';

import author from './schemas/author';
import blockContent from './schemas/blockContent';
import category from './schemas/category';
import commentt from './schemas/comment';
import post from './schemas/post';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, commentt],
};
