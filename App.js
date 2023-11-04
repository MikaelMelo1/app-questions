import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes/pages/routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#38a69d" style="light-content" />
      <Routes />
    </NavigationContainer>
  );
}
