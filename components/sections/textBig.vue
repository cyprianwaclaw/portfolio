<template>
    <div class="m-[200px] rotate-6">
        <div class="flex gap-[48px] -ml-[1500px] moving-text">
            <div v-for="(text, index) in textArray" :key="index">
                <p :class="text.class">{{ text.text }}</p>
            </div>
        </div>
        <div class="flex gap-[48px] mr-[1300px] moving-text1 my-[12px]">
            <div v-for="(text, index) in textArray1" :key="index">
                <p :class="text.class">{{ text.text }}</p>
            </div>
        </div>
        <div class="flex gap-[48px] -ml-[2000px] moving-text">
            <div v-for="(text, index) in textArray" :key="index">
                <p :class="text.class">{{ text.text }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

let tl = ref() as any
const textArray = ref([
    { text: 'WEB DEVELOPER', class: 'color-text' },
    { text: 'NUXT', class: 'black-text' },
    { text: 'UI DESIGNER', class: 'color-text' },
    { text: 'WEB DEVELOPER', class: 'black-text' },
    { text: 'WORDPRESS', class: 'color-text' },
    { text: 'WORDPRESS', class: 'color-text' },
    { text: 'WORDPRESS', class: 'color-text' },
    { text: 'NUXT', class: 'black-text' },
])
const textArray1 = ref([
    { text: 'WORDPRESS', class: 'color-text' },
    { text: 'WORDPRESS', class: 'color-text' },
    { text: 'WORDPRESS', class: 'color-text' },
    { text: 'LARAVEL', class: 'black-text' },
    { text: 'UX DESIGNER', class: 'color-text' },
    { text: 'VUE', class: 'black-text' },
    { text: 'CYPRIAN WACŁAW', class: 'color-text' },
    { text: 'WEB DEVELOPER', class: 'black-text' },
    { text: 'LARAVEL', class: 'color-text' },
])

onMounted(() => {
    gsap.to(".moving-text, .moving-text1", {
        repeat: -1,
        ease: "none",
        duration: 10,
    })

    gsap.to(".moving-text", {
        scrollTrigger: {
            trigger: ".moving-text",
            start: "top +=80%",
            end: "+=200%",
            scrub: 1,
        },
        x: "1500px",
        ease: "none",
    })

    gsap.to(".moving-text1", {
        scrollTrigger: {
            trigger: ".moving-text",
            start: "top +=80%",
            end: "+=200%",
            scrub: 1,
        },
        x: "-1500px",
        ease: "none",
    })
})
</script>

<style lang="scss" scoped>
.black-text {
    font-size: 80px;
    font-weight: 600;
    color: black;
    white-space: nowrap;
    transition: all 0.2s;

}

.color-text {
    font-size: 80px;
    font-weight: 300;
    color: black;
    white-space: nowrap;
    transition: all 0.2s;
}

.color-text:hover {
    font-size: 80px;
    // font-weight: 600;
    color: #3EE9E9;
    white-space: nowrap;
    transition: all 0.2s;
}

.color-text1 {
    white-space: nowrap;
    font-size: 76px;
    font-weight: 500;
    color: rgb(255, 255, 255);
    letter-spacing: 3px;
    text-shadow:
        2px 2px 0px #3EE9E9,
        -2px 2px 0px #3EE9E9,
        2px -2px 0px #3EE9E9,
        -2px -2px 0px #3EE9E9,
        2px 0px 0px #3EE9E9,
        -2px 0px 0px #3EE9E9,
        0px 2px 0px #3EE9E9,
        0px -2px 0px #3EE9E9;
    transition: all 0.2s;

}

.color-text1:hover {
    white-space: nowrap;
    font-size: 76px;
    // font-weight: 600;
    color: #3EE9E9;
    text-shadow:
        0px #3EE9E9,
        0px #3EE9E9,
        0px #3EE9E9,
        0px #3EE9E9,
        0px #3EE9E9,
        0px #3EE9E9,
        0px #3EE9E9,
        0px #3EE9E9,
}
</style>