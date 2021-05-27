<script>
  export let title = "";
  export let link = "";
  export let con = false;
</script>

<div class="flex justify-between text-xs mt-0.5">
  {#if title && link}
    <a href={link} target="_blank" class="text-blue-600 font-bold">{title}:</a>
  {:else if title}
    <span class="font-bold">{title}:</span>
  {/if}
  <span class="text-right {con ? 'text-red-600' : 'text-green-600'}"
    ><slot /></span
  >
</div>
