import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/yz4pf1fjgwd1",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer f6Zt3Dm2UHZZWqHMBkv0M2hZFRt3kS8Dlk05Qu6yAR4`,
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
