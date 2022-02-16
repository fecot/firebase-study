import PropTypes from 'prop-types'
import { AppBar, Avatar, Button, Toolbar, Typography, withStyles } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from 'firebase/auth'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
    fontSize: '1.5rem',
  },
  button: {
    margin: theme.spacing(),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  avatar: {
    margin: 10,
    backgroundColor: 'white',
  },
})

const Header = ({ classes }) => {
  const [userInfo, setUserInfo] = useState(null)

  const googleLogin = () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    signInWithRedirect(auth, provider)
      .then(
        (data) => {
          console.log(data)
        },
        (err) => {
          console.log(err)
        })
  }

  const googleSignOut = () => {
    const auth = getAuth()
    signOut(auth).then(() => {
      setUserInfo(null)
    }).catch((err) => {
      console.log(err)
    })

  }

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, user => {
      if (user) {
        setUserInfo({
          isLogin: true,
          userName: user.displayName,
          profilePicUrl: user.photoURL,
        })
      } else {
        setUserInfo(null)
      }
    })
  }, [])

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h1" color="inherit" className={classes.flex}>
            Firebase Videos
          </Typography>
          {userInfo ?
            (
              <>
                <Button
                  color="inherit"
                  className={classes.button}
                  onClick={googleSignOut}
                >
                  <Avatar
                    alt="profile image"
                    src={`${userInfo.profilePicUrl}`}
                    className={classes.avatar}
                  />
                  {userInfo.userName}
                </Button>
                <Button color="inherit" className={classes.button} onClick={googleSignOut}>Sign Out</Button>
              </>
            ) :
            (
              <Button
                color="inherit"
                className={classes.button}
                onClick={googleLogin}
              >
                Login with Google
              </Button>
            )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.protoTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
