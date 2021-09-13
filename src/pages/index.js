import React, { Fragment } from "react";
import Helmet from "react-helmet";
import HomepageBanner from "../components/homepageBanner";
import SiteFooterMap from "../components/siteFooterMap";
import SiteFooterContact from "../components/siteFooterContact";
import "bootstrap/dist/css/bootstrap.min.css";
import { graphql } from "gatsby";
import HomepageContent from "../components/homepageContent";

const IndexPage = ({ data: { site } }) => {
  const { siteMetadata } = site;
  return (
    <Fragment>
      <HomepageBanner
        homeBannerContent={siteMetadata.homePageBanner.homeBannerContent}
        menuItems={siteMetadata.homePageBanner.menuItems}
      />
      <HomepageContent />
      <SiteFooterContact />
      <SiteFooterMap menuItems={siteMetadata.homePageBanner.menuItems} />
    </Fragment>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        homePageBanner {
          menuItems {
            menuItem
          }
          homeBannerContent {
            title
            description
            image
            bannerButtonText
            bannerbuttonLink
          }
        }
      }
    }
  }
`;
