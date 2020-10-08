import React from 'react'
import Name from '../components/Name/Name';
import Age from '../components/Age/Age';
import Default from "../components/Default/Default";
import {Router} from "@reach/router";
import {Link} from 'gatsby';
import Layout from '../components/Layout/Layout';

// interface Props{
//     pageContext : {
        
//     }
// }

function App() {
    return (
        <Layout>
            <h3 className="heading">App</h3>
            <div>
                <Router basepath="/app">
                    <Age age={21} path="/age" />
                    <Name name={"Uzair"} path="/name" />
                    <Default path="/" />
                </Router>

                <Link to="/app/age">
                    <div>Show Age</div>
                </Link>

                <Link to="/app/name">
                    <div>Show Name</div>
                </Link>
            </div>
        </Layout>
    )
}

export default App;
