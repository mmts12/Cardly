import { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { login } from '../store/actions/userActions.js';

export class _Login extends Component {
  state = {
    loggedinUser: this.props.loggedInUser,
    loginCred: {
      username: '',
      password: '',
    },
    signupCred: {
      username: '',
      password: '',
      fullname: '',
    },
    isSignUp: false,
    msg: '',
  };

  loginHandleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState((prevState) => ({
      loginCred: {
        ...prevState.loginCred,
        [name]: value,
      },
    }));
  };

  doLogin = async (ev) => {
    ev.preventDefault();
    const { username, password } = this.state.loginCred;
    if (!username) {
      return this.setState({ msg: 'Please enter user/password' });
    }
    const userCreds = { username, password };
    this.props
      .login(userCreds)
      .then((user) => {
        this.setState({
          loginCred: { username: '', password: '' },
          loggedInUser: user,
        });
        if (this.props.loggedInUser) this.props.history.push('/cardly');
        else this.setState({ msg: 'Invalid username / Password' });
      })
      .catch((err) => {
        console.log('ERR', err);
        this.setState({ msg: 'Invalid username / Password' });
      });
  };

  render() {
    return (
      // const loggedInUser = userService.getLoggedinUser();
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div
          style={{
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            style={{
              margin: '10px',
              backgroundColor: 'blue',
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h2" variant="h5">
            Log in
          </Typography>
          <form
            onSubmit={this.doLogin}
            style={{
              width: '100%',
              marginTop: '5px',
            }}
            noValidate
          >
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="email"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
              value={this.state.loginCred.username}
              onChange={this.loginHandleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.loginCred.password}
              onChange={this.loginHandleChange}
            />
            <label className="login-error-msg">{this.state.msg}</label>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: '10px' }}
            >
              Log in
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.userModule.loggedInUser,
  };
};

const mapDispatchToProps = {
  login,
};

export const Login = connect(mapStateToProps, mapDispatchToProps)(_Login);
