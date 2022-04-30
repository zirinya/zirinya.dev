import * as React from "react"
import Layout from "../components/layout"
import Jellyfish from "../images/favicon.png"

const NotFound = () => {
    return (
        <Layout title="Page not found | zirinya.dev">
            <div className="text-center notfound-page">
                <div className="jellyfish"><img src={Jellyfish} alt="jellyfish" /></div>
                <h2>404 Ops nothing here only jellyfish</h2>
            </div>
        </Layout>
    )
}
export default NotFound