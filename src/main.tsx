import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  // uri: "https://graphql.contentful.com/content/v1/spaces/yz4pf1fjgwd1",
  uri: "https://graphql.contentful.com/content/v1/spaces/waibrswxyq0p",
  cache: new InMemoryCache(),
  headers: {
    // Authorization: `Bearer f6Zt3Dm2UHZZWqHMBkv0M2hZFRt3kS8Dlk05Qu6yAR4`,
    Authorization: `Bearer XVw0EpZlT7vP_LGjmoIS8SsKC_fb6PcSmu1apo72a-k`,
  },
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
