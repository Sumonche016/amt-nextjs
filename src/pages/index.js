import React from "react";
import RootLayouts from "../../components/Layouts/RootLayouts";
import SideNav from "./SideNav";
import MainContent from "./MainContent";
import Layouts from "@/components/Layouts/Layout";

const index = () => {
  return (
    <>
      <div>
        <h1>Dashboards</h1>
      </div>
    </>
  );
};

export default index;

index.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
