import React, { useState, useRef } from "react";
import { Grid, TextField, Box, Button, Typography } from "@mui/material";
import dayjs from "dayjs";
import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import MuiPhoneNumber from "material-ui-phone-number";

import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import LinearProgress from "@mui/material/LinearProgress";

const Form = () => {
  const patientFirstNameRef = useRef();
  const patientLastNameRef = useRef();
  const guardianFirstNameRef = useRef();
  const guardianLastNameRef = useRef();
  const primaryReasonForVisitRef = useRef();
  const currentMedicationsRef = useRef();
  const allergiesRef = useRef();

  const [date, setDate] = useState(dayjs(Date().toString()));
  const [radioValue, setRadioValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pickFile, setPickFile] = useState(null);
  const [persentage, setPersentage] = useState(0);
  const [selectedState, setSelectedState] = useState("");

  const handleSelectState = (e) => {
    setSelectedState(e.target.value);
  };

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleFilePicker = (event) => {
    setPickFile(event.target.files[0]);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredPatientFirstName = patientFirstNameRef.current.value;
    const enteredPatientLastName = patientLastNameRef.current.value;
    const enteredGuardianFirstName = guardianFirstNameRef.current.value;
    const enteredGuardianLastName = guardianLastNameRef.current.value;
    const enteredPrimaryReasonForVisit = primaryReasonForVisitRef.current.value;
    const enteredCurrentMedications = currentMedicationsRef.current.value;
    const enteredAllergies = allergiesRef.current.value;

    if (enteredPatientFirstName.trim().length === 0) {
      setErrorMessage("Enter valid your first name.");
    } else if (enteredPatientLastName.trim().length === 0) {
      setErrorMessage("Enter valid your last name.");
    } else if (date === "") {
      setErrorMessage("Enter valid your Date of birth.");
    } else if (radioValue === "") {
      setErrorMessage("Please select valid option of above 18.");
    } else if (enteredGuardianFirstName.trim().length === 0) {
      setErrorMessage("Please enter your gurdians first name.");
    } else if (enteredGuardianLastName.trim().length === 0) {
      setErrorMessage("Please enter your gurdians last name.");
    } else if (enteredPrimaryReasonForVisit.trim().length === 0) {
      setErrorMessage("Enter valid your visit  reason.");
    } else if (enteredCurrentMedications.trim().length === 0) {
      setErrorMessage("Enter valid your current medicine.");
    } else if (enteredAllergies.trim().length === 0) {
      setErrorMessage("Enter valid your allergies");
    } else if (selectedState === "") {
      setErrorMessage("Please select the state");
    } else if (phoneNumber === "") {
      setErrorMessage("Please enter your phone number.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <Box sx={{ padding: "30px 30px 15px 0px" }}>
      <Box component="form" onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              placeholder="Patient First Name"
              name="patientFirstName"
              fullWidth
              color="success"
              ref={patientFirstNameRef}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              placeholder="Patient Last Name"
              name="patientLastName"
              fullWidth
              color="success"
              ref={patientLastNameRef}
            />
          </Grid>
        </Grid>

        <Grid sx={{ paddingTop: "15px" }} container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl required fullWidth variant="outlined">
              <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Patient DOB"
                  value={date}
                  inputFormat="MM/DD/YYYY"
                  defaultValue={"DD/MM/YYYY"}
                  fullWidth
                  required
                  onChange={(date) => {
                    setDate(date);
                  }}
                  renderInput={(params) => (
                    <TextField
                      required
                      id="datetime-local"
                      // label="Next appointment"
                      type="datetime-local"
                      {...params}
                      error={false}
                      helperText="Patient DOB"
                    />
                  )}
                />
              </LocalizationProvider>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required fullWidth variant="outlined">
              <FormLabel>Above 18</FormLabel>{" "}
              <div>
                <FormControlLabel
                  value="end"
                  control={
                    <Radio
                      checked={radioValue === "Yes"}
                      onChange={handleRadioChange}
                      value="Yes"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "Yes" }}
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value="end"
                  control={
                    <Radio
                      checked={radioValue === "No"}
                      onChange={handleRadioChange}
                      value="No"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "No" }}
                    />
                  }
                  label="No"
                />
              </div>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container sx={{ paddingTop: "15px" }} spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              placeholder="Guardian First Name"
              name="guardianFirstName"
              fullWidth
              color="success"
              ref={guardianFirstNameRef}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              placeholder="Guardian Last Name"
              name="guardianLastName"
              fullWidth
              color="success"
              ref={guardianLastNameRef}
            />
          </Grid>
        </Grid>

        <Grid container sx={{ paddingTop: "15px" }} spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              minRows={6}
              multiline={true}
              required
              placeholder="Primary Reason for Visit"
              name="primaryReasonForVisit"
              fullWidth
              color="success"
              ref={patientFirstNameRef}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              minRows={6}
              multiline={true}
              required
              placeholder="Current Medications"
              name="currentMedications"
              fullWidth
              color="success"
              ref={currentMedicationsRef}
            />
          </Grid>
        </Grid>

        <Grid container sx={{ paddingTop: "15px" }} spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              minRows={6}
              multiline={true}
              required
              placeholder="Allergies"
              name="allergies"
              fullWidth
              color="success"
              ref={allergiesRef}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormLabel>State</FormLabel>
            <FormControl fullWidth variant="outlined">
              <Select
                value={selectedState}
                onChange={handleSelectState}
                fullWidth
                helperText="State"
              >
                <MenuItem value="Gujarat">Gujarat</MenuItem>
                <MenuItem value={"Rajasthan"}>Rajasthan</MenuItem>
                <MenuItem value={"Kutch"}>Chennai</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container sx={{ paddingTop: "15px" }} spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl required fullWidth variant="outlined">
              <FormLabel>Pharmacy Phone Number</FormLabel>
              <MuiPhoneNumber
                defaultCountry={"in"}
                variant="outlined"
                onChange={handlePhoneNumberChange}
                value={phoneNumber}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box fullWidth>
              <FormLabel>Upload Photos(Optional)</FormLabel>
              <FormControl fullWidth variant="outlined">
                <div variant="outlined">
                  <input type="file" onChange={handleFilePicker} />
                  <button onClick={() => {}}>Upload</button>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ width: "100%", mr: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={persentage}
                      />
                    </Box>
                    <Box sx={{ minWidth: 30 }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >{`${persentage}%`}</Typography>{" "}
                    </Box>
                  </Box>
                </div>
              </FormControl>
            </Box>
          </Grid>
        </Grid>

        {errorMessage && (
          <div
            style={{
              textAlign: "center",
              color: "red",
              fontSize: ".9rem",
              marginBottom: ".5rem",
            }}
          >
            {errorMessage}
          </div>
        )}

        <Button
          sx={{ margin: 1, float: "right" }}
          variant="contained"
          onClick={submitHandler}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
