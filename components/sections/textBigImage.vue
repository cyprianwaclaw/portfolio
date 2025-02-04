
<template>
    <div class="mx-[80px]">
        <div class="flex justify-between">
            <div class="w-[600px]">
                <div class="bg-[#D9D9D9] h-[220px] w-[280px] rounded-[22px]" />
                <p class="text-small mt-[21px]">Za produktem stoi idea, <br>idea zmiany, idea innowacji, <br>idea ciągłego
                    rozwoju
                </p>
            </div>
            <div class="-mt-[30px]">
                <p class="text-big text-end">Każdy projekt to odpowiedź na potrzeby użytkowników
                </p>
            </div>
        </div>
        <div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { useState } from "@/store/state"

const { isBlackHeader } = storeToRefs(useState())

// onMounted(() => {
//     isBlackHeader.value = true
//     console.log("fdsdsf")
// })

// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)
// onMounted(() => {
//     let tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: ".arrowIcon",
//             start: "center center",
//             end: "+=1800",
//             scrub: true,
//             pin: true,
//         }
//     });

//     tl.to(".arrowIcon", {
//         ease: "power1.inOut"
//     }, "=+0.1")

//         .to(".arrowIcon", {
//             rotate: 90,
//             duration: 0.5,
//             ease: "power1.inOut"
//         }, "=+0.1")

//         .to(".arrowIcon", {
//             duration: 6,
//             scale: 500,
//             x: 35,
//         }, "=+0.5")
//     tl.to(".arrowIcon", {
//         ease: "power1.inOut"
//     }, "=+0.1")
//         .to(".arrowIcon", {
//             duration: 0,
//             opacity: 0,
//             scale: 1,
//         }, "=+0.1")
// })
</script>
<style lang="scss" scoped>
.text-small {
    text-transform: uppercase;
    font-size: 19px;
    font-weight: 400;
}

.text-big {
    text-transform: uppercase;
    white-space: normal;
    font-size: 100px;
    font-weight: 600;
    // justify-self: left,
}

.background {
    background: #49507B;
    display: none;
}
</style>