<template>
    <button ref="buttonRef" @mouseenter="handleMouse" @mouseleave="handleMouse" @click="emitClick"
        class="w-inline-block flex items-center justify-center gap-2  rounded-full w-full elementToAnimate"
        :style="{ backgroundColor: bgColor, height: heightButton + 'px' }">
        <div class="div-block-3">
            <div ref="titleARef" id="title-a" :style="{ color: textColor }">{{ text }}</div>
            <div ref="titleAARef" class="text-block-3" id="title-aa" :style="{ color: textColor }">{{ text }}</div>
        </div>
    </button>
</template>

<script lang="ts" setup>
import gsap from 'gsap';
import SplitType from 'split-type';

const titleARef = ref(null) as any;
const titleAARef = ref(null) as any;
const buttonRef = ref(null) as any;
let tl = ref() as any;

const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    bgColor: {
        type: String,
        required: false,
        default: 'transparent',
    },
    textColor: {
        type: String,
        required: false,
        default: 'black',
    },
    heightButton: {
        type: Number,
        required: false,
        default: 44,
    },
});

const emit = defineEmits(['clickButton']);

const handleMouse = () => {
    tl.restart();
};

onMounted(() => {
    const split = new SplitType(titleARef.value, { types: 'chars' });
    const splitb = new SplitType(titleAARef.value, { types: 'chars' });

    tl = gsap.timeline({ paused: true, smoothChildTiming: true });

    tl.to(split.chars, {
        duration: 0.45,
        yPercent: -100,
        stagger: 0.02,
        ease: 'power2.out',
    }).fromTo(
        splitb.chars,
        { yPercent: 100 },
        { duration: 0.45, yPercent: 0, stagger: 0.02, ease: 'power2.out' },
        '<'
    );
});

const emitClick = () => {
    emit('clickButton');
};
</script>

<style lang="scss" scoped>
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
