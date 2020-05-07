import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Countdown from 'react-countdown-now';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import './Views.css';

const backgroundImage = require('static/images/world.jpeg');

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const {classes} = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{display: 'none'}}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        ESW is coming
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        The first ecofriendly project on EOS for a better world
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/whitePaper/"
      >
        White Paper
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Official ICO starting June 15
      </Typography>
      <div className={'Counter'}>
        <Countdown precision={0} intervalDelay={0} date="2020-06-15T00:00:00" />
      </div>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
