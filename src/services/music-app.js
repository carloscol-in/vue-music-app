import trae from 'trae'
import ConfigService from './config'

const MusicService = trae.create({
  baseUrl: ConfigService.apiUrl
})

export default MusicService
