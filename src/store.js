import Vue from 'vue'
import Vuex from 'vuex'

import TrackService from '@/services/track'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        track: {}
    },

    mutations: {
        setTrack(state, track) {
            state.track = track
        }
    },

    getters: {
        trackTitle(state) {
            if (!state.track.name) return

            return `${state.track.name} - ${state.track.artists[0].name}`
        }
    },

    actions: {
        getTrackById(context, payload) {
            return TrackService.getById(payload.id)
                .then(res => {
                    context.commit('setTrack', res)
                    return res
                })
        }
    }
})

export default store