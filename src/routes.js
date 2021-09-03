import Search from '@/components/Search.vue'
import About from '@/components/About.vue'
import TrackDetail from '@/components/TrackDetail.vue'

const routes = [
    { path: '/', component: Search, name: 'search' },
    { path: '/about', component: About, name: 'about' },
    { path: '/track-detail/:id', component: TrackDetail, name: 'track-detail' },
]

export default routes
