import React from "react";
import AppHeader from "../../components/app-header/AppHeader";
import BreadCrumbs from "../../components/breadcrumb/Breadcrumb";
import BodyModification from "../../components/BodyModification";
import "../../App.css";
import Logo from "../../components/Logo";
import HullSpecsDisplay from "../../components/HullSpecsDisplay";

export default function StartingPage() {
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
        <HullSpecsDisplay />
      </div>
    </div>
  );
}
