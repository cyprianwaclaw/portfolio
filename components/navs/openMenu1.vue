<template>
    <div class="bg">
        <div class="flex w-full justify-between">
            <div class="flex justify-end flex-col gap-[5px] line-menu">
                <div v-for="(item, index) in linkMenuArray" :key="index">
                    <p class="links-menu">{{ item.name }}</p>
                </div>
            </div>
            <div class="flex flex-col gap-[10px]">
                <div class="text-container relative" v-for="(item, index) in mainMenuArray" :key="index">
                    <div class="flex place-items-center gap-[21px] animated-text">
                        <!-- {{ routeName }}
                        {{ router.currentRoute.value.fullPath }} -->
                        <svg class="svg-icon-menu-plus"
                            :class="router.currentRoute.value.fullPath == item.link ? 'fill-[#3EE9E9]' : 'fill-[#49507B]'"
                            width="65" height="65" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M50.3362 24.9857H37.4131V12.0703H24.4997V24.9857H11.5862V37.9011H24.5036V50.8184H37.417V37.8972H50.3343L50.3362 24.9857Z"
                                fill="" />
                        </svg>
                        <h1 class="header-title-text text-center" @click="goTo(item.link)">
                            {{ item.name }}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap"

const router = useRouter()
let timeline = ref(null) as any
let timeline1 = ref(null) as any
const props = defineProps({
    modalActive: {
        type: Boolean,
        required: true,
    },
})

const emits = defineEmits(['closeMenu'])

const goTo = (link: string) => {
    router.push(link)
    emits("closeMenu")
}
const mainMenuArray = reactive([
    { name: "Index", link: "/" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
])

const linkMenuArray = reactive([
    { name: "Instagram", link: "/" },
    { name: "Behance", link: "/" },
    { name: "Linkedin", link: "/" },
    { name: "GitHub", link: "/" },
])

const createTimeline = () => {
    timeline = gsap.timeline({ paused: true })
    timeline
        .set(".bg", { display: "flex" })
        .fromTo(".bg", { y: "-100%" }, { y: 0, duration: 0.64, ease: "cubic-bezier(.64,.4,.4,.64)" })
        .fromTo(".animated-text", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.32, ease: "cubic-bezier(.64,.4,.4,.64)" }, ">-0.1")
        .fromTo(".line-menu", { opacity: 0 }, { opacity: 1, duration: 0.3 }, ">")
}

// const timelineActiveMenu = () => {
//     timeline1 = gsap.timeline({ paused: true })
//     timeline1
//         .to(".svg-icon-menu-plus", { opacity: 0, duration: 0.1 })
//         .to(".svg-icon-menu-plus", { opacity: 1, duration: 0.1 })
// }

onMounted(() => {
    createTimeline()
    // timelineActiveMenu()
})

watch(props, newValue => {
    newValue.modalActive ? playAnimation(timeline) : reverseAnimation(timeline)
})

</script>

<style lang="scss" scoped>
.bg {
    padding: 80px;
    position: fixed;
    background: #49507B;
    height: 100vh;
    width: 100%;
    z-index: 50;
    display: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text-container {
    overflow: hidden;
    width: 100%;
    height: 124px;
}

.header-title-text {
    font-size: 110px;
    font-weight: 500;
    color: #ffffff;
    cursor: pointer;
    position: relative;
    display: inline-block;
    transition: color 0.3s ease;

    &:hover {
        color: #3EE9E9;
    }
}


// .underline {
//     width: 100%;
//     height: 3px;
//     background-color: #3EE9E9;
//     position: absolute;
//     bottom: -5px;
//     left: 0;
//     transform-origin: left;
//     transform: scaleX(0);
//     transition: transform 0.4s ease;
// }

// .animated-text:hover .underline {
//     transform: scaleX(1);
// }

.links-menu {
    color: #c5c9e08a;
    text-transform: uppercase;
    font-size: 19px;
    transition: all 0.1s ease-in-out;

    &:hover {
        color: white;
        cursor: pointer;
    }
}
</style>