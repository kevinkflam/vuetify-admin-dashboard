<template>
  <v-toolbar
    id="core-toolbar"
    app
    dark
    style="background: #424242;"
    flat
    prominent
  >
    <div class="v-toolbar-title">
      <v-toolbar-title class="font-weight-light text-general">
        <v-btn
          v-if="responsive"
          class="default v-btn--simple"
          icon
          @click.stop="onClickBtn"
        >
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
        <v-row align="centre">
          December the 18th 2030 ~~~ HAPPY HOLIDAYS!!!
        </v-row>
      </v-toolbar-title>
    </div>

    <v-spacer />
  </v-toolbar>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  data: () => ({
    title: 'THE UBYSSEY',
    responsive: false,
    responsiveInput: false,
  }),

  computed: {
    ...mapGetters(['authorized']),
  },

  watch: {
    $route(val) {
      this.title = val.meta.name;
    },
  },

  mounted() {
    this.onResponsiveInverted();
    window.addEventListener('resize', this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResponsiveInverted);
  },

  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onClickBtn() {
      this.setDrawer(!this.$store.state.app.drawer);
    },
    onClick() {
      //
    },
    onResponsiveInverted() {
      if (window.innerWidth < 991) {
        this.responsive = true;
        this.responsiveInput = false;
      } else {
        this.responsive = false;
        this.responsiveInput = true;
      }
    },
    logout: function() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/');
      });
    },
  },
};
</script>

<style>
#core-toolbar a {
  text-decoration: none;
}
</style>
