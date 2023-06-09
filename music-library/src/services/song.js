import { Song } from "../models/Song.js";

const baseUrl = "https://634827500b382d796c6acadd.mockapi.io/music/author";

export class SongService {
  static async getSongsByArtistId(id) {
    const response = await fetch(`${baseUrl}/${id}/songs`);

    if (response.status === 404) {
      throw new Error("No se encontró el artista");
    }

    const data = await response.json();
    return data.map((song) => new Song(song));
  }

  static async deleteSong(artistId, id) {
    const response = await fetch(`${baseUrl}/${artistId}/songs/${id}`, {
      method: "DELETE",
    });
  }

  static async editSong(artistId, editedSong) {
    throw new NotimplementedError();
    // const response = await fetch(
    //   `${baseUrl}/${artistId}/songs/${id}`,
    //   {
    //     method: "PUT",
    //   }
  }
}
