import React from "react";

import DefaultScreen from "./src/components/DefaultScreen";
import Routes from "./src/Routes/";

export default function App() {
  return <DefaultScreen>
    <Routes />
  </DefaultScreen>
}