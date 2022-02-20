import React, { useContext, useEffect } from "react";
import type { NextPage } from "next";
import { AppContext } from "../features/getProducts";

import Head from "next/head";
import Image from "next/image";
import { Container, Grid } from "@mui/material";

import Search from "../components/search";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { state, dispatch } = useContext(AppContext);



  // TODO Add axios and cors policy

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      return dispatch({
        type: "ADD_PRODUCTS",
        payload: [...data],
      });
    };

    getData();
  });

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
           <h1> INDEX PAGE  </h1>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
