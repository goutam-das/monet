import React, { FC } from "react";
import { Box, Card, Typography } from "@material-ui/core";

const TokenDisplay: FC = () => {
  return (
    <Card variant="outlined">
      <Typography variant="body1">
        <b>Jacob Casson</b> from <b>{`Firebear & Me Limited`}</b> needs you to
        confirm their invoice as valid on the agreed terms,and approved for
        payment
      </Typography>
      <Box marginTop={1.25}>
        <Typography variant="body1">
          verification token: XVDHro43656321gfdzg
        </Typography>
      </Box>
    </Card>
  );
};

export default TokenDisplay;
