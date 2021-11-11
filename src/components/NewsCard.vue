<template>
  <div>
    <v-row  style="" class="tw-justify-center">
      <v-col  class="tw-flex tw-p-8 md:tw-m-4 md:tw-p-0 tw-flex-col" v-for="(data,i) in newsArray " :key="i" cols="12" md="2" sm="12">
        <v-hover open-delay="200" v-slot="{ hover }">

          <v-card  max-width="500" :class="{ 'on-hover': hover }"  :elevation="hover ? 4 : 0" class="card flex d-flex flex-column tw-mt-6 tw-pb-4">
            <v-img
                :aspect-ratio="16/9"
                :src="data.urlToImage || 'https://www.freeiconspng.com/uploads/news-icon-30.jpg'"
            >
            </v-img>
            <v-card-subtitle>
              <h3>{{data.title}}</h3>
            </v-card-subtitle>
            <v-card-text>
              <small> Source • {{data.source.name}}</small>
            </v-card-text>
            <v-card-actions class="tw-justify-between">
              <v-btn @click="redirectToNewsPage(data)" class="white--text tw-text-capitalize font-weight-bold" color="#6aa8d4" depressed>Read more</v-btn>
              <v-btn @click="$emit('add',data)" class="later" color="#475661" text>Read Later</v-btn>
            </v-card-actions>

          </v-card>
        </v-hover>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props:{
    newsArray:[Array]
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



.card img {
  width: 100%;
  border-radius: 5px 5px 0 0;
}

img {
  display: block;
  max-width: 100%;
  /*min-height: 168px;*/
  vertical-align: middle;
  margin-bottom: 20px;
}

.v-card__title {
  padding: 0 !important;
}


h3 {
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #3c5ba1;
  /*padding-top: 15px;*/
  /*padding-bottom: 15px;*/
  flex: 1 1 auto !important;
  /* identical to box height */


}

h5 {
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #475661;
  /*flex: 1 1 auto !important;*/
}

small {
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #475661;

}

.v-card {
  background: #FFFFFF;
  /* Enum-Grey/5 */

  border: 1px solid #FBFBFB;
  box-sizing: border-box;
  box-shadow: 2px 2px 8px 1px rgba(0, 142, 239, 0.08);
  border-radius: 8px;
}

.v-card:not(.on-hover) {
  background: #FFFFFF !important;
  /* Enum-Grey/5 */

  border: 1px solid #FBFBFB !important;
  box-sizing: border-box !important;
  box-shadow: 2px 2px 8px 1px rgba(0, 142, 239, 0.08) !important;
  border-radius: 8px !important;
}
.later{
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #475661;
  text-transform: capitalize;

}

</style>
