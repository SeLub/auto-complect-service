/* eslint-disable */

import React from "react";
import AppHeader from "../../components/app-header";
import BreadCrumbs from "../../components/breadcrumb";
import BodyModification from "../../components/BodyModification";
import "../../App.css";
import Logo from "../../components/Logo";
import Hull_specs_display from "../../components/Hull_specs_display";
import Checkbox from "../../components/Checkbox";

export default function starting_page() {
  return (
    <div className="">
      <div>
       <Checkbox />
      </div>
      <div>
        <AppHeader />
      </div>
      <Logo />
      <div>
        <BreadCrumbs />
      </div>
      <div>
        <BodyModification />
      </div>
      <div>
        <Hull_specs_display />
      </div>
    </div>
  );
}
