import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";

const SiteFooterContact = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteFooter {
              siteFooter {
                title
                columnOneTitle
                columnOneText
                columnTwoTitle
                columnTwoText
                columnThreeTitle
                columnThreeText
              }
            }
          }
        }
      }
    `
  );
  const siteFooter = data.site.siteMetadata.siteFooter;
  const footer = siteFooter.siteFooter;
  return (
    <section id={"Contact"}>
      <Container>
        <Row>
          <Col xs={12} className={"text-center"}>
            <h2 className="section-title">{footer.title}</h2>
          </Col>
          <Row style={{ textAlign: "center" }}>
            <Col md={4} xs={12}>
              <h3>{footer.columnOneTitle}</h3>
              <p>{footer.columnOneText}</p>
            </Col>
            <Col md={4} xs={12}>
              <h3>{footer.columnTwoTitle}</h3>
              <p>{footer.columnTwoText}</p>
            </Col>
            <Col md={4} xs={12}>
              <h3>{footer.columnThreeTitle}</h3>
              <p>{footer.columnThreeText}</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default SiteFooterContact;
