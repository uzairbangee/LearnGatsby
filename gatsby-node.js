exports.onCreateNode = ({ node }) => {
    console.log(`Node created of type "${node.internal.type}"`)
}

exports.createPages = async function ({ actions }) {

    actions.createPage({
        path: "/dynamic",
        component: require.resolve(`./src/templates/dynamic.tsx`),
        context: { 
            // Data passed to context is available
            // in pageContext props of the template component
            name: "Uzair",
            age: 21
         },
    });
    console.log("End of Gatsby Node File");
}

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    // Only update the `/dynamic` page.
    if (page.path.match(/^\/app/)) {
      // page.matchPath is a special key that's used for matching pages
      // with corresponding routes only on the client.
      page.matchPath = "/app/*"
      // Update the page.
      createPage(page)
    }
}