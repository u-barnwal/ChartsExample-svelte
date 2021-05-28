<script>
  import SvelteFC from "svelte-froalacharts";

  import ChartContainer from "../components/ChartContainer.svelte";
  import SpecsBox from "../components/SpecsBox.svelte";
  import SpecItem from "../components/SpecItem.svelte";
</script>

<div class="w-100 lg:w-1/3 px-3">
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

  <br />

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
