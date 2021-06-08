import React, { FC, SyntheticEvent, useCallback } from "react";
import { Box, Card, Typography, IconButton } from "@material-ui/core";
import PlayForWorkIcon from "@material-ui/icons/PlayForWork";
import LaunchOutlinedIcon from "@material-ui/icons/LaunchOutlined";
import FilterListOutlinedIcon from "@material-ui/icons/FilterListOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import styled from "styled-components";

const InvoiceTable: FC = () => {
  return (
    <Card variant="outlined">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <IconButton size="small">
          <FilterListOutlinedIcon />
        </IconButton>
        <Box>
          <IconButton size="small">
            <PlayForWorkIcon />
          </IconButton>
          <IconButton size="small">
            <LaunchOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
      <Box marginTop={1}>
        <InvoiceTableContainer>
          <TableHeader>
            <Box>Invoice ID</Box>
            <Box>To client</Box>
            <Box>Amount</Box>
            <Box>Due Date</Box>
            <Box>Proposal Document</Box>
            <Box>View Invoice</Box>
            <Box>Status</Box>
          </TableHeader>
          <Action></Action>
        </InvoiceTableContainer>
        <InvoiceTableContainer>
          <TableData>
            <Box>MIPSULSER001</Box>
            <Box>Braze Limited</Box>
            <Box>Breaze Ltd</Box>
            <Box>31.05.2021</Box>
            <Box>
              <View>view</View>
            </Box>
            <Box>
              <View>view</View>
            </Box>
            <Box>
              <Status>IN PROGRESS</Status>
            </Box>
          </TableData>
          <Action>
            <MoreMenu
              actions={[
                { title: "View Details", click: () => alert("View Details") },
                { title: "Get Support", click: () => alert("Get Support") },
              ]}
            />
          </Action>
        </InvoiceTableContainer>
      </Box>
    </Card>
  );
};

export default InvoiceTable;

const InvoiceTableContainer = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr 50px;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: 600;
  font-size: 12px;
  color: gray;
  & > div {
    text-align: center;
  }
`;

const TableData = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: 400;
  font-size: 12px;
  color: gray;
  border: 1px solid grey;
  border-radius: 30px;
  padding: 15px 10px;
  & > div {
    text-align: center;
  }
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const View = styled.span`
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 2px 6px;
  border-radius: 2px;
`;

const Status = styled.span`
  font-weight: bold;
  background-color: #bae9ff;
  padding: 2px 6px;
  border-radius: 6px;
`;

const MoreMenu = ({ actions }: any) => {
  const ref: any = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    function handleClickOutside(event: any) {
      event.preventDefault();
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen)
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, isOpen]);

  const toggle = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();
      setIsOpen((prev) => !prev);
    },
    [setIsOpen]
  );
  if (actions.length === 0) return null;
  return (
    <StyledMenu ref={ref}>
      <IconButton size="small" onClick={toggle}>
        <MoreVertOutlinedIcon />
      </IconButton>
      <UL isopen={isOpen}>
        {actions.map((action: any, key: any) => (
          <li
            key={key}
            onClick={(event) => {
              event.preventDefault();
              setIsOpen(false);
              action.click();
            }}
          >
            {action.title}
          </li>
        ))}
      </UL>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  position: relative;
`;

const UL = styled.ul<{ isopen: boolean }>`
  position: absolute;
  min-width: 120px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  z-index: 999;
  top: 50px;
  right: 0;
  background: #fff;
  display: none;
  transition: top 0.3ms ease-in-out;
  ${({ isopen }) =>
    isopen &&
    `
    display: flex;
    top: 30px;
  `}
  &::after {
    content: "";
    position: absolute;
    top: -4px;
    right: 8px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #fff;
  }

  li {
    padding: 5px;
    border-radius: 2px;
    color: var(--text-color-primary);
    font-weight: 600;
    font-size: 14px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    white-space: nowrap;
  }

  li:last-child {
    border-bottom: 0;
  }

  li:hover {
    background-color: var(--background-color-transparent);
    cursor: pointer;
  }
`;
