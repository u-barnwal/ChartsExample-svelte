<script>
  import FroalaCharts from "froalacharts";
  import FroalaTheme from "froalacharts/themes/froalacharts.theme.froala";
  import { fcRoot } from "svelte-froalacharts";

  import Carbon from "./charts/Carbon.svelte";
  import Frappe from "./charts/Frappe.svelte";
  import Froala from "./charts/Froala.svelte";

  fcRoot(FroalaCharts, FroalaTheme);
</script>

<main class="p-5 lg:p-10">
  <div class="lg:flex flex-wrap mb-3">
    <Carbon />

    <Frappe />

    <Froala />
  </div>
</main>
