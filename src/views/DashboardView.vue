<template>
  <v-app id="dashboard-view" dark>
    <core-toolbar />
    <core-drawer />
    <v-content>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'DashboardView',
  metaInfo() {
    return {
      title: 'UBC 2030 Sustainability contest by Kevin Lam',
    };
  },
};
</script>

<style></style>
