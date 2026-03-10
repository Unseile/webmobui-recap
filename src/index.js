// Elements
import './elements/artist-cover.js'
import './elements/song-item.js'
import './elements/search-bar.js'
import './elements/spot-footer.js'
// Pages
import './pages/page-artists.js'
import './pages/page-home.js'
import './pages/page-player.js'
import './pages/page-songs.js'

const router = () => {
  const main = document.querySelector('main')
  const hashs = (window.location.hash || '#home').split('/')

  if (hashs[0] == '#home')
    main.innerHTML = '<page-home />'

  // autres routes
}

const setupOfflineMode = () => {

}

const connectServiceWorkers = () => {
  
}

window.addEventListener('hashchange', router)

router()
setupOfflineMode()
connectServiceWorkers()