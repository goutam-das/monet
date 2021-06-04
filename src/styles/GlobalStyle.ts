import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --header-height: 80px;
    --drawer-width:  280px;
    --base-color: #ac78e7;
  }
  
  header.MuiAppBar-colorDefault {
    background-color: #ffffff;
    z-index: 1300;
    box-shadow: 0 0 3px 0px rgb(0 0 0 / 20%);
  }

  div.MuiToolbar-regular {
    min-height: var(--header-height);
  }

  div.MuiDrawer-root {
    width: var(--drawer-width);
  }

  div.MuiDrawer-paper {
    width: var(--drawer-width);
  }

  h1.MuiTypography-h1 {
    font-size: 24px;
    font-weight: bold;
    color: var(--base-color);
  }

  span.MuiTypography-caption {
    font-size: 12px;
    font-weight: bold;
    line-height: 1;
  }

  p.MuiTypography-body2 {
    font-size: 12px;
    line-height: 1;
  }

  p.MuiTypography-body1 {
    font-size: 13px;
  }

  a.MuiButton-textSizeLarge {
    padding: 15px 15px 15px 40px;
    margin-bottom: 10px;
    font-size: 13px;
    text-transform: capitalize;
    font-weight: bold;
    width: 90%;
    border-radius: 0 25px 25px 0;
    justify-content: flex-start;
    color: grey;
    &.active {
      color: #ffffff;
      background-color: var(--base-color);
    }
  }

  div.MuiCard-root {
    padding: 24px;
    border-radius: 12px;
    margin-bottom: 16px;
    overflow: visible;
  }

  div.MuiFormControl-root {
    width: 100%;
  }

  input.MuiInputBase-input {
    border-color: var(--base-color);
    border-radius: 12px;
    width: 100%;
  }

  label.MuiInputLabel-formControl {
    font-weight: 600;
    letter-spacing: 0.4px;
  }

  a.MuiTypography-body1 {
    text-decoration: underline;
    cursor: pointer;
  }
`;
