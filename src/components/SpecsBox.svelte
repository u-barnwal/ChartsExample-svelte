<script>
  export let title = "";
</script>

<div class="mt-3 border rounded-md p-4 bg-gray-50">
  <div class="text-xs font-bold mb-2 uppercase">{title}</div>

  <slot />
</div>
