customElements.define("artist-cover", class extends HTMLElement {
  static observedAttributes = []

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
      <a href="#artists/:id">
        <img src=":cover" />
        <div class="artist-list-item-title">:artist-name</div>
      </a>
     `
  }
})
