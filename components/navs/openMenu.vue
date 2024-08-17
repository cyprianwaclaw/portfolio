<template>
    <div class="bg">
        <div class="w-full flex flex-col relative justify-center ">
            <div class="menu-section-container">
                <div class="flex flex-col gap-[25px] w-full">
                    <div class="text-container relative" v-for="(item, index) in mainMenuArray " :key="index">
                        <h1 class="animated-text ">{{ item.name }}</h1>
                        <div class="underline"></div>
                    </div>
                </div>
                <div class="retangle">
                </div>
                <div class="flex w-full justify-end">
                    <Icon name="ph:arrow-right-bold" size="45" class="text-[#3EE9E9] mr-3 -mt-2.5" />
                    <p class="text-[21px] text-white w-[240px]">DESIGN IS THE PROCESS OF TRANSFORMING VISION INTO REALITY
                    </p>
                </div>
            </div>
            <div class="line-menu">
                <div v-for="(item, index) in linkMenuArray" :key="index" class="mt-[32px]">
                    <p class="links-menu">
                        {{ item.name }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap'

let timeline = ref(null) as any

const props = defineProps({
    modalActive: {
        type: Boolean,
        required: true,
    },
})

const mainMenuArray = reactive([
    { name: "Index", link: "/" },
    { name: "Portfolio", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
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
        .set('.bg', { display: 'flex' })
        .fromTo('.bg',
            {
                y: '-100%',
            },
            { y: 0, duration: 0.8, ease: "cubic-bezier(.64,.4,.4,.64)", }
        )
        .fromTo(
            '.animated-text',
            {
                y: 100,
            },
            {
                y: 0,
                duration: 0.4,
                ease: "cubic-bezier(.64,.4,.4,.64)"
            }, '>-0.1'
        )
        .fromTo('.line-menu', {
            opacity: 0
        },
            {
                opacity: 1,
                duration: 0.1,
            }, '>-0.4')
}


onMounted(() => {
    createTimeline()

    const textElement = document.querySelector('.animated-text') as HTMLElement;

    document.querySelectorAll('.text-container').forEach(container => {
        const underline = container.querySelector('.underline')
        const text = container.querySelector('.animated-text') as any
        console.log('Offset width:', textElement.offsetWidth);
        gsap.set(underline, { width: 300, scaleX: 0, transformOrigin: 'left center' })

        container.addEventListener('mouseenter', () => {
            gsap.to(underline, { scaleX: 1, duration: 0.4, ease: "power2.out" })
        })

        container.addEventListener('mouseleave', () => {
            gsap.to(underline, { scaleX: 0, duration: 0.4, ease: "power2.out" })
        })
    })
})

watch(props, (newValue: any) => {
    newValue.modalActive ? playAnimation(timeline) : reverseAnimation(timeline)
})

</script>

<style scoped>
.bg {
    padding: 40px;
    position: fixed;
    background: #49507B;
    height: 100vh;
    width: 100%;
    z-index: 50;
    display: none;
}

.text-container {
    overflow: hidden;
    width: 400px;
    height: 100px;
}

.animated-text {
    font-size: calc(30px + 3vw);
    line-height: normal;
    color: #ffffff;
    cursor: pointer;
}

.line-menu {
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    gap: 42px;
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
}

.links-menu {
    color: #c5c9e08a;
    text-transform: uppercase;
    font-size: 19px;
    transition: color 0.34s;
}

.links-menu:hover {
    color: #ffffffdc;
    cursor: pointer;
    transition: color 0.2s;
}

.menu-section-container {
    display: flex;
    width: 100%;
    /* position: relative; */
    /* justify-content: between; */
    /* padding-left: calc(2vw + 40px);
    padding-right: calc(1vw -40px); */
    padding: 0px 120px;
    margin-top: -21px;
}

.retangle {
    margin-left: 72px;
    height: calc(100vh - 400px);
    width: 100%;
    background: white;
    border-radius: 23px;
}

.underline {
    width: 100%;
    height: 3px;
    background-color: #3EE9E9;
    position: absolute;
    bottom: 0;
    left: 0;
    transform-origin: left;
    transform: scaleX(0);
}
</style>


