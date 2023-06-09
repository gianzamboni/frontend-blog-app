import { LitElement, html } from "lit";
import { SongService } from "../../services/song.js";
import { EditSongModal } from "./edit-song-modal.js";
export class ArtistSongs extends LitElement {
  static properties = {
    artistId: { type: Number },
    songs: { type: Array },
    editingSong: { type: Object },
  };

  constructor() {
    super();
    this.artistId = 1;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.songs = await SongService.getSongsByArtistId(this.artistId);
  }

  async deleteSong(id) {
    try {
      await SongService.deleteSong(this.artistId, id);
      this.songs = this.songs.filter((song) => song.id !== id);
    } catch (error) {
      alert(error.message);
    }
  }

  async editSong(editedSong) {
    try {
      const editedSongIndex = this.songs.findIndex((song) => song.id === id);
      const firstSongs = this.songs.slice(0, editedSongIndex);
      const lastSongs = this.songs.slice(editedSongIndex + 1);
      const newSongLists = [...firstSongs, editedSong, ...lastSongs];
      this.songs = newSongLists;
    } catch (error) {
      alert(error.message);
    }
  }

  async setUpEditingSong(song) {
    this.editingSong = song;
  }

  render() {
    if (!this.songs) {
      return html`<div>Loading...</div>`;
    }

    const htmlSongs = this.songs.map((song) => {
      return html`<tr>
        <td>${song.title}</td>
        <td>${song.duration}</td>
        <td>
          <button @click=${() => this.setUpEditingSong(song)}>
            Boton editar
          </button>
        </td>
        <td>
          <button @click=${() => this.deleteSong(id)}>Boton eliminar</button>
        </td>
      </tr>`;
    });

    return html` <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
      <div class="w-50">
        <div>
          <h4>Canciones creadas</h4>
        </div>
        <div class="d-flex">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Titulo</th>
                <th scope="col">Duracion</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              ${htmlSongs}
            </tbody>
          </table>
          <div class="ps-5">
            ${this.editingSong
              ? html` <edit-song-modal
                  .song=${this.editingSong}
                ></edit-song-modal>`
              : ""}
          </div>
        </div>
      </div>`;
  }
}

customElements.define("artist-songs", ArtistSongs);
