import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import productCurvyLines from 'static/themes/ecologysystemworld/productCurvyLines.png';
import productHowItWorks1 from 'static/themes/ecologysystemworld/productHowItWorks1.svg';
import productHowItWorks2 from 'static/themes/ecologysystemworld/productHowItWorks2.svg';
import productHowItWorks3 from 'static/themes/ecologysystemworld/productHowItWorks3.svg';
import Button from '../components/Button';
import Typography from '../components/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
    flex: '1 0 auto',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={productCurvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <img
                  src={productHowItWorks1}
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  It all starts by tracking the products at the source!
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <img
                  src={productHowItWorks2}
                  alt="graph"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  To each product it is attached a NFT that is brought around
                  all thorugh the supply chain
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <img
                  src={productHowItWorks3}
                  alt="clock"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  {
                    'The NFT ID associated to the product is trasmited trough all sub-supplier till the final distrubutor'
                  }
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Link to="/whitePaper">
          <Button
            color="secondary"
            size="large"
            variant="contained"
            className={classes.button}
            component="a"
            href="/whitePaper/"
          >
            Get started
          </Button>
        </Link>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
