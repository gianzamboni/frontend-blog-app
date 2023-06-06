import { LitElement, html, css } from 'lit';
import { BlogPost } from './blog-post.js';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class BlogApp extends LitElement {
  static properties = {
    title: { type: String },
    posts: { type: Array },
  };

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--blog-app-background-color);
    }
  `;

  constructor() {
    super();
    this.title = 'Titulo del blog';
    this.posts = [
      {
        id: 1,
        title: 'Creando nuestros componentes con LitElement',
        author: 'Franco Frizzo',
        date: new Date(),
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        categories: ['Desarrollo web', 'LitElement'],
        highlighted: true,
      },
      {
        id: 2,
        title: 'Titulo del post 1',
        content: 'Contenido del post 1',
        author: 'Autor del post 1',
        date: 'Fecha del post 1',
        categories: ['LitElement'],
        highlighted: false,
      },
    ];
  }

  async connectedCallback() {
    super.connectedCallback();
    /* this.posts = await getPosts() */
  }

  handleHightlight(event) {
    this.posts = this.posts.map(post => {
      if (post.id !== event.detail.postId) return post;
      const newPost = Object.assign({}, post);
      newPost.highlighted = !post.highlighted;
      return newPost;
    });
  }

  render() {
    return html`
      <header>
        <span>${this.title}</span>
      </header>
      <main>
        <p>Lista de posts</p>
        ${this.posts.map(
          post => html`<blog-post
            .post=${post}
            @highlight=${this.handleHightlight}
          ></blog-post>`
        )}
        <p>Categoria del post</p>
      </main>
      <footer>
        <p>Publicaciones destacadas</p>
      </footer>
    `;
  }
}

customElements.define('blog-app', BlogApp);
