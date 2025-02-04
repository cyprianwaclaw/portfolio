<template>
    <div class="flex opacity-change-class flex-col justify-start">
        <div class="flex mx-[200px]">
            <div class="mt-[13px] mr-[50px] iconChange flex justify-start">
                <svg class="iconClass" width="62" height="62" viewBox="0 0 62 62" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M50.3362 24.9857H37.4131V12.0703H24.4997V24.9857H11.5862V37.9011H24.5036V50.8184H37.417V37.8972H50.3343L50.3362 24.9857Z"
                        fill="black" />
                </svg>
            </div>
            <div class="relative -mt-[8px] -ml-[45px]">
                <p class="text-sentence text absolute top-0">
                    to gotowość do poszukiwania nowych rozwiązań i przekraczania dotychczasowych granic
                </p>
                <p class="text-sentence text1 absolute top-0">
                    to odwaga, by kwestionować utarte schematy i proponować świeże podejście
                </p>
                <p class="text-sentence text2 absolute top-0">
                    to pasja tworzenia rzeczy, które nie tylko działają, ale również inspirują
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".opacity-change-class",
            start: "top 36%",
            end: "bottom -70%",
            scrub: true,
            pin: true,
        },
    });

    tl.to(".opacity-change-class", { opacity: 1, duration: 300 })
        .to(".text", { opacity: 1, duration: 300 }, "=")
        .to(".text", { opacity: 0, duration: 300 })
        .to(".text1", { opacity: 1, duration: 300 })
        .to(".text1", { opacity: 0, duration: 300 })
        .to(".text2", { opacity: 1, duration: 300 })
        .to(".text2", { opacity: 0, duration: 300 })
        .to(".iconChange", { width: '100%', justifyContent: 'start' })
        .to(".iconChange", { x: '50%', duration: 500, ease: "power2.out" })
        .to(".iconClass", {
            scale: 100, duration: 700,
        }, "<60%")
        .to(".iconClass", { display: "none" });
});
</script>

<style lang="scss" scoped>
.text-sentence {
    font-size: 42px;
    font-weight: 400;
    width: 850px;
    margin-top: 20px;
    opacity: 0;
}

.opacity-change-class {
    height: 500px;
    opacity: 0;
}
</style>