import React, { Fragment } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";
import { Container, Row, Col, Table } from "react-bootstrap";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteContent {
              about {
                title
                subtext
                table {
                  heading {
                    title
                  }
                  column {
                    columnData {
                      row {
                        data
                      }
                    }
                  }
                }
              }
              keyDates {
                title
                text
              }
              profile {
                title
                subtext
                profileData {
                  image
                  text
                }
              }
              submissions {
                title
                text
              }
            }
          }
        }
      }
    `
  );

  const siteContent = data.site.siteMetadata.siteContent;
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12}>
            <section id={"About"}>
              <h2 className={"text-center"}>{siteContent.about.title}</h2>
              <p>{siteContent.about.subtext}</p>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    {siteContent.about.table.heading.map(({ title }, i) => (
                      <th key={i}>{title}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {siteContent.about.table.column.map(({ columnData }, i) =>
                    columnData.map(({ row }, i) => (
                      <tr key={i}>
                        {row.map(({ data }, i) => (
                          <td>{data}</td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </section>
            <section id={"Key Dates"}>
              <h2 className={"text-center"}>{siteContent.keyDates.title}</h2>
              <p>{siteContent.keyDates.text}</p>
            </section>
            <section id={"Committee"}>
              <h2 className={"text-center"}>{siteContent.profile.title}</h2>
              <p>{siteContent.profile.subtext}</p>
              {siteContent.profile.profileData.map(({ image, text }, i) => (
                <div className="card mb-3" key={i}>
                  <div className="row no-gutters">
                    <div className="col-xs-3">
                      <img
                        className="img-thumbnail rounded float-left"
                        src={`${image}`}
                        alt="Card image cap"
                        width="200px"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">{text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <p>{siteContent.profile.text}</p>
            </section>
            <section id={"Submissions"}>
              {siteContent.submissions.map(({ title, text }, i) => (
                <Fragment key={i}>
                  <h2 className={"text-center"}>{title}</h2>
                  <p>{text}</p>
                </Fragment>
              ))}
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
