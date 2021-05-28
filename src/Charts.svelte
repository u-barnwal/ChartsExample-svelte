<script>
  import FroalaCharts from "froalacharts";
  import FroalaTheme from "froalacharts/themes/froalacharts.theme.froala";
  import SvelteFC, { fcRoot } from "svelte-froalacharts";

  import ChartContainer from "./components/ChartContainer.svelte";
  import SpecsBox from "./components/SpecsBox.svelte";
  import SpecItem from "./components/SpecItem.svelte";
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

  <div class="flex flex-wrap">
    <!-- Bar -->

    <!-- Donut -->

    <!-- Pie -->

    <!-- Line -->

    <!-- Line + Bar -->

    <!-- Gauge -->
  </div>
</main>
