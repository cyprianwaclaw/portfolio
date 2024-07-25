<template>
    <div class="app-container">
        <div>
            <NuxtLink to="/">Home</NuxtLink>
        </div>
        <section class="section one">
            <h1>Section One</h1>
            <p>Content for section one.</p>
        </section>
        <section class="section two">
            <h1>Section Two</h1>
            <p>Content for section two.</p>
        </section>
        <section class="section three">
            <h1>Section Three</h1>
            <p>Content for section three.</p>
        </section>
        <section class="horizontal-section">
            <div class="horizontal-content">
                <div class="horizontal-item">Horizontal Item 1</div>
                <div class="horizontal-item">Horizontal Item 2</div>
                <div class="horizontal-item">Horizontal Item 3</div>
            </div>
        </section>
        <section class="section four">
            <h1>Section Four</h1>
            <p>Content for section four.</p>
        </section>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

let lenis: any = null;

onMounted(() => {
    // Initialize Lenis for smooth scrolling
    lenis = new Lenis({
        smoothWheel: true,
    });

    lenis.on('scroll', (e: any) => {
        console.log(e);
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // GSAP ScrollTrigger for horizontal scrolling
    const horizontalContent = document.querySelector('.horizontal-content');

    if (horizontalContent) {
        gsap.to(horizontalContent, {
            xPercent: -100 * (horizontalContent.children.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: '.horizontal-section',
                pin: true,
                scrub: true,
                start: 'top top',
                end: () => `+=${horizontalContent.scrollWidth}`,
            },
        });
    }
});
</script>

<style scoped>
.section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: lightgray;
    margin: 0;
    /* Usunięcie marginesów */
    padding: 0;
    /* Usunięcie odstępów wewnętrznych */
}

.horizontal-section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: #333;
}

.horizontal-content {
    display: flex;
    width: max-content;
}

.horizontal-item {
    min-width: 100vw;
    background-color: #444;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    padding: 1rem;
}
</style>
