<script lang="ts">
  type Props = {
    title: string;
    index: number;
    idx: number;
  };

  let { title, index = $bindable(), idx }: Props = $props();
</script>
