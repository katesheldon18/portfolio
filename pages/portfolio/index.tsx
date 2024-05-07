import React from "react";
import styles from "./portfolio.module.scss";
import { Navigation } from "../../components/Navigation/Navigation";
import { Heading } from "../../components/Heading/Heading";
import { Footer } from "../../components/Footer/Footer";
import Document from "./../_document";
import { motion } from "framer-motion";
import { ProjectTile } from "../../components/ProjectTile/ProjectTile";

export default function Page() {
  return (
    <div className={styles.base}>
      <Navigation />
      <Heading heading="My Projects." />
      <div className={styles.container}>
        <div className={styles.row}>
          <ProjectTile
            title={"SEO WEBSITE CRAWLER"}
            link={"https://github.com/katesheldon18/kates-crawler"}
            description={
              "I created a link-to-link web crawler using Node.js. This is based off similar tools that are used in SEO (i.e. Screaming Frog). I recently added a frontend using React, where users can input a domain and receive SEO data on the frontend."
            }
          />
          <ProjectTile
            title={"BITFINDER"}
            link={"https://github.com/ShanonJackson/bitfinder"}
            description={
              "I am currently collaborating on this project, building the frontend using React and Mapbox. The map will display peers across the globe for movies and TV shows, displaying the data gathered from bittorrent."
            }
          />
        </div>
        <div className={styles.row}>
          <ProjectTile
            title={"ECOMMERCE PRODUCT PAGE"}
            link={"https://mrfrontend.vercel.app/"}
            description={
              "I created a responsive ecommerce product page using React, hosted on Vercel. This includes a GET request to fetch product data, 'Add to Cart' functionality, and a cart for users to view."
            }
          />
          <ProjectTile
            title={"SHOPPING LIST"}
            link={"https://github.com/katesheldon18/shopping-list"}
            description={
              "One of my first projects was to create a simple to-do list using vanilla JS where the user can add, check and remove items from their list."
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
