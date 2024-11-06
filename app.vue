<template>
  <div class="lenis-c">
    <Preloader />
    <NuxtLayout>
      <!-- <div v-for="image in images" :key="image">
        <img :src="image" alt="Public image" />
      </div> -->
      <!-- <img src="/13.jpg" /> -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">

// Function to return a list of image URLs
// const getImages = () => {
//   // Manually add the image paths relative to the public directory
//   return [
//     '/13.jpg',
//     // '/image2.png',
//     // '/image3.gif',
//     // Add all other images here
//   ]
// }

// Simulate fetching the images, in a real scenario this might be an API call
// const { data: images } = useAsyncData('images', () => Promise.resolve(getImages()))

// const prefetchImages = () => {
//   const images = [
//     '/13.jpg',
//     '/images/image1.jpg',
//     '/images/image2.jpg',
//     '/images/image3.jpg'
//   ];

//   images.forEach((image) => {
//     const link = document.createElement('link');
//     link.rel = 'prefetch';
//     link.href = image;
//     document.head.appendChild(link);
//   });
// };

// // Prefetch images when the component is mounted
// onMounted(() => {
//   prefetchImages();
// });
</script>
<style scoped>
html.lenis,
html.lenis body {
  height: auto;

}

.lenis-c {
  width: 100vw;
  /* margin-bottom: -8px; */
  /* margin-top: -8px; */
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}

body,
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* 
  .cursor-preview__title {
    font-size: 20px;
    line-height: 24px;
    color: #8a9eff;
    margin-bottom: 5px;
  }
  
  .cursor-preview__link {
    color: #fff;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
  }
  
  .cursor-preview__button {
    background: #78fff1;
    border-radius: 5px;
    padding: 16px 50px;
    color: #fff;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    outline: none;
    border:none;
  }
  


   .custom-cursor__ball {
      position: fixed;
      top: 0;
      left: 0;
      mix-blend-mode: difference;
      z-index: 99999;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.5s ease;
    }

    .custom-cursor__ball--big {
      content: "";
      width: 35px;
      height: 35px;
      background: #29217a;
      border-radius: 50%;
    }

    .custom-cursor__ball--small {
      content: "";
      width: 6px;
      height: 6px;
      background: #78fff1;
      border-radius: 50%;
    } */
</style>
