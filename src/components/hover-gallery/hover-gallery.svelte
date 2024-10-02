<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicIn } from "svelte/easing";

  import { data } from "./data";
  import Gallery from './gallery.svelte'

  let index = $state(0);

  const scale = tweened(0, {
    duration: 400,
    easing: cubicIn,
  });

  const onmouseenter = () => {
		scale.set(1);
	};
	const onmouseleave = () => {
		scale.set(0);
	};
</script>

<main
  class="min-h-dvh flex items-center justify-center"
  style="--scale: {$scale}"
>
  <div class="md:hidden">Please view on desktop.</div>

  <div class="hidden md:block p-10 mx-auto max-w-7xl w-full">
    <div {onmouseenter} {onmouseleave} role="none">
      {#each data as item, idx}
        {@render Item(item.title, idx)}
      {/each}
    </div>
  </div>

  <Gallery {index} />
</main>


{#snippet Item(title: string, idx: number)}
  <div 
    onmouseenter={() => index = idx}
    role="none"
    class="flex items-center justify-between p-10 border-t border-neutral-300 cursor-pointer group last:border-b"
  >
    <h2 class="text-xl md:text-6xl group-hover:opacity-50 group-hover:-translate-x-2 transition duration-[400ms]">{title}</h2>
    <p class="group-hover:opacity-50 group-hover:translate-x-2 transition duration-[400ms]">Lorem ipsum dolor sit</p>
  </div>
{/snippet}