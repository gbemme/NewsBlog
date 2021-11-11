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
          type: 'category',
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
          type: 'sources',
          selected: '',
          enable: false,
          filteredOn: [
            {id: 1, name: "BBC",value:'bbc-news'},
            {id: 2, name: "USA Today",value:'usa-today'},
            {id: 3, name: "Google News",value:'google-news'},
            {id: 4, name: "Al Jazeera English",value:'al-jazeera-english'}]
        },
        {
          title: 'Country',
          type: 'country',
          selected: '',
          enable: false,
          filteredOn: [
            {id: 1, name: "Nigeria",value:'ng'},
            {id: 2, name: "South Africa",value:'za'},
            {id: 3, name: "United State",value:'us'},
            {id: 4, name: "Canada",value:'ca'},
          ],
        },

      ],
      queryKey:'country',
      queryValue:'ng',
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
        axios.get(`https://newsapi.org/v2/top-headlines?${this.queryKey}=${this.queryValue}&pageSize=5&apiKey=a9fe214d6252449c98e64b7ce6e800cd`)
        .then(res=>{
          console.log(res)
          this.newsArray = res.data.articles
        })
        .catch(err=>{
          console.log(err)
        })
      },
    addToReadingList(data){
      this.getList.push(data)
        localStorage.setItem("reading_list", JSON.stringify(this.getList));
      this.$store.commit('setReadingList',this.getList);


    }
  }
}
</script>

<style scoped>

</style>
