import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default props => (
  <>
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="overline" color="inherit">
          Excercises App
        </Typography>
      </Toolbar>
    </AppBar>
  </>
);
