import React, { ReactNode } from "react";
import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container, Grid } from "@mui/material";

import Search from "../components/search";
import styles from "../styles/Home.module.css";

const Home: NextPage = ({ data } : any ) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Grid container>
          <Grid item xs={2} sm={9} md={6}>
            <Search />
          </Grid>
          <Grid item xs={2} sm={4} md={6}>
            {data.map((item: any) => {
              return <p key={item?.id}> {data.length} </p>;
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  
  return {
    props: {
      data,
    },
  };
};

export default Home;