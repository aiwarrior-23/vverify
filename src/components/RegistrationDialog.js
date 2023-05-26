import React, { useState } from 'react';
import { Button, Dialog, FormLabel, DialogActions, DialogContent, DialogTitle, TextField, RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { Link } from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    form: {
        display: 'block',
        flexDirection: 'column',
        width: '100%',
        flexWrap: ""
    },
    radioGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#4a47a3', // a shade of dark blue
        color: '#ffffff', // white text
        fontSize: '16px', // larger font size
        borderRadius: '5px', // rounded corners
        padding: '10px 20px', // more padding
        margin: '10px', // some space between buttons
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', // a subtle shadow effect
        transition: 'all 0.3s ease 0s', // smooth transition effect for hover state
        '&:hover': {
            backgroundColor: '#2e2a75', // darken background on hover
            boxShadow: '0px 15px 20px rgba(46, 229, 157, 0.4)', // enhance shadow on hover
            transform: 'translateY(-3px)' // slight lift on hover
        },
    },
});

function getStepContent(classes) {
    return (
        <form noValidate autoComplete="off" className={classes.form}>
            <TextField label="Enter Name" variant="outlined" fullWidth margin="normal" />
            <TextField label="Enter Email" variant="outlined" fullWidth margin="normal" />
            <FormControl component="fieldset" margin="normal">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" className={classes.radioGroup}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
            </FormControl>
            <InputLabel id="date-picker-label" style={{ marginTop: "2%", marginBottom: "2%" }}>Select Date of Birth</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Date of Birth" margin="normal" fullWidth />
            </LocalizationProvider>
        </form>
    );
}

const RegistrationDialog = () => {
    const [open, setOpen] = useState(true);
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ width: "200%" }}>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"><h2>Signup Page</h2></DialogTitle>
                <DialogContent style={{marginTop:"-10%"}}>
                    {getStepContent(classes)}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        <Link to="/" style={{ textDecoration: "None" }}>
                            Cancel
                        </Link>
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        <Link to="/" style={{ textDecoration: "None" }}>
                            Submit
                        </Link>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default RegistrationDialog;