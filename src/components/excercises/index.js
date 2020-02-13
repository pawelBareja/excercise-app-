import React from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import { Grid } from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 20,
    marginBottom: 20
  }
};

export default props => (
  <>
    <Grid container>
      <Grid item xs>
        <LeftPane styles={styles} />
      </Grid>
      <Grid item xs>
        <RightPane styles={styles} />
      </Grid>
    </Grid>
  </>
);
