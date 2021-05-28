<script>
  import SpecsBox from "../components/SpecsBox.svelte";
  import SpecItem from "../components/SpecItem.svelte";
</script>

<div class="w-1/3 px-3">
  <a
    class="hover:no-underline flex items-center"
    href="https://froala.com/charts/docs/frameworks/svelte/"
    target="_blank"
  >
    <span class="text-3xl">Froala</span>
    <a
      class="bg-yellow-600 text-xs inline-block py-1 px-2 text-white rounded-md ml-2"
      href="https://froala.com/charts/pricing/"
      target="_blank">Paid</a
    ></a
  >

  <SpecsBox title="Styling">
    <SpecItem title="Color" link="https://froala.com/charts/docs/api/options/"
      >Customizable</SpecItem
    >
    <SpecItem title="Legends" link="https://froala.com/charts/docs/api/options/"
      >Customizable</SpecItem
    >
    <SpecItem title="Locale" con>Not Supported</SpecItem>
    <SpecItem title="Thresholds" con>Not Supported</SpecItem>
    <SpecItem title="Toolbar" link="https://froala.com/charts/docs/api/options/"
      >Export</SpecItem
    >
    <SpecItem title="Tooltip" con>Not Customizable</SpecItem>
  </SpecsBox>

  <SpecsBox title="Features">
    <SpecItem>Responsive</SpecItem>
    <SpecItem>Interactive</SpecItem>
    <SpecItem con>Not Easy to Use</SpecItem>
    <SpecItem>Exportable</SpecItem>
    <SpecItem>Animated</SpecItem>
  </SpecsBox>
</div>
