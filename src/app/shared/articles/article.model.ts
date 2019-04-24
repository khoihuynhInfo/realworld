import { Author } from './author.model';

export class Article {
    title: string;
    slug: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    tagList: Array<string>;
    description: string;
    author: Author;
    favorited: boolean;
    favoritesCount: number;
}