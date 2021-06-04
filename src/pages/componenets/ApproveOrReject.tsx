import { Box, Button, Card, Typography } from "@material-ui/core";
import React, { FC, useState } from "react";
import styled from "styled-components";
import BlockIcon from "@material-ui/icons/Block";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

const ApproveOrReject: FC = () => {
  const [type, setType] = useState<"APPROVE" | "REJECT">("APPROVE");
  return (
    <Box marginTop={2}>
      <Box display="flex" alignItems="center">
        <ApproveCard
          active={type === "APPROVE"}
          onClick={() => setType("APPROVE")}
        >
          <Box>
            <DoneOutlineIcon />
          </Box>
          <Typography>Approve</Typography>
        </ApproveCard>
        <RejectCard
          active={type === "REJECT"}
          onClick={() => setType("REJECT")}
        >
          <Box>
            <BlockIcon />
          </Box>
          <Typography>Reject</Typography>
        </RejectCard>
      </Box>
      <Box>
        <StytledButton variant="contained">Send Response</StytledButton>
      </Box>
    </Box>
  );
};

export default ApproveOrReject;

const StytledButton = styled(Button)`
  width: 200px;
  border-radius: 8px;
  &,
  &:hover {
    color: #fff;
    background-color: var(--base-color);
  }
`;
const ApproveCard = styled(Card)<{ active: boolean }>`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  svg {
    stroke: #bae9ff;
    fill: #bae9ff;
  }
  p.MuiTypography-body1 {
    font-size: 14px;
    font-weight: bold;
  }

  ${({ active }) =>
    active &&
    `
  border: 1px solid #bae9ff;
  `}
`;
const RejectCard = styled(Card)<{ active: boolean }>`
  width: 200px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  svg {
    stroke: #ff2525;
    fill: #ff2525;
  }
  p.MuiTypography-body1 {
    font-size: 14px;
    font-weight: bold;
  }
  ${({ active }) =>
    active &&
    `
  border: 1px solid #ff2525;
  `}
`;
