<template>
    <div class="cursor-default">
        <!-- <div class="flex w-full h-screen justify-center items-center ml-[300px]"> -->
        <!-- <div class="image-wrapper">
                <img src="/13.jpg" />
            </div> -->
        <!-- </div> -->
        <!-- <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/3e933f181867459.6523d1cb7fd33.jpg"
            alt="Obraz z Behance" /> -->
        <!-- <img :src="`http://localhost:3000/13.jpg`" /> -->
        <SectionsHomeHero />
        <!-- <SectionsText class="my-[21px] pb-[400px]" /> -->
        <SectionsTextReveal />
        <!-- <SectionsText1 class="pt-[21px]" /> -->
        <SectionsHomeImages class="pt-[85px]" />
        <SectionsTextBigImage class="pt-[100px]" />
        <SectionsTextBigImage1 class="pt-[35px]" />
        <SectionsBlackSection />
        <SectionsWhiteSection />
        <!-- <SectionsTextBigImage class="pt-[100px]" />
        <SectionsDarkElement class="mt-[435px]" /> -->
    </div>
</template>

<script lang="ts" setup>
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { general } from '@/store/index'
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

// Każdy projekt to odpowiedź na potrzeby użytkowników, to gotowość do poszukiwania nowych
//                         rozwiązań i przekraczania dotychczasowych granic, by dostarczać wartość, która rzeczywiście robi różnice

// https://mir-s3-cdn-cf.behance.net/project_modules/source/3e933f181867459.6523d1cb7fd33.jpg 1600w, https://mir-s3-cdn-cf.behance.net/project_modules/max_632/3e933f181867459.6523d1cb7fd33.jpg 843w, https://mir-s3-cdn-cf.behance.net/project_modules/max_316/3e933f181867459.6523d1cb7fd33.jpg 421w, https://mir-s3-cdn-cf.behance.net/project_modules/max_158/3e933f181867459.6523d1cb7fd33.jpg 211w, https://mir-s3-cdn-cf.behance.net/project_modules/disp/3e933f181867459.6523d1cb7fd33.jpg 600w, https://mir-s3-cdn-cf.behance.net/project_modules/hd/3e933f181867459.6523d1cb7fd33.jpg 1240w, https://mir-s3-cdn-cf.behance.net/project_modules/fs/3e933f181867459.6523d1cb7fd33.jpg 1600w, https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3e933f181867459.6523d1cb7fd33.jpg 1200w, https://mir-s3-cdn-cf.behance.net/project_modules/1400/3e933f181867459.6523d1cb7fd33.jpg 1400w

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

    // gsap.fromTo(
    //     'img',
    //     {
    //         clipPath: 'inset(100% 0 0 0)',
    //         scale: 1.2
    //     },
    //     {
    //         clipPath: 'inset(0% 0 0 0)',
    //         scale: 1,
    //         duration: 1.5,
    //         ease: 'power2.inOut'
    //     }
    // );

})

// watch(() => general.isPreloaderVisible, (val) => {
//     if (!val) {
//         gsap.from('.gallery', {
//             scale: 1.1,
//             opacity: 0.2,
//             duration: 1,
//             delay: 0.1
//         })
//     }
// })

// const images = [
//     '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
//     '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
//     '11.jpg'
// ]

// const animateText = () => {
//     gsap.fromTo(
//         textContainer.value.querySelector('.animated-text'),
//         {
//             // opacity: 0,
//             y: 50,
//             rotation: -13,
//         },
//         {
//             // opacity: 1,
//             y: 0,
//             rotation: 0,
//             duration: 1.5,
//             ease: 'power3.out',
//         }
//     );
// };


// const prefetchImages = () => {
//     const images = [
//         '/photo_some.webp',
//         '/images/image1.jpg',
//         '/images/image2.jpg',
//         '/images/image3.jpg'
//     ];

//     images.forEach((image) => {
//         const link = document.createElement('link');
//         link.rel = 'prefetch';
//         link.href = image;
//         document.head.appendChild(link);
//     });
// };

// // Prefetch images when the component is mounted
// onMounted(() => {
//     prefetchImages();
// });
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