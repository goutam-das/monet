import React, { FC } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Header from "../componenets/Header";
import SideBar from "../componenets/SideBar";
import { Main, Root } from "../styles";
import TokenDisplay from "./componenets/TokenDisplay";
import InvoiceForm from "./componenets/InvoiceForm";
import InvoiceTable from "./componenets/InvoiceTable";
import ApproveOrReject from "./componenets/ApproveOrReject";

const Home: FC = () => {
  return (
    <Root>
      <Header />
      <SideBar />
      <Main>
        <Toolbar />
        <TokenDisplay />
        <InvoiceForm />
        <InvoiceTable />
        <ApproveOrReject />
      </Main>
    </Root>
  );
};

export default Home;
