import React, { FC } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Avatar, Box, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

const Header: FC = () => {
  return (
    <AppBar position="fixed" color="default" elevation={0}>
      <Toolbar>
        <Typography variant="h1" noWrap>
          MONET
        </Typography>
        <Box marginLeft={1.25}>
          <Typography variant="caption">
            Invoice Verification Platform
          </Typography>
        </Box>
        <Box flex={1} display="flex" justifyContent="flex-end">
          {/* <SearchContainer display="flex" alignItems="center">
            <div>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search e.g. paid invoice"
              inputProps={{ "aria-label": "search" }}
            />
          </SearchContainer> */}
          {/* <Box
            display="flex"
            style={{
              color: "grey",
            }}
            alignItems="flex-end"
            marginRight={3}
          >
            <Avatar alt="Debtor Company" src="/avatar.jpg" />
            <Box marginLeft={1}>
              <Typography variant="body2">Debtor Company</Typography>
              <Typography variant="caption" color="inherit">
                view profile
              </Typography>
            </Box>
          </Box> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const SearchContainer = styled(Box)`
  border: 2px solid var(--base-color);
  border-radius: 25px;
  min-width: 360px;
  margin-right: 30px;
  padding-left: 20px;
`;
