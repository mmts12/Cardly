import React from 'react';
import { Component } from 'react';
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
import { loginUser } from "../store/actions/userActions.js";
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';

export class _Login extends Component {

  state = {
    cred: {
      username: '',
      password: ''
    },
    msg: ''
  }

  handleInput = ({ target }) => {
    const field = target.name
    const value = target.value
    this.setState(prevState => {
      return {
        cred: {
          ...prevState.cred,
          [field]: value
        }
      }
    })
  }

  onLogin = (ev) => {
    ev.preventDefault()
    this.props.loginUser(this.state.cred)
      .then(() => {
        this.props.history.push('/Cardly')
      })
      .catch(() => {
        this.setState({ msg: 'Invalid username / Password' });
      })
  }


  render() {
    return (
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div style={{
          marginTop: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Avatar style={{
            margin: '10px',
            backgroundColor: 'blue',
          }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h2" variant="h5">
            Sign in
        </Typography>
          <form
            onSubmit={this.onLogin}
            style={{
              width: '100%',
              marginTop: '5px'
            }} noValidate>
            <TextField
              onChange={this.handleInput}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User name"
              name="username"
              autoFocus />
            <TextField
              onChange={this.handleInput}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password" />
            <label className="login-error-msg">{this.state.msg}</label>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: '10px' }}>
              Sign In
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        {/* <Box mt={8}>
          <Copyright />
        </Box> */}
      </Container >
    );
  }

}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.userModule.loggedInUser,
  }
}

const mapDispatchToProps = {
  loginUser,
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(_Login)


