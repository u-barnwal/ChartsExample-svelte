<script>
  export let title = "";
</script>

<div class="mt-3 border rounded-md p-3">
  <div class="text-xs font-bold mb-1 uppercase">{title}</div>

  <slot />
</div>
