<template>
    <div class="cursor-default">
        <SectionsHomeHero />
        <SectionsTextReveal />
        <SectionsTextBig class="pt-[100px]" />
        <SectionsHomeBigLetterBlack class="pt-[85px]" />
        <SectionsSentence />
        <SectionsBlackSection />
        <SectionsWhiteSection />
    </div>
</template>
<script lang="ts" setup>
import Lenis from 'lenis'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


onMounted(() => {
    const lenis = new Lenis();
    lenis.on('scroll', (e: any) => {
    })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
        lenis.raf(time * 800)
    })

    gsap.ticker.lagSmoothing(0)
    function raf(time: any) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

})
</script>

<style scoped>
.test {
    height: 100vh;
    background: #3EE9E9;
}

.test10 {
    height: 100vh;
    background: #49507B;
    margin-top: -300px;
    z-index: 200;
}

.test1 {
    height: 800px;
    background: red;
}

.test2 {
    height: 800px;
    background: green;
}

.test3 {
    height: 800px;
    background: blue;
}

.test4 {
    height: 800px;
    background: gray;
}

.horizontal-scroll {
    display: flex;
    overflow: hidden;
}

.horizontal-content {
    min-width: 200%;
    display: flex;
    justify-content: space-between;
}


.gallery {
    will-change: transform, opacity;
}

.gallery__wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.gallery__item {
    height: 300px;
    width: 300px;
}

.gallery__img {
    vertical-align: top;
    height: 300px;
    width: 300px;
    object-fit: cover;
    object-position: center;
}

.text-container {
    overflow: hidden;
    height: 100vh;
    background: #3EE9E9;
    /* height: 2rem; */
    /* Zapewnia, że tekst nie wychodzi poza kontener przed animacją */
}

.animated-text {
    font-size: 2rem;
    color: #49507B;
}

.reveal-text-home {
    width: 60%;
    margin-left: 200px;
    margin-top: 200px;
    color: #d5d5d5b2;
}
</style>