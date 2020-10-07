import React from "react";
import Layout from "../components/Layout/Layout";

export default ({pageContext}) => {
  return (
    <Layout>
        <div>
        <h3 className="heading">User Dynamic</h3>
            <div>Name: {pageContext.name}</div>
          <div>Age: {pageContext.age}</div>
      </div>
    </Layout>
  )
}