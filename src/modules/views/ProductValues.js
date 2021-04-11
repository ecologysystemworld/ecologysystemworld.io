import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import productCurvyLines from "static/themes/ecologysystemworld/productCurvyLines.png";
import productHowItWorks3 from "static/themes/ecologysystemworld/productHowItWorks3.svg";
import productValues1 from "static/themes/ecologysystemworld/productValues1.svg";
import productValues2 from "static/themes/ecologysystemworld/productValues2.svg";
import Typography from "../components/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    flex: '1 0 auto',
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
          src={productCurvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={productValues1}
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
                src={productValues2}
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
                src={productHowItWorks3}
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
