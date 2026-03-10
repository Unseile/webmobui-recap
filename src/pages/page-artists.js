
customElements.define("page-artists", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h4>Artistes</h4>

      <artist-list>
      </artist-list>
    `
    const artistList = this.querySelector('artist-list')

    // Itérer le tableau d'artistes reçus et créer les éléments correspondants
    
  }
})
