import {Button, TextField} from "@mui/material";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import axios from "axios";
import {useState} from "react";
import * as React from "react";
import {NotificationContext} from "../../App";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function SuggestionForm() {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL
    const notificationContextValues= React.useContext(NotificationContext);
    const [suggestion,setSuggestion] = useState("");
    const handleSubmit = (event) => {
        notificationContextValues.setOpenBackDrop(true)

        axios.post(`${SERVER_URL}/restaurant/submit`,{name:suggestion})
            .then(res => {
                if (res.data?.errorMessage && !res.data?.successMessage ){
                    console.log(res.data.errorMessage);
                    notificationContextValues.setSnackBarStatus("error")
                    notificationContextValues.setSnackBarMessage(res.data.errorMessage)
                    notificationContextValues.setSnackBarOpen(true)
                    throw new Error(res.data?.errorMessage);
                }
                notificationContextValues.setSnackBarStatus("success")
                notificationContextValues.setSnackBarOpen(true)
                notificationContextValues.setSnackBarMessage("Success")
                setSuggestion("")
            }).catch(e=>{
                console.log(e)

        })
        notificationContextValues.setOpenBackDrop(false)
    };


    return (
        <div style={{width:'80%'}}>
            <p style={{display: 'flex',
                justifyContent: 'center'}}>
                Restaurant Suggestion
            </p>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid xs={3}/>
                    <Grid xs={6} style={{display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',alignItems:'center'}}>
                        <TextField style={{width:'100%'}}
                                   id="filled-basic"
                                   label="Suggestion"
                                   variant="filled"
                                   value={suggestion}
                                   onChange={(event) => {
                                       setSuggestion(event.target.value);
                                   }}
                        />
                        <Button variant="contained" style={{margin:'10px', width:'50%'}}  onClick={handleSubmit}>Submit</Button>
                    </Grid>
                    <Grid xs={3}/>
                    <Grid xs={3}></Grid>
                </Grid>

            </form>
        </div>
    );
}

export default SuggestionForm;