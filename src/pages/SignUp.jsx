import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { signup } from '../store/actions/userActions.js';

export class _SignUp extends Component {
  state = {
    user: {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      isGuest: false,
      cards: [],
      imgUrl: '',
    },
    msg: '',
  };
  handleInput = (ev) => {
    ev.preventDefault();
    const { user } = this.state;
    const name = ev.target.name;
    const value = ev.target.value;
    user[name] = value;
    this.setState({ user });
  };

  onSubmit = (ev) => {
    ev.preventDefault();
    const { user } = this.state;
    const fullname = user.firstname + ' ' + user.lastname;
    delete user.firstname;
    delete user.lastname;
    user.fullname = fullname;
    const { username, password } = user;
    if (!username || !password || !fullname) {
      return this.setState({ msg: 'All inputs are required' }, () =>
        console.log(this.state.msg)
      );
    }
    this.props.signup(user).then(() => this.props.history.push('/cardly'));
  };
  render() {
    const classes = makeStyles((theme) => ({
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));
    return (
      <div className="main-signup">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="flex column center">
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} onSubmit={this.onSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstname"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstname"
                    label="First Name"
                    autoFocus
                    onChange={this.handleInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    autoComplete="lname"
                    onChange={this.handleInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="username"
                    name="username"
                    autoComplete="username"
                    onChange={this.handleInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.handleInput}
                  />
                  {this.state.msg && <label>{this.state.msg}</label>}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="#/login" variant="body2">
                    Already have an account? Log in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}></Box>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  signup,
};

export const SignUp = connect(mapStateToProps, mapDispatchToProps)(_SignUp);
