<script lang="ts">
  import { SvelteLenis } from 'svelte-lenis'
  import { imgs } from './data'

  const imgsWithScale = imgs.map((item, index) => ({
    src: item,
    scale: index + 6
  }))

  $effect(() => {
    // @ts-ignore
    if (typeof ScrollTimeline === 'undefined') {
      // @ts-ignore
      import('scroll-timeline-polyfill/dist/scroll-timeline.js')
    }
  })
</script>

<SvelteLenis root>
  <div class="h-[50vh]"></div>
  <div class="h-[300vh] relative">
    <div class="sticky overflow-hidden top-0 h-screen">
      {#each imgsWithScale as img}
        <div class="absolute top-0 w-full h-full flex items-center justify-center wrapper" style="--scale: {img.scale}">
          <div class="relative overflow-hidden img-container">
            <img src={img.src} class="object-cover w-full h-full" alt="" />
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="h-[80vh]"></div>
</SvelteLenis>


<style>
  @keyframes parallax {
    to {
      transform: scale(var(--scale));
    }
  }

  .wrapper {
    animation: parallax linear both;
    animation-timeline: scroll(block root);
    animation-range: 50vh 250vh;
  }

  .img-container {
    position: relative;
    width: 25vw;
    height: 25vh;
  }

  .wrapper:nth-child(2) {
    & .img-container {
      top: -28vh;
    }
  }

  .wrapper:nth-child(3) {
    & .img-container {
      left: -28vw;
    }
  }

  .wrapper:nth-child(4) {
    & .img-container {
      right: -28vw;
    }
    
  }

  .wrapper:nth-child(5) {
    & .img-container {
      bottom: -28vh;
    }
  }
</style>