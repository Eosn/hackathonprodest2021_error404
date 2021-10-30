<template>
  <Layout v-slot="{searchText}">
    
    
      <v-tabs v-model="tab" centered grow >
        <v-tab class="categorias">Todos</v-tab>
        <v-tab class="categorias">Saúde</v-tab>
        <v-tab class="categorias">Segurança</v-tab>
        <v-tab class="categorias">DETRAN</v-tab>
        <v-tab class="categorias">INSS</v-tab>

      </v-tabs>
    
    
    <v-row justify="center">
      <v-card
        v-for="edge in getArticles(searchText)" :key="edge.node.id"
        width="550"
        class="mt-5 mx-1"
      >

        <v-card-text>
          <p class="text-h4 text--primary">
            {{ edge.node.title }}
          </p>
          <p>{{ edge.node.description }}</p>
        </v-card-text>

        <v-card-actions>
          <v-btn
            @click="$router.push(`/articles/${edge.node.id}`)"
            text
            color="blue lighten-1"
          >
            Ler mais...
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-row>
    <br/>  
    
  </Layout>
</template>

<page-query>
query {
  articles: allArticle {
    edges {
      node {
        id
        title
        description
        category
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data() {
    return {
      tab: 0,
      articles: []
    }
  },
  mounted(){
    this.articles = this.$page.articles.edges
  },
  watch: {
    tab(val) {
      if (this.tab === 0) {
        this.showAllEvents()
      } else {
        this.showEventsByType(val)
      }
    }
  },
  methods: {
    showAllEvents() {
      this.articles = this.$page.articles.edges
    },
    showEventsByType(val) {
      this.articles = this.$page.articles.edges.filter((edge) => {
        return edge.node.category === val
      })
    },
    getArticles(searchText){
      return this.articles.filter((edge) => {
        return edge.node.title.toLowerCase().includes(searchText.toLowerCase())
      })
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.categorias {
  background-color: #A86169;
}

.categorias:focus {
  background-color: #B18086;
}
</style>