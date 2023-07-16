import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import asyncAwaitSample from "./asynchronous/asyncAwait";
import callbackSample from "./asynchronous/callback";
import promiseSample from "./asynchronous/promise";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
// callbackSample();
// promiseSample();
asyncAwaitSample();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
