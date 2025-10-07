import React from "react";
import BlogHeader from "./BlogHeading";
import ServiceSolution from "../Service/ServiceSolution";
import RelatedArticles from "./RelatedArticles";
import articles from "./articles.js";
import AccordionCustomer from "../../component/AccordionCustomer.js";

const Blog = () => {
  return (
    <>
      <BlogHeader />
      <ServiceSolution />
      <RelatedArticles items={articles} />
      <AccordionCustomer />
    </>
  );
};

export default Blog;
