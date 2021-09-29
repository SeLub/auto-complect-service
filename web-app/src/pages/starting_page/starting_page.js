/* eslint-disable */

import React from "react";
import AppHeader from "../../components/app-header";
import BreadCrumbs from "../../components/breadcrumb";
import "../../App.css";
import Logo from "../../components/Logo";
import Hull_specs_display from "../../components/Hull_specs_display";

export default function Starting_Page(){
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
            <Hull_specs_display />
          </div>
        </div>
    );
}