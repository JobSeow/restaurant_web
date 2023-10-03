import logo from './logo.svg';
import './App.css';
import {AppBar, Box, Button, IconButton, TextField, Typography} from "@mui/material";
import SuggestionForm from "./components/suggestion/SuggestionForm";
import {createContext} from "react";
import * as React from "react";

import SimpleBackdrop from "./components/common/SimpleBackdrop";
import CustomizedSnackbars from "./components/common/CustomizedSnackbars";
import Toolbar from '@mui/material/Toolbar';
import RandomPage from "./components/random/RandomPage";
import AlertDialog from "./components/common/AlertDialog";
export const NotificationContext = createContext()

function App() {
    const [openBackDrop, setOpenBackDrop] = React.useState(false);
    const [snackBarOpen, setSnackBarOpen] = React.useState(false);
    const [snackBarMessage, setSnackBarMessage] = React.useState(undefined);
    const [snackBarStatus, setSnackBarStatus] = React.useState("success");
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [dialogMessage, setDialogMessage] = React.useState(false);
    const [componentInFocus, setComponentInFocus] = React.useState("suggest");
  return (
    <div >
      <NotificationContext.Provider value={{
          openBackDrop:openBackDrop,
          setOpenBackDrop:setOpenBackDrop,
          snackBarOpen: snackBarOpen,
          setSnackBarOpen:setSnackBarOpen,
          dialogOpen:dialogOpen,
          setDialogOpen:setDialogOpen,
          dialogMessage:dialogMessage,
          setDialogMessage:setDialogMessage,
          snackBarMessage:snackBarMessage,
          setSnackBarMessage:setSnackBarMessage,
          snackBarStatus:snackBarStatus,
          setSnackBarStatus:setSnackBarStatus
      }}>
          <SimpleBackdrop/>
          <CustomizedSnackbars/>
          <AlertDialog/>
          <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static" color="default">
                  <Toolbar>
                      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                          Restaurant
                      </Typography>
                      <Button color="inherit" onClick={()=>{
                          setComponentInFocus("suggest")
                      }}>Suggest</Button>
                      <Button color="inherit" onClick={()=>{
                          setComponentInFocus("random")
                      }}>Randomizer</Button>
                  </Toolbar>
              </AppBar>
          </Box>
          <header className="App-header">
              {componentInFocus==="suggest"?  <SuggestionForm />:<RandomPage/>}
          </header>
      </NotificationContext.Provider>
    </div>
  );
}

export default App;
