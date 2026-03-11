import { playSong } from '../player.js'
import { toggleFavorite, getFavorite } from '../local-storage.js'

export class PageSong extends HTMLElement {
  static observedAttributes = []
  songs = []

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  render() {
    this.getSongsData()
    .then((songs) => {
      this.songs = songs;

      this.innerHTML = `
        <h4>
          ${this.getTitle()}
        </h4>

        <div class="list">
        </div>
      `
      const songList = this.querySelector('.list')
      // Itérer le tableau de chansons reçu et créer les éléments correspondants
      songs.forEach((song) => {
        const songItem = document.createElement('song-item')
        songItem.setAttribute('title', song.title)
        songItem.addEventListener('play-song', () => playSong(song, songs))
        songItem.addEventListener('favoritesong', () => {
          toggleFavorite(song);
          songItem.setAttribute('favorite', getFavorite(song.id) ? 'true' : 'false')
        })
        songList.append(songItem)
      })
    })
  }

  //ces fonctions ne sont pas nécessaires, on pourrait ne pas les avoir
  async getSongsData() {
    return [];
  }

  getTitle() {
    return "title";
  }
}
