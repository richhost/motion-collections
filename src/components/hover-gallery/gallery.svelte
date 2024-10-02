<script lang="ts">
  import gsap from "gsap";

  import { data } from "./data";

  const { index }: { index: number } = $props();

  let container = $state<HTMLDivElement>();
  let xMoveFn: gsap.QuickToFunc;
  let yMoveFn: gsap.QuickToFunc;

  const initMoveFn = () => {
    if (!xMoveFn) {
      xMoveFn = gsap.quickTo(container!, "left", {
        duration: 0.8,
        ease: "power3",
      });
    }
    if (!yMoveFn) {
      yMoveFn = gsap.quickTo(container!, "top", {
        duration: 0.8,
        ease: "power3",
      });
    }
  };

  $effect(() => {
    if (!container) return;
    initMoveFn();
  });

  const onmousemove = (event: MouseEvent) => {
    const { pageX, pageY } = event;
    if (!xMoveFn || !yMoveFn) {
      initMoveFn();
    }
    xMoveFn(pageX);
    yMoveFn(pageY);
  };
</script>

<svelte:window {onmousemove} />

<div
  bind:this="{container}"
  class="absolute w-80 aspect-[4/3] overflow-hidden pointer-events-none -translate-x-1/2 -translate-y-1/2 scale-[var(--scale)]"
>
  <div
    class="absolute w-full h-full transition-[top] duration-500"
    style="top: {index * -100}%"
  >
    {#each data as item}
      <div
        class="w-full h-full flex items-center justify-center"
        style="background: {item.color};"
      >
        <img src="{item.img}" class="w-64 object-contain" alt="" />
      </div>
    {/each}
  </div>
</div>
