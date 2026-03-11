import { getFavorites } from '../local-storage.js'
import { PageSong } from "./page-songs.js"

customElements.define("page-favorite-songs", class extends PageSong {

    getTitle(){
        return `Favoris`;
    }
    
    async getSongsData() {
        return getFavorites();
    }
})