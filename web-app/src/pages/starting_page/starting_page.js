/* eslint-disable */

import React from "react";
import AppHeader from "../../components/app-header/AppHeader";
import BreadCrumbs from "../../components/breadcrumb";
import BodyModification from "../../components/BodyModification";
import "../../App.css";
import Logo from "../../components/Logo";
import Hull_specs_display from "../../components/Hull_specs_display";

export default function starting_page() {
  return (
    <div className="">
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
