import * as React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import store from "./redux/store";
import Entry from "./Entry";
import Home from "./pages/Home";

const root = createRoot(document.body);
root.render(
  <>
    <Provider store={store}>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <Notifications position="top-center" />
        <Home />
      </MantineProvider>
    </Provider>
  </>
);
