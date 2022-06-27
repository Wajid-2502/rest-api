import React from "react";
import { createStyles, Grid, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Box } from "@mui/system";

const useStyle = createStyles({
  headingColor: {
    backgroundColor: deepPurple[400],
  },
});

export const Home = () => {
  return (
    <>
      <Box
        textAlign={"center"}
        sx={{ background: "#CCC3E5", padding: "10px 0px" }}
      >
        <Typography variant="h2">CRUD API</Typography>
      </Box>
      <Grid container>
        <Grid item md={6} sm={12} xs={12}>
          1
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          2
        </Grid>
      </Grid>
    </>
  );
};
export default Home;
