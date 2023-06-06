import { storageService } from './storage.service.js'
export const WTService = { getVideos }

const STORAGE_KEY = 'videosDB'

function getVideos(term) {
    return Promise.resolve(term)
}