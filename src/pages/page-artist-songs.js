import { getSongs } from "../api.js"
import { PageSong } from "./page-songs.js"

customElements.define("page-artist-songs", class extends PageSong {
    static observedAttributes = ['artist-id']

    getTitle(){
        return `Artistes > ${this.songs[0].artist.name}`;
    }
    
    async getSongsData() {
        const artistId = this.getAttribute('artist-id')
        return getSongs(artistId)
    }
})