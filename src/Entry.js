import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routers/Router";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const Main = () => {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineProvider>
  );
};

export default Main;
