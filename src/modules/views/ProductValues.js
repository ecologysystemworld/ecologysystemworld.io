import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import Typography from "../components/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },
  image: {
    height: 55
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  }
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={require("static/themes/ecologysystemworld/productCurvyLines.png")}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={require("static/themes/ecologysystemworld/productValues1.svg")}
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Track your food
              </Typography>
              <Typography variant="h5">
                {"Track your food through the whole supply chain"}
                {", from farmers to your fridge!"}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={require("static/themes/ecologysystemworld/productValues2.svg")}
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                Froud Protection
              </Typography>
              <Typography variant="h5">
                {
                  "The ESW token can protect your favorite food against all frauds!"
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={require("static/themes/ecologysystemworld/productHowItWorks3.svg")}
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Say it louder
              </Typography>
              <Typography variant="h5">
                {
                  "Share the voice with your friend and families! Chose only ESW certified 100 % biodegradabile food! "
                }
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductValues);
