import React, { FC } from "react";
import {
  Box,
  Card,
  Checkbox,
  createStyles,
  fade,
  FormControl,
  FormControlLabel,
  Grid,
  InputBase,
  InputLabel,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const emails = [
  "example1@gmail.com",
  "example2@gmail.com",
  "example3@gmail.com",
  "example4@gmail.com",
  "example5@gmail.com",
];

const InvoiceForm: FC = () => {
  return (
    <Card variant="outlined">
      <Typography variant="body1">
        <b>Please confirm you are the right person to review the invoice</b>
      </Typography>
      <Box marginTop={1.25}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControl>
              <InputLabel
                shrink
                htmlFor="bootstrap-input"
                style={{ position: "relative", marginBottom: 10 }}
              >
                *Email
              </InputLabel>
              <Autocomplete
                options={emails}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    size="small"
                    placeholder="Select a contact"
                  />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl>
              <InputLabel shrink htmlFor="bootstrap-input">
                Full name
              </InputLabel>
              <BootstrapInput />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl>
              <InputLabel shrink htmlFor="bootstrap-input">
                *Your job taitle
              </InputLabel>
              <BootstrapInput />
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      <Box
        marginTop={1.25}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" checked />}
          label="I have authority to review and approve this invoice"
        />
        <Typography component="a">Or forward to authorised person</Typography>
      </Box>
    </Card>
  );
};

export default InvoiceForm;

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.common.white,
      border: "1px solid #ced4da",
      fontSize: 16,
      width: "auto",
      padding: "10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  })
)(InputBase);
