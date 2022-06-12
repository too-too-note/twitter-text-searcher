<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-text-field v-model="searchText" hide-details></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-btn @click="search">検索</v-btn>
        <v-btn @click="next" style="margin-left: 10px">次へ</v-btn>
      </v-col>
      <v-col cols="12">
        <v-data-table
          hide-default-footer
          :headers="headers"
          :items="response"
          :items-per-page="-1"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  // ここから
  data() {
    return {
      searchText: '',
      response: [],
      headers: [
        { text: 'テキスト', value: 'text' },
      ],
    }
  },
  methods: {
    search() {
      axios
        .get(`/api/searchTweet?searchText=${this.searchText}`)
        .then(response => {
          this.response = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    next() {
      axios
        .get(`/api/searchNext`)
        .then(response => {
          this.response = this.response.concat(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
}
</script>
