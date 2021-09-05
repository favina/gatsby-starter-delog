import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Table } from "react-bootstrap";
import {
  Navbar,
  Nav,
  Container,
  Jumbotron,
  Button,
  Image,
} from "react-bootstrap";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data; // data.markdownRemark holds your post data

  return (
    // <Layout>
    //   <Helmet>
    //     <title>
    //       {frontmatter.title} | {siteMetadata.title}
    //     </title>
    //     <meta name="description" content={frontmatter.metaDescription} />
    //   </Helmet>
    {
      /* <div className="blog-post-container">
        <article className="post">
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div
              className="post-thumbnail"
              style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
            >
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
        <Table striped bordered hover>
          <thead>
            <tr>
              {frontmatter.heading.map(({ title }) => (
                <th>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {frontmatter.columnData.map(({ rowData }, i) =>
              rowData.map(({ data }, i) => (
                <tr key={i}>
                  {data.map(({ row }, i) => (
                    <td>{row}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
      {frontmatter.profile.map(({ profileData }, i) =>
        profileData.map(({ image, title }, i) => (
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-xs-3">
                <img
                  class="img-thumbnail rounded float-left"
                  src={`${image}`}
                  alt="Card image cap"
                  width="200px"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="card-text">{title}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )} */
    }
    // </Layout>
  );
}
