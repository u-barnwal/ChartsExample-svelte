<script>
  import Chart from "svelte-frappe-charts";

  import ChartContainer from "../components/ChartContainer.svelte";

  import SpecsBox from "../components/SpecsBox.svelte";
  import SpecItem from "../components/SpecItem.svelte";
</script>

<div class="w-100 lg:w-1/3 px-3">
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

  <ChartContainer>
    <Chart
      data={{
        labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
        datasets: [{ values: [10, 12, 3, 9, 8, 15, 9] }],
      }}
      type="bar"
    />
  </ChartContainer>

  <ChartContainer>
    <Chart
      data={{
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          { name: "Dataset 1", values: [18, 40, 30, 35, 8, 52, 17, -4] },
          { name: "Dataset 2", values: [30, 50, -10, 15, 18, 32, 27, 14] },
        ],
      }}
      type="donut"
    />
  </ChartContainer>

  <ChartContainer>
    <Chart
      data={{
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          { name: "Dataset 1", values: [18, 40, 30, 35, 8, 52, 17, -4] },
          { name: "Dataset 2", values: [30, 50, -10, 15, 18, 32, 27, 14] },
        ],
      }}
      type="pie"
    />
  </ChartContainer>

  <ChartContainer>
    <Chart
      data={{
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          { name: "Dataset 1", values: [18, 40, 30, 35, 8, 52, 17, -4] },
          { name: "Dataset 2", values: [30, 50, -10, 15, 18, 32, 27, 14] },
        ],
      }}
      type="line"
    />
  </ChartContainer>

  <ChartContainer>
    <Chart
      data={{
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            name: "Dataset 1",
            values: [18, 40, 30, 35, 8, 52, 17, -4],
            chartType: "bar",
          },
          {
            name: "Dataset 2",
            values: [30, 50, -10, 15, 18, 32, 27, 14],
            chartType: "line",
          },
        ],
      }}
      type="axis-mixed"
    />
  </ChartContainer>

  <ChartContainer />
</div>
