<script>
  import SpecsBox from "../components/SpecsBox.svelte";
  import SpecItem from "../components/SpecItem.svelte";
</script>

<div class="w-1/3 px-3">
  <a
    class="text-3xl hover:no-underline"
    href="https://www.npmjs.com/package/svelte-frappe-charts"
    target="_blank">Frappe</a
  >

  <SpecsBox title="Styling">
    <SpecItem
      title="Color"
      link="https://frappe.io/charts/docs/reference/configuration#colors"
      >Customizable</SpecItem
    >
    <SpecItem
      title="Legends"
      link="https://frappe.io/charts/docs/reference/configuration#tooltipoptions"
      >Truncateable</SpecItem
    >
    <SpecItem title="Locale" con>Not Supported</SpecItem>
    <SpecItem title="Thresholds" con>Not Supported</SpecItem>
    <SpecItem title="Toolbar" con>Unavailable</SpecItem>
    <SpecItem
      title="Tooltip"
      link="https://frappe.io/charts/docs/reference/configuration#tooltipoptions"
      >Customizable</SpecItem
    >
  </SpecsBox>

  <SpecsBox title="Features">
    <SpecItem>Responsive</SpecItem>
    <SpecItem con>Not Interactive</SpecItem>
    <SpecItem>Easy to Use</SpecItem>
    <SpecItem>Exportable</SpecItem>
    <SpecItem>Animated</SpecItem>
  </SpecsBox>
</div>
