<script>
  import Charts from "./Charts.svelte";
</script>

<main>
  <Charts />
</main>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/@carbon/charts/styles.min.css"
  />
</svelte:head>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
