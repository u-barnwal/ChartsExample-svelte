<script>
  export let title = "";
</script>

<div class="flex justify-between text-xs mt-0.5">
  {#if title}
    <span class="text-blue-600 font-bold">{title}:</span>
  {/if}
  <span class="text-right"><slot /></span>
</div>
