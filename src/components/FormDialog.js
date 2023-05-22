import React, { useState } from 'react';
import { Button, Dialog, FormLabel, Typography, DialogActions, DialogContent, DialogTitle, Step, Stepper, StepLabel, TextField, RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { makeStyles } from '@material-ui/core/styles';


const steps = ['Upload Files', 'Enter Required Fields'];
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

function getStepContent(step, classes) {
    switch (step) {
        case 0:
            return (
                <div>
                    <Button
                        variant="contained"
                        className={classes.button}
                        component="label"
                        startIcon={<CloudUpload />}
                    >
                        Upload Passport
                        <input type="file" hidden />
                    </Button>

                    <Button
                        variant="contained"
                        className={classes.button}
                        component="label"
                        startIcon={<CloudUpload />}
                    >
                        Upload Driving License
                        <input type="file" hidden />
                    </Button>
                </div>

            );
        case 1:
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
                    <TextField label="Passport Number" variant="outlined" fullWidth margin="normal" />
                    <TextField label="Driving License Number" variant="outlined" fullWidth margin="normal" />
                    <TextField label="Job Role" variant="outlined" fullWidth margin="normal" />
                    <TextField label="Employer Name" variant="outlined" fullWidth margin="normal" />
                    <TextField label="Employer Address" variant="outlined" fullWidth margin="normal" />
                    <TextField label="Eligibility for DBS Check" variant="outlined" fullWidth margin="normal" />
                    <TextField label="Regulated Activity" variant="outlined" fullWidth margin="normal" />
                    <TextField label="Workforce Type" variant="outlined" fullWidth margin="normal" />
                    <FormControl variant="outlined" fullWidth margin="normal">
                        <InputLabel id="barred-list-label">Barred List</InputLabel>
                        <Select labelId="barred-list-label" id="barred-list-select">
                            <MenuItem value={10}>Child</MenuItem>
                            <MenuItem value={20}>Adult</MenuItem>
                            <MenuItem value={30}>Both</MenuItem>
                        </Select>
                    </FormControl>
                </form>
            );
        default:
            return 'Unknown step';
    }
}

const FormDialog = () => {
    const [open, setOpen] = useState(true);
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ width: "200%" }}>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Enhanced DBS Check</DialogTitle>
                <DialogContent>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {getStepContent(activeStep, classes)}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        <Link to="/" style={{textDecoration: "None"}}>
                            Cancel
                        </Link>
                    </Button>
                    {activeStep === steps.length - 1 ? (
                            <Button onClick={handleClose} color="primary">
                                <Link to="/" style={{textDecoration: "None"}}>
                            Finish
                        </Link>
                            </Button>
                    ) : (
                        <Button
                            onClick={handleNext} color="primary">
                            Next
                        </Button>
                    )}
                    {activeStep !== 0 && (
                        <Button onClick={handleBack} color="primary">
                            Back
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default FormDialog;