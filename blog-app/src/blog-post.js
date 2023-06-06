import { LitElement, html, css } from 'lit';

export class BlogPost extends LitElement {
  static properties = {
    post: { type: Object },
  };

  constructor() {
    super();
    this.post = {};
  }

  static styles = css`
    ul {
      list-style: none;
    }

    h3 {
      color: blue;
    }

    h4 {
      font-size: 1rem;
    }
  `;

  highlightPost() {
    this.dispatchEvent(
      new CustomEvent('highlight', {
        detail: {
          postId: this.post.id,
        },
      })
    );
  }

  render() {
    const postCategories = this.post.categories.map(category => {
      return html`<li class="d-flex justify-content-end">${category}</li>`;
    });
    return html`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-8">
        <h3>
        ${this.post.title} 
        ${
          this.post.highlighted
            ? html`<span>(Destacado)<span></span></span>`
            : ''
        }
      <h3>
      <h4 class="text-body-danger">${this.post.author}<h4>
      <p>${this.post.date}<p>
        </div>
        <div class="col-sm-12 col-md-4">
            Categorias: <ul>${postCategories}</ul >
            <button @click=${this.highlightPost}>${
      this.post.highlighted ? 'Desmarcar' : 'Destacar'
    }</button>
        </div>
        
 
      </div>
      <div class="row">
      <div class="col-12">
        <p>${this.post.content}<p>
      </div>
      </row>
      

    </div>`;
  }
}

customElements.define('blog-post', BlogPost);
