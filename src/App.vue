<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.boxRad {
  max-width: 150px;
  margin-left: 20px !important;
  @media (max-width: 768px) {
    min-width: 150px;
  }

  .v-input__slot {
    border-radius: 30px !important;
  }

  .v-text-field.v-text-field--solo .v-input__control {
    min-height: 18px !important;
  }
}
.boxRadFilled {
  max-width: 150px;
  margin-left: 20px !important;
  @media (max-width: 768px) {
    min-width: 100px;
  }

  .v-input__slot {
    border-radius: 30px !important;
    background-color: #0C8B99 !important;
  }

  .theme--light.v-input input, .theme--light.v-input textarea, .theme--light.v-icon {
    color: white !important;

  }

  .v-text-field.v-text-field--solo .v-input__control {
    min-height: 18px !important;
  }
}

.list {
  ul {
    list-style: inside !important;
  }
}
</style>
