<template>
      <div class="lenis-c">
        <Preloader />
            <NuxtLayout>
              <NuxtPage />
            </NuxtLayout>
      </div>
</template>
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
