import { LitElement } from "lit";
import { Author } from "../models/Author.js";

export class AuthorService {
  static async getAuthorById(id) {
    const response = await fetch(
      `https://634827500b382d796c6acadd.mockapi.io/music/author/${id}`
    );
    const data = await response.json();
    console.log(data);
    return new Author(data);
  }
}
