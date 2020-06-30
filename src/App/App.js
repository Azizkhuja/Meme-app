import React from "react";
import { Meme } from "../Meme/Meme";
// import styles from './styles.module.css';
import { Switch, Route } from "react-router-dom";
import { MemeGenerated } from "../MemeGenerated/MemeGenerated";

export const App = () => {
  return (
    <div>
      <h1>Meme Creator</h1>
      <h3>Made with ❤️ by Azeez</h3>
      <Switch>
        <Route exact path="/">
          <Meme />
        </Route>
        <Route path="/generated">
          <MemeGenerated />
        </Route>
      </Switch>
    </div>
  );
};
