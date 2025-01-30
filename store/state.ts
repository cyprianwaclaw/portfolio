import { defineStore } from 'pinia'

export const useState = defineStore('state', {

    state: () => ({
        isBlackHeader: true as boolean,
        isBgBlack: false as boolean,
    })

})