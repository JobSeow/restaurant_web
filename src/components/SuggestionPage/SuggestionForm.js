import {TextField} from "@mui/material";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import axios from "axios";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function SuggestionForm() {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL
    const handleSubmit = (event) => {
        console.log(event)
        console.log(SERVER_URL)
        event.preventDefault();
        axios.post(`${SERVER_URL}/restaurant/submit/${"test"}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };


    return (
        <div style={{width:'80%'}}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid xs={3}/>
                    <Grid xs={6}>
                        <TextField style={{width:'100%'}} id="filled-basic" label="Suggestion" variant="filled" />
                    </Grid>
                    <Grid xs={3}/>
                </Grid>

            </form>
        </div>
    );
}

export default SuggestionForm;