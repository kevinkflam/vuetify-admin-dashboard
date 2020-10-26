<template>
  <v-container fluid grid-list-xl fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12>
        <material-card color="general">
          <div slot="header">
            <div class="title font-weight-light mb-2">What's new at UBC</div>
            <div class="category">
              Everything you need to know all in one palce
            </div>
          </div>
          <v-card-text>
            <v-layout row wrap>
              <v-flex md6 sm12>
                <h2 class="title font-weight-light">Info and Socials</h2>

                <material-notification class="mb-3" color="info">
                  <strong>INFO</strong> - End of Finals!!! Happy Holidays from
                  the Ubyssey Staff
                </material-notification>

                <material-notification class="mb-3" color="info">
                  <strong>INFO</strong> - UBC Buildings close this Friday at
                  8:00PM
                </material-notification>

                <material-notification class="mb-3" color="warning">
                  <strong>SOCIAL</strong> - Pictures with Santa in the Nest at
                  5:00PM today!
                </material-notification>

                <material-notification class="mb-3" color="warning">
                  <strong>SOCIAL</strong> - Koerner's Pub Christmas Bash at
                  7:00PM tomorrow!
                </material-notification>

                <material-notification class="mb-3" color="warning">
                  <strong>SOCIAL</strong> - UBC Sustainability Club will be
                  throwing a bring-your-own-mug hot chocolate event tomorrow at
                  12:00PM
                </material-notification>
              </v-flex>

              <v-flex md6 sm12>
                <h2 class="title font-weight-light">Warnings and Danger</h2>

                <material-notification class="mb-3" color="error">
                  <strong>WARNING</strong> - Icy sidewalks, walk with caution
                </material-notification>

                <material-notification class="mb-3" color="error">
                  <strong>WARNING</strong> - Bundle up, snow incoming tonight
                </material-notification>

                <material-notification class="mb-3" color="error">
                  <strong>WARNING</strong> - Low visiblity, wear brightly
                  coloured clothes
                </material-notification>
              </v-flex>
            </v-layout>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    color: null,
    colors: ['purple', 'info', 'success', 'warning', 'error'],
    top: true,
    bottom: false,
    left: false,
    right: false,
    snackbar: false,
  }),

  methods: {
    snack(...args) {
      this.top = false;
      this.bottom = false;
      this.left = false;
      this.right = false;

      for (const loc of args) {
        this[loc] = true;
      }

      this.color = this.colors[Math.floor(Math.random() * this.colors.length)];

      this.snackbar = true;
    },
  },
};
</script>
