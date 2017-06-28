const {_} = require('lodash');
const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

const cleanArray = arr => compact(uniq(arr));

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []

    const blogTemplate = path.resolve("./src/templates/blog/index.js")
    const landingTemplate = path.resolve("./src/templates/landing/index.js")
    // const tagsTemplate = path.resolve("./src/templates/tags-page.js")

    resolve(
      graphql(
      `
      {
        posts: allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                layout
                tags
              }
            }
          }
        }
      }
    `
    ).then(result => {

      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      const posts = result.data.posts.edges.map(p => p.node);

      // blog pages
      posts
        .filter(post => post.fields.slug.startsWith('/blog/'))
        .map(post => {
          createPage({
            path: post.fields.slug,
            component: blogTemplate,
            context: {
              slug: post.fields.slug
            }
          });
        });

      // landing pages
      posts
        .filter(post => post.frontmatter.layout == 'landing')
        .map(post => {
          console.log(post);
          createPage({
            path: post.fields.slug,
            component: landingTemplate,
            context: {
              slug: post.fields.slug
            }
          });
        });

      })
    )
  })
}

// Add custom slug for blog posts to both File and MarkdownRemark nodes.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  switch (node.internal.type) {
    case 'File':
      const parsedFilePath = path.parse(node.relativePath)
      const slug = `/${parsedFilePath.dir}/`
      createNodeField({
        node,
        fieldName: 'slug',
        fieldValue: slug
      })
      return

    case 'MarkdownRemark':
      const fileNode = getNode(node.parent)
      createNodeField({
        node,
        fieldName: 'slug',
        fieldValue: fileNode.fields.slug,
      })
      return
  }
}