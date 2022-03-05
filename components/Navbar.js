import React, { useContext, useSate } from "react";
import Head from "next/head";
import { AppBar, Typography, Toolbar, Link, Container } from "@mui/material";
import NextLink from "next/link";

export default function NavBar({ children }) {
  return (
    <div>
      <Toolbar style={{ backgroundColor: "black" }}>
        <NextLink href="/hello" passHref>
          <Link>
            <Typography>Hello</Typography>
          </Link>
        </NextLink>
        <div style={{ marginRight: "20px" }}></div>
        <NextLink href="/" passHref>
          <Link>
            <Typography>Home</Typography>
          </Link>
        </NextLink>
        <div style={{ marginRight: "20px" }}></div>
        <NextLink href="/create-recipe" passHref>
          <Link>
            <Typography>Create Recipe</Typography>
          </Link>
        </NextLink>
      </Toolbar>

      <Container style={{ minHeight: "80vh", minWidth: "80vw" }}>
        {children}
      </Container>

      <footer style={{ textAlign: "center" }}>
        <Typography>Next.JS Tutorial 2022</Typography>
      </footer>
    </div>
  );
}
