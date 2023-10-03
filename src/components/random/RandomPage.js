import * as React from "react";
import {NotificationContext} from "../../App";
import {useState,useEffect} from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";

export default function RandomPage() {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL
    const notificationContextValues= React.useContext(NotificationContext);
    const [rows,setRows] = useState([]);
    const [selection,setSelection] = useState(undefined);
    useEffect(()=>{
        getAll()
    },[])

    const getAll = () =>{
        axios.get(`${SERVER_URL}/restaurant/listAll`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setRows(res.data)
            })
    }

    const randomize = ()=>{
        axios.get(`${SERVER_URL}/restaurant/randomSuggestion`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(res.data.errorMessage);
                if (res.data?.errorMessage && !res.data?.successMessage){
                    notificationContextValues.setSnackBarStatus("error")
                    notificationContextValues.setSnackBarMessage(res.data.errorMessage)
                    notificationContextValues.setSnackBarOpen(true)
                    throw new Error(res.data?.errorMessage);
                }
                setSelection(res.data?.successMessage)
                notificationContextValues.setDialogOpen(true)
                notificationContextValues.setDialogMessage(res.data?.successMessage)
            }).catch(e=>{
                console.log(e)
        })
    }
    const clear = ()=>{
        axios.get(`${SERVER_URL}/restaurant/deleteAll`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(res.data.errorMessage);
                if (res.data?.errorMessage && !res.data?.successMessage){
                    notificationContextValues.setSnackBarStatus("error")
                    notificationContextValues.setSnackBarMessage(res.data.errorMessage)
                    notificationContextValues.setSnackBarOpen(true)
                    throw new Error(res.data?.errorMessage);
                }
                notificationContextValues.setSnackBarStatus("success")
                notificationContextValues.setSnackBarOpen(true)
                notificationContextValues.setSnackBarMessage("Success")
                getAll()
            }).catch(e=>{
            console.log(e)
        })
    }

    return (
        <div style={{display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',alignItems:'center', margin:'10px'}}>
            <div style={{ marginTop:'10px',marginBottom:'50px'}}>
                <Button variant="contained"
                        onClick={randomize}
                >Randomize</Button>
                <Button variant="outlined" color="error"
                        onClick={clear}
                        style={{ marginLeft:'200px'}}
                >Clear All</Button>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Restaurant Name</TableCell>
                            {/*<TableCell align="right">Calories</TableCell>*/}
                            {/*<TableCell align="right">Fat&nbsp;(g)</TableCell>*/}
                            {/*<TableCell align="right">Carbs&nbsp;(g)</TableCell>*/}
                            {/*<TableCell align="right">Protein&nbsp;(g)</TableCell>*/}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                {/*<TableCell align="right">{row.calories}</TableCell>*/}
                                {/*<TableCell align="right">{row.fat}</TableCell>*/}
                                {/*<TableCell align="right">{row.carbs}</TableCell>*/}
                                {/*<TableCell align="right">{row.protein}</TableCell>*/}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}