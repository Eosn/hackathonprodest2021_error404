// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios');

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })

  api.loadSource(async actions => {
    const { data } = await axios.get('http://localhost:1337/articles')

    const collection = actions.addCollection({
      typeName: 'Article',
      path: '/articles/:id'
    })

    for (const article of data) {
      collection.addNode({
        id: article.id,
        path: '/articles/' + article.id,
        title: article.title,
        description: article.description,
        content: article.content,
        category: article.categories[0].id
      })
    }

    const tags = (await axios.get('http://localhost:1337/categories')).data

    const collection2 = actions.addCollection({
      typeName: 'Category',
      path: '/categories/:id'
    })

    for (const category of tags) {
      collection2.addNode({
        id: category.id,
        path:'/categories/' + category.id,
        name: category.name
        
      })
    }
  })
}