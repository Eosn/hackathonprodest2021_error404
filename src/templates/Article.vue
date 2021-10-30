<template>
    <Layout>
        <v-container>
            <h1>{{  $page.article.title   }}</h1>
            
            <div v-html="$page.article.content"></div>
            <!--
            <p>{{  $page.article.content   }}</p>
            -->
        </v-container>
    </Layout>
</template>

<page-query>
  query($id: ID!) {
    article(id: $id){
  	id
    title
    content
    category
	}
}
</page-query>

<script>
export default{
    metaInfo(){
        return{
            title: this.$page.article.title,
            content: this.$page.article.content
        }
    }
}
</script>
