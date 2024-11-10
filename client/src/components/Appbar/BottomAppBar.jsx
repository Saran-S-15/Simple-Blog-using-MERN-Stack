import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';



const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
  const navigate = useNavigate();

  const handleBlog = () => {
    navigate("/web/createBlog")
  }

  const handlelogout = () => {
    window.localStorage.removeItem("myapp");
    navigate("/");
  }

  

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, backgroundColor: "darkblue" }}>
        <Toolbar>
          <StyledFab
            onClick={handleBlog}
            sx={{
              backgroundColor: "black",
              color: "white",
              ":hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
            aria-label="add"
          >
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <LogoutIcon onClick={handlelogout} sx={{fontSize:"30px", cursor:"pointer"}}/>
        </Toolbar>
      </AppBar>

    </React.Fragment>
  );
}
