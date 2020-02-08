import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Typography from '../components/Typography';
/*import aneta from 'static/images/faces/aneta.jpg';
import moreno from 'static/images/faces/moreno.jpg';
import fabrizio from 'static/images/faces/fabrizio.jpg';
*/
const backgroundImage = require('static/images/world.jpeg');

const styles = theme => ({
    root: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4)
      },
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
  title: {
    marginBottom: theme.spacing(14),
  },
});

function TeamSection(props) {
  const {classes} = props;

  return (
    <Container className={classes.root} component="section">
        <Typography variant="h4" marked="center" align="center" component="h2" className={classes.title}>
            Meet our team
        </Typography>
        <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
                <div class="card">
                    <img src="static/images/faces/aneta.jpg" alt="Moreno" style={{width:'100%'}}/>
                    <div class="container">
                        <h2>Moreno De Fazio</h2>
                        <p class="title">CEO &amp; Founder</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <div class="card">
                    <img src="Aneta.jpg" alt="Aneta" style={{width:'100%'}}/>
                    <div class="container">
                        <h2>Aneta Karbowiak</h2>
                        <p class="title">Collaborator</p>
                        <p class="description">Aneta Karbowiak is an early actor in the EOSIO realm with a deep understanding of the ecosystem. She is active as an EOS and Telos proxy and she writes articles on decentium.org concerning the blockchain. She has a bachelor in biology and her prior experience includes microbiology related research projects, iOS app development, writer for cryptonomist.ch and eoswriter.io, team management.</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <div class="card">
                    <img src="img3.jpg" alt="Fabrizio" style={{width:'100%'}}/>
                    <div class="container">
                        <h2>Fabrizio </h2>
                        <p class="title">CMO</p>
                    </div>
                </div>
            </Grid>
          </Grid>
  </Container>
  );
}

TeamSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamSection);
