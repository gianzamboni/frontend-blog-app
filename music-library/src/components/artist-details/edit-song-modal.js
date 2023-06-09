import { LitElement, html, css } from "lit";
import { SongService } from "../../services/song-service.js";
export class EditSongModal extends LitElement {
  static styles = css`
    .form-container {
      padding: 20px;
      background-color: #ccc;
    }
  `;
  static properties = {
    song: { type: Object },
  };

  async editSong(event) {
    event.preventDefault();
    const form = event.target;
    console.log(form.title.value);
    console.log(form.duration.value);
    this.song.title = form.title.value;
    this.song.duration = form.duration.value;
    await SongService.editSong(this.artistId, this.song);
  }

  render() {
    return html` <div class="form-container">
      <form id="#song-form" @submit=${this.editSong}>
        <label for="title">Titulo:</label>
        <input name="title" type="text" value="${this.song.title}" />

        <label for="duration">Duraacion:</label>
        <input name="duration" type="text" value="${this.song.duration}" />

        <input type="Submit"></button>
        <button>Cancelar</button>
      </form>
    </div>`;
  }
}

customElements.define("edit-song-modal", EditSongModal);
