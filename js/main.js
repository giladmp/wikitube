import { WTService } from './videos.service.js'

window.onSearch = onSearch

function onSearch(event) {
    event.preventDefault()
    const elSearchInput = document.querySelector('input[name=search]')
    WTService.getVideos(elSearchInput.value)
        .then(renderVideos)
}

function renderVideos(res) {
    console.log(res)
}