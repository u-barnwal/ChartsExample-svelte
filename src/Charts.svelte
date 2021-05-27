<script>
  import {
    BarChartSimple,
    DonutChart,
    GaugeChart,
    LineChart,
    PieChart,
    ComboChart,
  } from "@carbon/charts-svelte";

  import Chart from "svelte-frappe-charts";

  import FroalaCharts from "froalacharts";
  import FroalaTheme from "froalacharts/themes/froalacharts.theme.froala";
  import SvelteFC, { fcRoot } from "svelte-froalacharts";

  import ChartContainer from "./components/ChartContainer.svelte";
  import SpecsBox from "./components/SpecsBox.svelte";
  import SpecItem from "./components/SpecItem.svelte";

  fcRoot(FroalaCharts, FroalaTheme);
</script>

<main class="p-10">
  <div class="flex flex-wrap mb-3">
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
        <SpecItem
          title="Color"
          link="https://froala.com/charts/docs/api/options/"
          >Customizable</SpecItem
        >
        <SpecItem
          title="Legends"
          link="https://froala.com/charts/docs/api/options/"
          >Customizable</SpecItem
        >
        <SpecItem title="Locale" con>Not Supported</SpecItem>
        <SpecItem title="Thresholds" con>Not Supported</SpecItem>
        <SpecItem
          title="Toolbar"
          link="https://froala.com/charts/docs/api/options/">Export</SpecItem
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
  </div>

  <div class="flex flex-wrap">
    <!-- Bar -->
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
      <Chart
        data={{
          labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
          datasets: [{ values: [10, 12, 3, 9, 8, 15, 9] }],
        }}
        type="bar"
      />
    </ChartContainer>

    <ChartContainer>
      <SvelteFC
        {...{
          type: "column",
          renderAt: "ft",
          dataSource: {
            chart: {
              theme: "froala",
              caption: "Comparison of Quarterly Revenue",
              xAxisname: "Quarter",
              yAxisName: "Revenues (In USD)",
              numberPrefix: "$",
            },
            categories: [
              {
                category: [
                  { label: "Q1" },
                  { label: "Q2" },
                  { label: "Q3" },
                  { label: "Q4" },
                ],
              },
            ],
            dataset: [
              {
                data: [
                  { value: "10000" },
                  { value: "11500" },
                  { value: "12500" },
                  { value: "15000" },
                ],
              },
            ],
          },
        }}
      />
    </ChartContainer>

    <!-- Donut -->

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
      <SvelteFC
        {...{
          type: "doughnut",
          renderAt: "ft",
          dataSource: {
            chart: {
              caption: "Android Distribution for our app",
              exportEnabled: "1",
              subcaption: "For all users in 2017",
              showpercentvalues: "1",
              defaultcenterlabel: "Android Distribution",
              aligncaptionwithcanvas: "0",
              captionpadding: "0",
              decimals: "1",
              plottooltext: "$percentValue of our Android users are on $label",
              centerlabel: "# Users: $value",
              theme: "froala",
            },
            data: [
              { label: "Ice Cream Sandwich", value: "1000" },
              { label: "Jelly Bean", value: "5300" },
              { label: "Kitkat", value: "10500" },
              { label: "Lollipop", value: "18900" },
              { label: "Marshmallow", value: "17904" },
            ],
          },
        }}
      />
    </ChartContainer>

    <!-- Pie -->

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
      <SvelteFC
        {...{
          type: "pie",
          renderAt: "ft",
          dataSource: {
            chart: {
              caption: "Split of Visitors by Age Group",
              subCaption: "Last year",
              use3DLighting: "0",
              showPercentValues: "1",
              decimals: "1",
              useDataPlotColorForLabels: "1",
              exportEnabled: "1",
              theme: "froala",
            },
            data: [
              { label: "Teenage", value: "1250400" },
              { label: "Adult", value: "1463300" },
              { label: "Mid-age", value: "1050700" },
              { label: "Senior", value: "491000" },
            ],
          },
        }}
      />
    </ChartContainer>

    <!-- Line -->

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
      <SvelteFC
        {...{
          type: "line",
          renderAt: "ft",
          dataSource: {
            chart: {
              caption: "Reach of Social Media Platforms amoung youth",
              yaxisname: "% of youth on this platform",
              subcaption: "2012-2016",
              showhovereffect: "1",
              numbersuffix: "%",
              drawcrossline: "1",
              plottooltext: "$dataValue of youth were on $seriesName",
              theme: "froala",
            },
            categories: [
              {
                category: [
                  { label: "2012" },
                  { label: "2013" },
                  { label: "2014" },
                  { label: "2015" },
                  { label: "2016" },
                ],
              },
            ],
            dataset: [
              {
                seriesname: "Facebook",
                data: [
                  { value: "62" },
                  { value: "64" },
                  { value: "64" },
                  { value: "66" },
                  { value: "78" },
                ],
              },
              {
                seriesname: "Instagram",
                data: [
                  { value: "16" },
                  { value: "28" },
                  { value: "34" },
                  { value: "42" },
                  { value: "54" },
                ],
              },
              {
                seriesname: "LinkedIn",
                data: [
                  { value: "20" },
                  { value: "22" },
                  { value: "27" },
                  { value: "22" },
                  { value: "29" },
                ],
              },
              {
                seriesname: "Twitter",
                data: [
                  { value: "18" },
                  { value: "19" },
                  { value: "21" },
                  { value: "21" },
                  { value: "24" },
                ],
              },
            ],
          },
        }}
      />
    </ChartContainer>

    <!-- Line + Bar -->

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

    <ChartContainer>
      <SvelteFC
        {...{
          type: "combination",
          renderAt: "ft",
          dataSource: {
            chart: {
              caption: "Revenue, Profits & Number of employees",
              drawcrossline: "1",
              yaxisname: "Revenue / Profit (in $)",
              syaxisname: "Number of employees",
              showvalues: "0",
              showanchors: "0",
              numberprefix: "$",
              plothighlighteffect: "fadeout",
              theme: "froala",
            },
            categories: [
              {
                category: [
                  { label: "Mar-2012" },
                  { label: "Jun-2012" },
                  { label: "Sept-2012" },
                  { label: "Dec-2012" },
                  { label: "Mar-2013" },
                  { label: "Jun-2013" },
                  { label: "Sept-2013" },
                  { label: "Dec-2013" },
                  { label: "Mar-2014" },
                  { label: "Jun-2014" },
                  { label: "Sept-2014" },
                  { label: "Dec-2014" },
                  { label: "Mar-2015" },
                  { label: "Jun-2015" },
                  { label: "Sept-2015" },
                  { label: "Dec-2015" },
                  { label: "Mar-2016" },
                  { label: "Jun-2016" },
                  { label: "Sept-2016" },
                  { label: "Dec-2016" },
                  { label: "Mar-2017" },
                  { label: "Jun-2017" },
                ],
              },
            ],
            dataset: [
              {
                seriesname: "Revenue",
                plottooltext: "Revenue in $label : <b>$dataValue</b>",
                data: [
                  { value: "36000" },
                  { value: "22000" },
                  { value: "24000" },
                  { value: "42000" },
                  { value: "35000" },
                  { value: "21000" },
                  { value: "26000" },
                  { value: "28000" },
                  { value: "47000" },
                  { value: "38000" },
                  { value: "29000" },
                  { value: "23000" },
                  { value: "24000" },
                  { value: "42000" },
                  { value: "35000" },
                  { value: "21000" },
                  { value: "26000" },
                  { value: "28000" },
                  { value: "47000" },
                  { value: "38000" },
                  { value: "29000" },
                  { value: "23000" },
                ],
              },
              {
                seriesname: "Profit",
                plottooltext: "Profit in $label : <b>$dataValue</b>",
                renderas: "area",
                showvalues: "0",
                data: [
                  { value: "4000" },
                  { value: "5000" },
                  { value: "3000" },
                  { value: "4000" },
                  { value: "1000" },
                  { value: "7000" },
                  { value: "1000" },
                  { value: "4000" },
                  { value: "1000" },
                  { value: "6000" },
                  { value: "2000" },
                  { value: "7000" },
                  { value: "6000" },
                  { value: "8000" },
                  { value: "10000" },
                  { value: "7000" },
                  { value: "8000" },
                  { value: "4000" },
                  { value: "9000" },
                  { value: "6000" },
                  { value: "6000" },
                  { value: "7000" },
                ],
              },
              {
                seriesname: "Number of Employees",
                parentyaxis: "S",
                renderas: "line",
                showvalues: "0",
                plottooltext: "$value employees",
                data: [
                  { value: "31" },
                  { value: "25" },
                  { value: "35" },
                  { value: "29" },
                  { value: "25" },
                  { value: "23" },
                  { value: "26" },
                  { value: "25" },
                  { value: "25" },
                  { value: "35" },
                  { value: "20" },
                  { value: "30" },
                  { value: "46" },
                  { value: "34" },
                  { value: "26" },
                  { value: "33" },
                  { value: "46" },
                  { value: "25" },
                  { value: "35" },
                  { value: "28" },
                  { value: "20" },
                  { value: "43" },
                ],
              },
            ],
          },
        }}
      />
    </ChartContainer>

    <!-- Gauge -->

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

    <ChartContainer />

    <ChartContainer>
      <SvelteFC
        {...{
          type: "angulargauge",
          renderAt: "ft",
          dataSource: {
            chart: {
              caption: "Walmart's Customer Satisfaction Score",
              subcaption: "2017",
              lowerlimit: "0",
              upperlimit: "100",
              showvalue: "1",
              numbersuffix: "%",
              theme: "froala",
            },
            colorrange: {
              color: [
                { minvalue: "0", maxvalue: "50", code: "#F2726F" },
                { minvalue: "50", maxvalue: "75", code: "#FFC533" },
                { minvalue: "75", maxvalue: "100", code: "#62B58F" },
              ],
            },
            dials: {
              dial: [{ value: "71", tooltext: "<b>9%</b> lesser that target" }],
            },
            trendpoints: {
              point: [
                {
                  startvalue: "80",
                  displayvalue: "Target",
                  thickness: "2",
                  color: "#E15A26",
                  usemarker: "1",
                  markerbordercolor: "#E15A26",
                  markertooltext: "80%",
                },
              ],
            },
          },
        }}
      />
    </ChartContainer>
  </div>
</main>
