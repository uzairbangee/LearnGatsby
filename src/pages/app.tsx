import React from 'react'
import Age from '../components/Age/Age';
import Default from "../components/Default/Default";
import {Router} from "@reach/router";
import {Link} from 'gatsby';
import Layout from '../components/Layout/Layout';

function App() {
    return (
        <Layout>
            <h3 className="heading">App</h3>
            <div>
                <Router basepath="/app">
                    <Age path="/age" />
                    <Default path="/" />
                </Router>

                <Link to="/app/age">
                    <div>Show Age</div>
                </Link>
            </div>
        </Layout>
    )
}

export default App;
