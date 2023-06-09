import { LitElement, html, css } from "lit";
import { ArtistList } from "./components/artist-list.js";
import { ArtistDetails } from "./components/artist-details.js";

const logo = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

class MusicLibrary extends LitElement {
  static properties = {};

  static styles = css``;

  constructor() {
    super();
  }

  render() {
    /* Artist list - @artist-selected */
    return html` <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />

      <main clas="container">
        <div class="row">
          <div class="col-3">
            <artist-list></artist-list>
          </div>
          <div class="col-9">
            <artist-details></artist-details>
          </div>
        </div>
      </main>`;
  }
}

customElements.define("music-library", MusicLibrary);
