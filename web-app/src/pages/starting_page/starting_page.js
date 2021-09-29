/* eslint-disable */

import React from "react";

export default function Starting_Page(){
    return (
        <div className="App">
          <div>
            <AppHeader />
          </div>
          <div>
            <BreadCrumbs />
          </div>
          <Logo />
          <div className="cars_display">
            <Block_ford_cards />
            <Hull_specs_display />
          </div>
        </div>
      );
}