import { LitElement, html, css } from "lit";

export class ArtistHeader extends LitElement {
  static properties = {
    artist: { type: Object },
  };

  static styles = css`
    .bottom-border {
      border-bottom: 1px solid #000;
    }

    img {
      width: 100px;
    }
  `;

  constructor() {
    super();
    this.artist = {
      name: "Miss Alexandra Farrell",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1117.jpg",
    };
  }

  render() {
    return html`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
      
      <div class="bottom-border d-flex align-items-center py-5 mb-3">
          <div class="me-3"><img class="rounded-circle" src=${this.artist.avatar}/></div>
          <h3>${this.artist.name}</h3>
        </div>
      </div>
    `;
  }
}

customElements.define("artist-header", ArtistHeader);
