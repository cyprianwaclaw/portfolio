<template>
    <div>
        <SectionsHomeHero />
        <SectionsText />
                            <!-- <Icon name="ph:arrow-right-bold" size="52" class="text-red-500"/> -->

        <div class="pt-[170px] ml-12">
            testxccc
        </div>
        <div class="text-container" ref="textContainer">
            <h1 class="animated-text">To jest animowany tekst</h1>
        </div>
        <NuxtLink to="/test">Test</NuxtLink>
        <div class="test">
            <div class="gallery">
                <div v-for="_ in 1" class="gallery__wrap" :key="_">
                    <div v-for="img in images" class="gallery__item" :key="img">
                        <img :src="img" class="gallery__img" />
                    </div>
                </div>
            </div>
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
    </div>
</template>

<script lang="ts" setup>
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { general } from '@/store/index.ts';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const textContainer = ref(null) as any

let tl1 = ref() as any

onMounted(() => {
    const lenis = new Lenis();
    lenis.on('scroll', (e: any) => {
        // console.log(e)
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
    animateText()

    const split = new SplitType(".wrapper p", {
        types: "chars",
    });
    tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#textSection",
            start: "top -50%",
            end: "+=40%",
            pin: true,
            scrub: 0.7,
        }
    })
        .set(split.chars, {
            color: "black",
            stagger: 0.1,
        }, 0.1);

})

watch(() => general.isPreloaderVisible, (val) => {
    if (!val) {
        gsap.from('.gallery', {
            scale: 1.1,
            opacity: 0.2,
            duration: 1,
            delay: 0.1
        })
    }
})

const images = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
    '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
    '11.jpg', '12.jpg',
]

const animateText = () => {
    gsap.fromTo(
        textContainer.value.querySelector('.animated-text'),
        {
            // opacity: 0,
            y: 50,
            rotation: -13,
        },
        {
            // opacity: 1,
            y: 0,
            rotation: 0,
            duration: 1.5,
            ease: 'power3.out',
        }
    );
};
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


.gallery {
    will-change: transform, opacity;
}

.gallery__wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.gallery__item {
    height: 20vw;
}

.gallery__img {
    vertical-align: top;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

.text-container {
    overflow: hidden;
    /* height: 2rem; */
    /* Zapewnia, że tekst nie wychodzi poza kontener przed animacją */
}

.animated-text {
    font-size: 2rem;
    color: #333;
}

.reveal-text-home {
    width: 60%;
    margin-left: 200px;
    margin-top: 200px;
    color: #d5d5d5b2;
}
</style>