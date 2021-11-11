<template>
  <div class="tw-w-10/12" style="margin:auto;">
    <div class="tw-my-10">
      <h6 class="read-title">Reading List</h6>
    </div>
    <v-row>
      <v-col v-if="getReadingList.length" class="scroll " cols="12" md="12" sm="12">
        <div v-for="(item,i) in getReadingList" :key="i" class="activity-wrapper tw-p-6  tw-mb-4">
          <v-row class="tw-flex activity" no-gutters>
            <v-col class="tw-mb- md:tw-mb-0" cols="12" md="12" sm="12">
              <h1>{{ item.title }}</h1>
            </v-col>
            <v-col cols="12" md="12" sm="12">
              <v-row class="tw-justify-between tw-items-center">
                <h4 class="tw-mb-2 tw-ml-3 md:tw-mb-0"> source: {{ item.source.name }}</h4>
                <v-btn small class="white--text font-weight-bold" color="#6aa8d4" @click="redirectToNewsPage(item)" depressed>Read more</v-btn>

              </v-row>
            </v-col>

          </v-row>

        </div>
      </v-col>
      <div class="tw-flex tw-justify-center tw-text-center" v-else>
        <span>No news added to your reading list yet </span>
      </div>
    </v-row>

  </div>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
name: "ReadingList",
  data(){
    return{
      readingList:[]
    }
  },
  computed:{
  ...mapGetters(['getReadingList'])
  },
  mounted(){
  if(!this.getReadingList.length)
    this.$store.commit('setReadingList',JSON.parse(localStorage.getItem('reading_list'))||null);
  },
  methods:{
      redirectToNewsPage(data) {
        let link = document.createElement("a");
        link.target = "_blank"
        link.href = data.url;

        link.click();
      }
    }


}
</script>

<style scoped>
.activity-wrapper {
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 8px;


}

.activity h1 {
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  color: #3c5ba1;
  padding-bottom: 20px;

}
.activity h4 {
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #475661;
  padding-bottom: 20px;

}

.activity span {
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #475661;
  margin-top: 5px;
}
.read-title{
  font-family: IBM Plex Serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #001343;
}

.scroll {
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;

}

.scroll::-webkit-scrollbar {
  background: transparent !important;
  width: 5px;
  height: 8px;
}

.scroll::-webkit-scrollbar-thumb {
  background: #c4c4c4 !important;
  max-height: 20px !important;
  border-radius: 6px;
}

</style>
