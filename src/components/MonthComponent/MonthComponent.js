import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./MonthComponent.css";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#73cf8f",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

function Month() {
  function monthClicked(event) {
    const activeMonth = event;
    console.log(activeMonth);
  }

  return (
    <div className="month">
      <ThemeProvider theme={theme}>
        <ButtonGroup
          size="small"
          variant="outlined"
          aria-label="outlined small button group"
          color="primary"
        >
          <Button value="ytd" onClick={(e) => monthClicked(e.target.value)}>
            YTD
          </Button>
          <Button value="jan" onClick={(e) => monthClicked(e.target.value)}>
            Jan
          </Button>
          <Button value="feb" onClick={(e) => monthClicked(e.target.value)}>
            Feb
          </Button>
          <Button value="mar" onClick={(e) => monthClicked(e.target.value)}>
            Mar
          </Button>
          <Button value="apr" onClick={(e) => monthClicked(e.target.value)}>
            Apr
          </Button>
          <Button value="may" onClick={(e) => monthClicked(e.target.value)}>
            May
          </Button>
          <Button value="jun" onClick={(e) => monthClicked(e.target.value)}>
            Jun
          </Button>
          <Button value="jul" onClick={(e) => monthClicked(e.target.value)}>
            Jul
          </Button>
          <Button value="aug" onClick={(e) => monthClicked(e.target.value)}>
            Aug
          </Button>
          <Button value="sep" onClick={(e) => monthClicked(e.target.value)}>
            Sep
          </Button>
          <Button value="oct" onClick={(e) => monthClicked(e.target.value)}>
            Oct
          </Button>
          <Button value="nov" onClick={(e) => monthClicked(e.target.value)}>
            Nov
          </Button>
          <Button value="dec" onClick={(e) => monthClicked(e.target.value)}>
            Dec
          </Button>
        </ButtonGroup>
      </ThemeProvider>
    </div>
  );
}

export default Month;
