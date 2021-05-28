<script>
  import SpecsBox from "../components/SpecsBox.svelte";
  import SpecItem from "../components/SpecItem.svelte";
</script>

<div class="w-1/3 px-3">
  <a
    class="text-3xl hover:no-underline"
    href="https://www.npmjs.com/package/@carbon/charts-svelte"
    target="_blank">Carbon</a
  >

  <SpecsBox title="Styling">
    <SpecItem
      title="Color"
      link="https://carbon-design-system.github.io/carbon-charts/svelte/?path=/story/utility-colors--custom-colors-simple-bar"
      >Customizable</SpecItem
    >
    <SpecItem
      title="Legends"
      link="https://carbon-design-system.github.io/carbon-charts/svelte/?path=/story/utility-legend--centered-legend-simple-bar"
      >Highly Customizable, Truncateable</SpecItem
    >
    <SpecItem
      title="Locale"
      link="https://carbon-design-system.github.io/carbon-charts/svelte/?path=/story/utility-locale--turkish-locale-date-fns-locales"
      >Supported</SpecItem
    >
    <SpecItem
      title="Toolbar"
      link="https://carbon-design-system.github.io/carbon-charts/svelte/?path=/story/utility-toolbar--vertical-stacked-bar-time-series"
      >Zoom In/Out, Undo, Range</SpecItem
    >
    <SpecItem
      title="Thresholds"
      link="https://carbon-design-system.github.io/carbon-charts/svelte/?path=/story/utility-thresholds--thresholds-line"
      >Supported</SpecItem
    >
    <SpecItem title="Tooltip" con>Not Customizable</SpecItem>
  </SpecsBox>

  <SpecsBox title="Features">
    <SpecItem>Responsive</SpecItem>
    <SpecItem>Interactive</SpecItem>
    <SpecItem>Easy to Use</SpecItem>
    <SpecItem con>Not Exportable</SpecItem>
    <SpecItem con>Not Animateable</SpecItem>
  </SpecsBox>
</div>
