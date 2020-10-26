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
          text="Crickets are the best protein"
        >
          5 years ago, when insects such as crickets, grasshoppers, and other
          grubs were added to some shops' menus in the Nest, most students were
          disgusted and laughed at how silly this change was. However, once the
          Blue Chip cookies started incorporating Cricket Cookies, sales started
          rising and more students began trying the new source of protein.
          <br />
          This week, the UBC chapter of Rain or Shine incorporated their new
          Cricket and Cream flavour, sales have boosted up by 23% this week
          compared to last week! Things are certainly looking up to using new
          sources of proteins as a community and relying less on the
          high-impacts of other protein sources such as cows and pork.
        </material-card>
      </v-flex>
      <v-flex lg8>
        <material-card
          color="info"
          title="UBC Farm yearly summary"
          text="Yummy yummy in my tummy"
        >
          As a summary to this year's crops yield, the UBC farm has been able to
          obtain a record amount, able to independently supply first-year meals
          during the whole summer! This was the first time this has ever
          happened, and it may be due to the recent expansion of the UBC farm,
          as well as the increase in student involvement in caretaking. Students
          have cared for the new farm and their efforts have shone through the
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
          <h3 class="title font-weight-light">Waste produced</h3>
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
          title="25 New Trees Planted!"
          text="Loving the new greenery!"
        >
          With the addition of the 25 new trees just this past week, UBC has
          managed to plant over 5000 trees this whole year! The Pacific Spirit
          Park has redeveloped and grow into its luscious green space once
          again! We all remember that deadly fire at the end of 2020! Even the
          firefighters' water pumps and hoses froze up with the record-breaking
          frigid temperatures. Oh wow, 2020, such a long time ago... what an
          unforgettable year indeed.
        </material-card>
      </v-flex>
      <v-flex lg4>
        <material-stats-card
          color="green"
          icon="mdi-store"
          title="Canned goods donated"
          value="12,475"
          sub-icon="mdi-alert"
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
          series: [[12, 17, 7, 17, 23, 18, 38]],
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
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
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]],
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
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
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
          ],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 1000,
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
      headers: [
        {
          sortable: false,
          text: 'ID',
          value: 'id',
        },
        {
          sortable: false,
          text: 'Name',
          value: 'name',
        },
        {
          sortable: false,
          text: 'Salary',
          value: 'salary',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Country',
          value: 'country',
          align: 'right',
        },
        {
          sortable: false,
          text: 'City',
          value: 'city',
          align: 'right',
        },
      ],
      items: [
        {
          name: 'Dakota Rice',
          country: 'Niger',
          city: 'Oud-Tunrhout',
          salary: '$35,738',
        },
        {
          name: 'Minerva Hooper',
          country: 'Curaçao',
          city: 'Sinaai-Waas',
          salary: '$23,738',
        },
        {
          name: 'Sage Rodriguez',
          country: 'Netherlands',
          city: 'Overland Park',
          salary: '$56,142',
        },
        {
          name: 'Philip Chanley',
          country: 'Korea, South',
          city: 'Gloucester',
          salary: '$38,735',
        },
        {
          name: 'Doris Greene',
          country: 'Malawi',
          city: 'Feldkirchen in Kārnten',
          salary: '$63,542',
        },
      ],
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false,
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
