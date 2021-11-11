<template>
  <div class="tw-w-full">
  <div class="tw-mt-10 tw-p-4" :class=" ['d-flex', 'justify-center', 'tw-w-full', $vuetify.breakpoint.mobile?'tw-mt-5 scroll':'']">
    <div class=" d-flex justify-center preference tw-w-full align-center">
      <div v-for="data in field" :key="data.title">
        <v-menu
            v-model="data.enable"
            offset-y
            style="max-width: 600px; "
        >
          <template v-slot:activator="{ on, attrs }">
            <div :class="[data.selected?'boxRad' :'boxRad']">
              <v-text-field
                  :label="data.title"
                  v-bind="attrs"
                  v-on="on"
                  solo
                  v-model="data.selected"
                  @click:append="data.enable = !data.enable"
                  hide-details
                  style="color: #5D18BE;"
                  :append-icon="data.enable?'mdi-chevron-up':'mdi-chevron-down'"
              >
              </v-text-field>

            </div>
          </template>

          <div v-if="!$vuetify.breakpoint.mobile">
            <v-card>
              <v-list>
                <v-list-item
                    v-for="item in data.filteredOn"
                    :key="item.name"
                    link
                    @click="$emit('selected',item, data)"
                >
                  <v-list-item-title v-text="item.name" class="tw-flex pl-3 tw-w-48"
                  ></v-list-item-title>

                </v-list-item>
              </v-list>
            </v-card>
          </div>

          <div v-else>
            <v-bottom-sheet
                v-model="data.enable"
                hide-overlay
                class="radCard"
            >
              <v-card width="100vw" height="85vh" style="border-radius: 32px 32px 0px 0px; padding: 2.5rem 1.2rem">
                <v-divider class="tw-ml-24 tw-mb-7" style="max-width:100px;border: 2px solid #D0DCE4"/>
                <div class="mb-5">
                  <div class="tw-flex align-center tw-justify-between">
                    <h3 class="mb-3 filterHeader">
                      {{ data.title }}
                    </h3>
                    <v-btn class="mt-n4"  color="#9CABB5"
                                 text>Reset</v-btn>
                  </div>
                  <div class="tw-flex tw-w-full tw-flex-wrap tw-mt-5 tw-gap-2">
                    <div class="tw-mb-7" v-for="(category, i) in data.filteredOn" :key="i">
                  <span
                      @click="$emit('selected',category, data)"
                        :class="['py-2', 'px-4', ]"
                  >{{
                      category.name
                    }}</span>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-bottom-sheet>
          </div>

        </v-menu>

      </div>
    </div>
  </div>


  <div id="background" style="background: url('https://res.cloudinary.com/semicolon-dev/image/upload/v1635155518/semicolonAfrica/Frame_48096301_fst5d0.png'); background-size: cover" class="tw-h-32 mt-3 tw-w-full">
    <div  class="tw-flex tw-h-32  tw-items-center tw-justify-center">
    </div>
  </div>
  </div>
</template>

<script>
export default {
name: "NewsHeader",
  props:{
    field:[Array]
  },

}
</script>

<style scoped lang="scss">
.mobileCard {
  border-radius: 32px 32px 0px 0px;
}
h6{
  font-family: IBM Plex Serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.02em;

  color: #ffffff;

}
.scroll {
  max-width: 87vh;
  overflow-x: auto;
}

.scroll::-webkit-scrollbar {
  background: transparent !important;
  width: 5px;
  display: none;
  height: 1px;
}

.scroll::-webkit-scrollbar-thumb {
  background: #c4c4c4 !important;
  max-height: 15px !important;
  border-radius: 6px;
}

.preference {
  display: flex;
  //height: 70px;
  //background: #FFFFFF;
  //box-shadow: 0px 3px 5px 1px rgba(0, 142, 239, 0.08);
  flex-direction: row;
  @media (max-width: 768px) {
    display: contents;
    height: fit-content;
  }
}

.mobileFilter {
  display: none;
  @media (max-width: 767px) {
    display: flex;
  }
}

.jobWrapper {
  .some-style > > > .v-input__slot::before {
    border-style: none !important;
  }

  ::v-deep .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
    border: none !important;
  }

  ::v-deep .v-application .primary--text {
    color: red !important;
  }


}

::v-deep .v-dialog:not(.v-dialog--fullscreen).v-dialog {
  margin: 0 !important;
  max-height: 100%;
  @media screen and (min-width: 1024px) {
    display: none !important;
  }
}

.theme--light.v-application {
  @media screen and (min-width: 1024px) {
    display: none;
  }
}

::v-deep .theme--light.v-application .theme--dark.v-overlay {
  display: none !important;
}

.v-dialog__content {
  top: 50% !important;
}

.filterTitle {
  background: #FFFFFF;
  border: 1px solid #D0DCE4;
  box-sizing: border-box;
  border-radius: 8px;
  line-height: 28px;
  color: #142E70;
}

.filterHeader {
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #475661;

}

.filterTitleOnClick {
  background: #0C8B99;
  border: 1px solid #142E70;
  box-sizing: border-box;
  border-radius: 8px;

}


</style>
