<template>
<div class="tw-mb-8">
  <NewsHeader @selected="selectedArray" :field="field"/>
  <NewsCard @add="addToReadingList" :newsArray="newsArray"/>
  <ReadingList :readingList="readingList"/>
</div>
</template>

<script>
import NewsCard from "@/components/NewsCard";
import axios from "axios"
import NewsHeader from "@/components/NewsHeader";
import ReadingList from "@/components/ReadingList";
export default {
name: "NewsView",
  components: {ReadingList, NewsHeader, NewsCard},
  data(){
    return {
      newsArray:[],
      field: [
        {
          title: 'Category',
          type: 'topic',
          selected: '',
          enable: false,
          filteredOn: [
            {id: 1, name: "Business"},
            {id: 2, name: "Entertainment"},
            {id: 3, name: "General"},
            {id: 4, name: "Technology"},
            {id: 5, name: "Health"}],
        },
        {
          title: 'Source',
          type: 'q',
          selected: '',
          enable: false,
          filteredOn: [
            {id: 1, name: "BBC",value:"bbc"},
            {id: 2, name: "USA Today",value:'usa'},
            {id: 3, name: "Google News",value:'google'},
            {id: 4, name: "Al Jazeera English",value:'aljazeera'}]
        },
        {
          title: 'Country',
          type: 'country',
          selected: '',
          enable: false,
          filteredOn: [
            {id: 1, name: "Germany",value:'de'},
            {id: 2, name: "China",value:'cn'},
            {id: 3, name: "United State",value:'us'},
            {id: 4, name: "Canada",value:'ca'},
          ],
        },

      ],
      queryKey:'country',
      queryValue:'us',
      readingList:[]

    }
  },
  created() {
    this.getAllNews()
  },
  watch: {
    queryValue(newValue) {
      if (newValue) {
        this.getAllNews()
      }
    },

  },
  computed:{
    getList() {
      return JSON.parse(localStorage.getItem('reading_list'))|| [];
    },
  },
  methods:{
    selectedArray(name, info) {
      console.log(name, info)
      info.selected = name.name
      this.queryValue = name.value||name.name
      this.queryKey= info.type

    },
      getAllNews(){
        // https://gnews.io/api/v4/top-headlines?${this.queryKey}=${this.queryValue}&token=46c7190991601eebc43c10b3a9106653&maz=5


        // axios.get(`https://newsapi.org/v2/top-headlines?${this.queryKey}=${this.queryValue}&pageSize=5&apiKey=a9fe214d6252449c98e64b7ce6e800cd`)
        axios.get(`https://gnews.io/api/v4/top-headlines?${this.queryKey}=${this.queryValue}&token=46c7190991601eebc43c10b3a9106653&max=5&lang=en`)
        .then(res=>{
          console.log(res)
          this.newsArray = res.data.articles
        })
        .catch(err=>{
          console.log(err)
        })
      },
    addToReadingList(data){
      this.getList.unshift(data)
        localStorage.setItem("reading_list", JSON.stringify(this.getList));
      this.$store.commit('setReadingList',this.getList);


    }
  }
}
</script>

<style scoped>

</style>
