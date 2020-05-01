import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="static">
        <Toolbar>
          <Typography variant="subtitle1" color="inherit">
            Exercise Database
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Header
