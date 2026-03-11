import { search } from "../api.js"
import { PageSong } from "./page-songs.js"

customElements.define("page-search-songs", class extends PageSong {
    static observedAttributes = ['query']

    getTitle(){
        return `Résultats pour > ${this.getAttribute('query')}`;
    }
    
    async getSongsData() {
        const query = this.getAttribute('query')
        return search(query)
    }
})