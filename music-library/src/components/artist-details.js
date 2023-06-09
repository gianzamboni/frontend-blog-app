import { LitElement, html } from "lit";
import { AuthorService } from "../services/author.js";
import { ArtistHeader } from "./artist-details/artist-header.js";
import { ArtistSongs } from "./artist-details/artist-songs.js";

export class ArtistDetails extends LitElement {
  static properties = {
    artistId: { type: Number },
    artist: { type: Object },
  };

  constructor() {
    super();
    this.artistId = 1;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.artist = await AuthorService.getAuthorById(this.artistId);
  }

  render() {
    return html`<div>
      <artist-header></artist-header>
      <artist-songs> </artist-songs>
    </div>`;
  }
}

customElements.define("artist-details", ArtistDetails);
