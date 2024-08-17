<template>
    <NuxtLayout>


        <div class="app-container">
            <div>
                <NuxtLink to="/">Home</NuxtLink>
            </div>
            <!-- <section class="section one"> -->
            <div class="horizontal-content2">
                <div class="horizontal-content1">
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                    <div class="horizontal-item1">Horizontal Item 2</div>
                </div>
            </div>
            <div class="some-div section ">
                <p class="some-text" id="target">Example text animation</p>
            </div>


            <section class="section two">
                <h1>Section Two</h1>
                <p>Content for section two.</p>
            </section>
            <section class="section three">
                <h1>Section Three</h1>
                <p>Content for section three.</p>
            </section>
            <section class="horizontal-section">
                <div class="horizontal-content ">
                    <div class="horizontal-item">Horizontal Item 1</div>
                    <div class="horizontal-item">Horizontal Item 1</div>
                    <div class="horizontal-item">Horizontal Item 1</div>
                    <!-- <div class="horizontal-item">Horizontal Item 3</div> -->
                </div>
            </section>
            <section class="section four">
                <h1>Section Four</h1>
                <p>Content for section four.</p>
            </section>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Lenis from 'lenis';
import { general } from '@/store/index.ts';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

let lenis: any = null;


onMounted(() => {
    general.preloaderDelay = 1; // e.g., 25 ms delay for this pag
    // Initialize Lenis for smooth scrolling
    lenis = new Lenis({
        smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const text = new SplitType('#target', { types: 'words, chars' as any })

    gsap.from(text.chars, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: { amount: 0.1 },
    })


    // Horizontal continuous scrolling animation
    const horizontalContent1 = document.querySelector('.horizontal-content1');
    const itemsCount = horizontalContent1 ? horizontalContent1.children.length : 0;

    if (horizontalContent1) {
        // Continuous scrolling
        gsap.to(horizontalContent1, {
            xPercent: -60 * itemsCount,
            ease: 'linear',
            // repeat: 2,
            duration: 70,
        });
    }

    const horizontalContent2 = document.querySelector('.horizontal-content2');

    if (horizontalContent2) {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".horizontal-content2",
                start: 'center center',
                end: 'bottom top',
                scrub: 0.5,
            }
        })
            .to('.horizontal-content2', {
                rotation: 360,
                ease: 'none',
            });
        // gsap.to(horizontalContent2, {
        //     xPercent: -100 * (horizontalContent2.children.length - 1),
        //     ease: 'none',
        //     scrollTrigger: {
        //         trigger: '.horizontal-section2',
        //         pin: true,
        //         // rotate:200,
        //         scrub: true,
        //         start: 'top top',
        //         end: () => `+=${horizontalContent2.scrollWidth}`,
        //     },
        // });
    }


    // GSAP ScrollTrigger for horizontal scrolling
    const horizontalContent = document.querySelector('.horizontal-content');

    if (horizontalContent) {
        gsap.to(horizontalContent, {
            // backgroundColor: "#ff0000", // Zmiana koloru na czerwony
            xPercent: -50 * (horizontalContent.children.length - 1),
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
    /* width: 100vw; */
    overflow: hidden;
    background-color: #333;
}

.horizontal-content {
    display: flex;
    /* width: max-content; */
}

.horizontal-content1 {
    margin-left: -200px;
    display: flex;
    width: 400px;
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

.horizontal-item1 {
    min-width: 300px;
    background-color: #444;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    padding: 1rem;
}

.some-div {
    width: 100%;
    background: white;
    height: 300px;
    padding: 120px;
}

.some-text {
    font-size: 50px;
    font-weight: 500;
}

/* .scrolling-text-container {
    position: relative;
    width: 100vw;
    overflow: hidden;
    z-index: 10;
} */

.scrolling-text {
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    font-size: 2rem;
    font-weight: bold;
    color: #000;
}
</style>
