import { LitElement, html, css } from "lit";

export class ArtistList extends LitElement {
  static styles = css`
    div {
      background-color: #555;
    }
  `;
  render() {
    return html`<div>Artist List</div>`;
  }
}

customElements.define("artist-list", ArtistList);
