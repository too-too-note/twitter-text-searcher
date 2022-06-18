<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" style="position: fixed; background-color: white; z-index: 3;">
        <v-text-field v-model="searchText" @change="search" label="検索ワード" hide-details></v-text-field>
      </v-col>
      <v-col cols="4" style="margin-top: 70px">
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
      <v-col cols="4">
        <v-btn @click="next" style="margin-left: 10px">次へ</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
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
    // 検索
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
    // 次へ
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
