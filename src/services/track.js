import MusicService from './music-app'

const TrackService = {}

TrackService.search = function (q) {
  const type = 'track'

  return MusicService.get('/search', {
    params: { q, type }
  })
    .then(res => res.data)
}

export default TrackService
