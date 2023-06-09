class Author {
  static properties = {
    author: { type: Object },
  };

  render() {
    return html`<li>${this.author.name}</li>`;
  }
}
