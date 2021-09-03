import MusicService from './music-app'

const TrackService = {}

TrackService.search = function (q) {
  const type = 'track'

  return MusicService.get('/search', {
    params: { q, type }
  })
    .then(res => res.data)
}

TrackService.getById = function (id) {
  return MusicService.get(`/tracks/${id}`)
    .then(res => res.data)
}

export default TrackService
