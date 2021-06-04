import React, { FC } from "react";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ForumIcon from "@material-ui/icons/Forum";

const SideBar: FC = () => {
  return (
    <Drawer variant="permanent">
      <Toolbar />
      <Overflow>
        <Button
          component="a"
          startIcon={<VisibilityIcon />}
          className="active"
          size="large"
        >
          Invoice Verification
        </Button>
        <Button component="a" startIcon={<ForumIcon />} size="large">
          Support
        </Button>
      </Overflow>
    </Drawer>
  );
};

export default SideBar;

const Overflow = styled.div`
  overflow-y: auto;
  padding-top: 25px;
`;
