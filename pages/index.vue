<template>
    <div class="root-element">
        <NuxtLink to="/test">Test</NuxtLink>
        <div class="test">
            dsdsdd
        </div>
        <div class="test1">
            dsdsdd
        </div>
        <div class="test2">
            dsdsdd
        </div>
        <div class="test3">
            dsdsdd
            <div class="horizontal-scroll">
                <div class="horizontal-content">Content that scrolls horizontally</div>
            </div>
        </div>
        <div class="test4">
            dsdsdd
        </div>
    </div>
</template>

<script lang="ts" setup>
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    const lenis = new Lenis();
    lenis.on('scroll', (e:any) => {
        console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
    function raf(time: any) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP horizontal scroll
    const horizontalScroll = document.querySelector('.horizontal-content');

    if (horizontalScroll) {
        gsap.to(horizontalScroll, {
            xPercent: -100, // Moves the content horizontally
            ease: 'none',
            scrollTrigger: {
                trigger: '.horizontal-scroll',
                pin: true,
                scrub: true,
                end: '+=1000', // Adjust end point to match the desired scroll length
            },
        });
    }
})
</script>

<style scoped>
.test {
    height: 100vh;
    background: gray;
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
</style>