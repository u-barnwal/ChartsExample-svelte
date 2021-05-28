<script>
  import {
    BarChartSimple,
    DonutChart,
    GaugeChart,
    LineChart,
    PieChart,
    ComboChart,
  } from "@carbon/charts-svelte";

  import ChartContainer from "../components/ChartContainer.svelte";
  import SpecsBox from "../components/SpecsBox.svelte";
  import SpecItem from "../components/SpecItem.svelte";
</script>

<div class="w-100 lg:w-1/3 px-3">
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

  <ChartContainer>
    <BarChartSimple
      data={[
        { group: "Qty", date: "2018-12-31T18:30:00.000Z", value: 10000 },
        { group: "More", date: "2019-01-01T18:30:00.000Z", value: 65000 },
        { group: "Sold", date: "2019-01-02T18:30:00.000Z", value: 30000 },
        {
          group: "Restocking",
          date: "2019-01-05T18:30:00.000Z",
          value: 49213,
        },
        { group: "Misc", date: "2019-01-06T18:30:00.000Z", value: 51213 },
      ]}
      options={{
        title: "Vertical simple bar (time series)",
        axes: {
          left: { mapsTo: "value" },
          bottom: { mapsTo: "date", scaleType: "time" },
        },
        height: "400px",
      }}
    />
  </ChartContainer>

  <ChartContainer>
    <DonutChart
      data={[
        { group: "2V2N 9KYPM version 1", value: 20000 },
        { group: "L22I P66EP L22I P66EP L22I P66EP", value: 65000 },
        { group: "JQAI 2M4L1", value: 75000 },
        { group: "J9DZ F37AP", value: 1200 },
        { group: "YEL48 Q6XK YEL48", value: 10000 },
        { group: "Misc", value: 25000 },
      ]}
      options={{
        title: "Donut (centered)",
        resizable: true,
        legend: { alignment: "center" },
        donut: { center: { label: "Browsers" }, alignment: "center" },
        height: "400px",
      }}
    />
  </ChartContainer>

  <ChartContainer>
    <PieChart
      data={[
        { group: "2V2N 9KYPM version 1", value: 20000 },
        { group: "L22I P66EP L22I P66EP L22I P66EP", value: 65000 },
        { group: "JQAI 2M4L1", value: 75000 },
        { group: "J9DZ F37AP", value: 1200 },
        { group: "YEL48 Q6XK YEL48", value: 10000 },
        { group: "Misc", value: 25000 },
      ]}
      options={{
        title: "Pie (centered)",
        resizable: true,
        legend: { alignment: "center" },
        pie: { alignment: "center" },
        height: "400px",
      }}
    />
  </ChartContainer>

  <ChartContainer>
    <LineChart
      data={[
        { group: "Dataset 1", key: "Qty", value: 34200 },
        { group: "Dataset 1", key: "More", value: 23500 },
        { group: "Dataset 1", key: "Sold", value: 53100 },
        { group: "Dataset 1", key: "Restocking", value: 42300 },
        { group: "Dataset 1", key: "Misc", value: 12300 },
        { group: "Dataset 2", key: "Qty", value: 34200 },
        { group: "Dataset 2", key: "More", value: 53200 },
        { group: "Dataset 2", key: "Sold", value: 42300 },
        { group: "Dataset 2", key: "Restocking", value: 21400 },
        { group: "Dataset 2", key: "Misc", value: 0 },
        { group: "Dataset 3", key: "Qty", value: 41200 },
        { group: "Dataset 3", key: "More", value: 18400 },
        { group: "Dataset 3", key: "Sold", value: 34210 },
        { group: "Dataset 3", key: "Restocking", value: 1400 },
        { group: "Dataset 3", key: "Misc", value: 42100 },
        { group: "Dataset 4", key: "Qty", value: 22000 },
        { group: "Dataset 4", key: "More", value: 1200 },
        { group: "Dataset 4", key: "Sold", value: 9000 },
        {
          group: "Dataset 4",
          key: "Restocking",
          value: 24000,
          audienceSize: 10,
        },
        { group: "Dataset 4", key: "Misc", value: 3000, audienceSize: 10 },
      ]}
      options={{
        title: "Line (discrete)",
        axes: {
          bottom: {
            title: "2019 Annual Sales Figures",
            mapsTo: "key",
            scaleType: "labels",
          },
          left: {
            mapsTo: "value",
            title: "Conversion rate",
            scaleType: "linear",
          },
        },
        height: "400px",
      }}
    />
  </ChartContainer>

  <ChartContainer>
    <ComboChart
      data={[
        { group: "School A", date: "Monday", value: 10000 },
        { group: "School A", date: "Tuesday", value: 65000 },
        { group: "School A", date: "Wednesday", value: 30000 },
        { group: "School A", date: "Thursday", value: 49213 },
        { group: "School A", date: "Friday", value: 49213 },
        { group: "Temperature", date: "Monday", temp: 70 },
        { group: "Temperature", date: "Tuesday", temp: 75 },
        { group: "Temperature", date: "Wednesday", temp: 31 },
        { group: "Temperature", date: "Thursday", temp: 31 },
        { group: "Temperature", date: "Friday", temp: 43 },
      ]}
      options={{
        title: "Combo (Line + Simple bar) - custom configs",
        axes: {
          left: {
            mapsTo: "value",
            scaleType: "linear",
            title: "USA Summer School Attendance",
          },
          right: {
            mapsTo: "temp",
            scaleType: "linear",
            title: "Temperature (°F)",
            correspondingDatasets: ["Temperature"],
          },
          bottom: {
            title: "Day of the Week",
            mapsTo: "date",
            scaleType: "labels",
          },
        },
        comboChartTypes: [
          { type: "simple-bar", correspondingDatasets: ["School A"] },
          {
            type: "line",
            options: { points: { radius: 5 } },
            correspondingDatasets: ["Temperature"],
          },
        ],
        height: "400px",
      }}
    />
  </ChartContainer>

  <ChartContainer>
    <GaugeChart
      data={[
        { group: "value", value: 42 },
        { group: "delta", value: -13.37 },
      ]}
      options={{
        title: "Gauge semicircular -- danger status",
        resizable: true,
        height: "250px",
        width: "100%",
        gauge: { type: "semi", status: "danger" },
      }}
    />
  </ChartContainer>
</div>
