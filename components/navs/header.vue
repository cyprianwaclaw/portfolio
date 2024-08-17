<template>
    <div>
        <NavsOpenMenu :modalActive="isOpen" />
        <div class="p-9 flex w-full justify-between items-center fixed z-50">
            <p @click="goToHome" class="text-xl tracking-wider elementToAnimate">CYPRIAN WACŁAW</p>
            <div class="flex items-center gap-10">
                <!-- <div class="flex gap-2">
                    <p class="text-lg elementToAnimate">EN</p>
                    <p class="text-lg elementToAnimate">/</p>
                    <p class="text-lg elementToAnimate">PL</p>
                </div> -->
                <button @click="toggleMenu" ref="buttonRef" @mouseenter="handleMouse" @mouseleave="handleMouse"
                    class="w-inline-block flex items-center justify-center flex items-center gap-2 border rounded-full h-[44px] w-[100px] elementToAnimate">
                    <div class="div-block-3">
                        <div ref="titleARef" id="title-a">MENU</div>
                        <div ref="titleAARef" class="text-block-3" id="title-aa">MENU</div>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap';
import SplitType from 'split-type';

const isOpen = ref(false);
const textMenu = ref();
let timeline = ref() as any
let tl = ref() as any

const goToHome = () => {
    useRouter().push('/');
};


const handleMouse = () => {
    tl.restart();
};

// const handleMouseLeave = () => {
//     if (!clicked.value) {
//         tl.restart();
//     }
// };


const toggleMenu = () => {
    isOpen.value = !isOpen.value;

    if (isOpen.value) {
        playAnimation(timeline);
        textMenu.value = "CLOSE";
    } else {
        setTimeout(() => {
            reverseAnimation(timeline);
            textMenu.value = "MENU";
        }, 700);
    }
};

const buttonRef = ref(null);
const titleARef = ref(null);
const titleAARef = ref(null);


onMounted(() => {
    textMenu.value = 'MENU';

    const split = new SplitType(titleARef.value, { types: 'chars' })
    const splitb = new SplitType(titleAARef.value, { types: 'chars' })

    tl = gsap.timeline({ paused: true })
    tl.to(split.chars, {
        duration: 0.3,
        yPercent: -100,
        stagger: 0.03
    });


    tl.fromTo(
        splitb.chars,
        {
            yPercent: 100,
        },
        {
            duration: 0.3,
            yPercent: 0,
            stagger: 0.03
        },
        "<"
    )

    timeline = gsap.timeline({ paused: true })
    timeline.fromTo('.elementToAnimate', { color: 'black', borderColor: 'black' }, { color: 'white', borderColor: 'white' });
})
</script>

<style scoped>
.div-block-3 {
    flex-direction: column;
    align-items: flex-start;
    display: flex;
    overflow: hidden;
    position: relative;
}

.text-block-3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
</style>