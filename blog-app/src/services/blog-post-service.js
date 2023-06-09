import { Author } from '../models/author.js';

export class AuthorService {
  static async getAuthors() {
    const response = await fetch(
      'https://634827500b382d796c6acadd.mockapi.io/music/author'
    );
    return (await response.json()).map(authorData => new Author(authorData));
  }

  static async createAuthor(author /* tipo Author */) {
    const response = await fetch(
      'https://634827500b382d796c6acadd.mockapi.io/music/author',
      {
        method: 'POST',
        body: {
          name: author.name,
          avatar: author.avatar,
        },
        headers: {
          Authorization: 'Bearer ${token}',
        },
      }
    );
  }
}
