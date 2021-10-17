import React from "react";
import { Container } from "semantic-ui-react";
import { Navbar } from "./Navbar";

export default function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "50px" }}>{children}</Container>
    </>
  );
}
