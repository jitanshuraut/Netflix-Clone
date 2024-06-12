import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProSidebarProvider } from "react-pro-sidebar";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import store from ".//States/store";
import { Provider } from "react-redux";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ProSidebarProvider>
          <App />
        </ProSidebarProvider>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
