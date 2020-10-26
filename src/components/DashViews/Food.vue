<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
      <v-flex md12 sm12 lg4>
        <material-chart-card
          :data="dailySalesChart.data"
          :options="dailySalesChart.options"
          color="warning"
          type="Line"
        >
          <h4 class="title font-weight-light">Cricket ice cream sales</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon color="green" small>
              mdi-arrow-up
            </v-icon>
            <span class="green--text">23%</span>&nbsp; increase in today's
            visits
          </p>
        </material-chart-card>
      </v-flex>
      <v-flex lg8>
        <material-card
          color="info"
          title="The new insect menu is booming!"
          text="Crickets are the new best protein"
        >
          5 years ago, when insects such as crickets, grasshoppers, and other
          grubs were added to some shop menus in the Nest, most students were
          disgusted and laughed at how silly this change was. However, once the
          Blue Chip cookies started incorporating Cricket Cookies, sales started
          rising and more students began trying the new source of protein.
          <br />
          <br />
          This week, the UBC chapter of Rain or Shine incorporated their new
          Cricket and Cream flavour, and sales have boosted up by 23% compared
          to last week! Things are certainly looking up to the new sources of
          protein as a community and relying less on the detrimental impacts of
          mass-producing protein sources such as beef and pork.
        </material-card>
      </v-flex>
      <v-flex lg8>
        <material-card
          color="info"
          title="UBC Farm yearly summary"
          text="Yummy yummy in my tummy"
        >
          As a summary to this year's crop yield, the UBC farm has been able to
          obtain a record amount, able to independently supply first-year meals
          during the whole summer! This was the first time this has ever
          happened, and it may be due to the recent expansion of the UBC farm,
          as well as the increase in student involvement in caretaking. Students
          have cared for the new farm and their efforts have shone, through the
          quantity and quality of the food produced.
        </material-card>
      </v-flex>
      <v-flex md12 sm12 lg4>
        <material-chart-card
          :data="emailsSubscriptionChart.data"
          :options="emailsSubscriptionChart.options"
          :responsive-options="emailsSubscriptionChart.responsiveOptions"
          color="red"
          type="Bar"
        >
          <h4 class="title font-weight-light">
            UBC Farm crop harvests
          </h4>
          <p class="category d-inline-flex font-weight-light"></p>

          <p class="category d-inline-flex font-weight-light">
            <v-icon color="orange" small>
              mdi-carrot
            </v-icon>
            Carrots, Cabbages, Eggplants, and more!
          </p>
        </material-chart-card>
      </v-flex>
      <v-flex md12 sm12 lg4>
        <material-chart-card
          :data="dataCompletedTasksChart.data"
          :options="dataCompletedTasksChart.options"
          color="indigo"
          type="Line"
        >
          <h3 class="title font-weight-light">Food waste produced</h3>
          <p class="category d-inline-flex font-weight-light">
            <v-icon color="red" small>
              mdi-arrow-down
            </v-icon>
            <span class="red--text">33%</span>&nbsp; decrease in this week's
            garbage
          </p>
        </material-chart-card>
      </v-flex>
      <v-flex lg8>
        <material-card
          color="info"
          title="Waste begone!"
          text="Our efforts have not gone to waste"
        >
          Students and Faculty members certainly have taken a more conscious
          approach to their waste management, with a record-breaking low of only
          2000lbs of garbage for all of UBC, and 3000lbs of food waste. Much of
          the food waste has gone to compost or turned to energy through the
          newly constructed biofuel production facility on campus, adding to the
          sustainable energy cycle.
        </material-card>
      </v-flex>
      <v-flex lg4>
        <material-stats-card
          color="green"
          icon="mdi-store"
          title="Canned goods donated"
          value="12,475"
          sub-text="Let's help out the less fortunate!"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Food',
  data() {
    return {
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [[24, 54, 47, 36, 69, 65, 83]],
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 90, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      dataCompletedTasksChart: {
        data: {
          labels: [
            'Ja',
            'Fe',
            'Ma',
            'Ap',
            'Mai',
            'Ju',
            'Jul',
            'Au',
            'Se',
            'Oc',
            'No',
            'De',
          ],
          series: [
            [
              4678,
              4876,
              4750,
              4500,
              4600,
              4300,
              4100,
              3767,
              3145,
              3467,
              3290,
              3010,
            ],
          ],
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 2500,
          high: 5000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            'Ja',
            'Fe',
            'Ma',
            'Ap',
            'Mai',
            'Ju',
            'Jul',
            'Au',
            'Se',
            'Oc',
            'No',
            'De',
          ],
          series: [
            [400, 443, 500, 760, 809, 987, 1234, 1123, 900, 654, 532, 432],
          ],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 1350,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          [
            'screen and (max-width: 768x)',
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
    };
  },
  methods: {
    complete(index) {
      this.list[index] = !this.list[index];
    },
  },
};
</script>
