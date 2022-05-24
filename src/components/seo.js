import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
const SEO = ({ title }) => {
    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
    );
    const metaTitle = title || site.siteMetadata.title;

    return (
        <>
            <Helmet
                htmlAttributes={{
                    lang: "th",
                }}
                title={metaTitle}
                titleTemplate={`%s | ${site.siteMetadata.title}`}
                meta={[
                    {
                        name: "theme-color",
                        content: "rgb(138, 75, 175)",
                    },
                    {
                        name: "description",
                        content: "zirinya",
                    },

                ]}
            />
        </>
    );
};
export default SEO;
