import React, { useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import "./SearchForm.css";
import { Alert } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function Form() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (props) => {
    if (url) {
      axios
        .post("http://localhost:8080/search", { url: url })
        .then((response) => {
          setSuccess("safe");
          setError(null);
          console.log("safe");
        })
        .catch((error) => {
          let obj = { ...error.response.data };
          setError("phishing");
          setSuccess(null);
          setErrorMessage(obj);
          console.log("phishing");
        });
    } else {
      setSuccess(null);
      setError(null);
    }
  };

  return (
    <div className="SearchForm">
      <div>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 800,
            marginTop: "20px",
          }}
        >
          <InputBase
            type="text"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            sx={{ ml: 2, flex: 2 }}
            placeholder="Enter Your URL"
          />
          <Button type="button" onClick={handleSubmit} variant="contained">
            Search
          </Button>
        </Paper>
        {url && error &&  (
          <Alert icon={<div />} className="alertMessage" severity="error">
            <AlertTitle icon={<div />} className="alertTitle">
              <h3 className="headerText">Warning ! This is phishing URL</h3>
            </AlertTitle>
            <p className="infoText">
              Submission Time: {errorMessage ? errorMessage.submissionTime : ""}
            </p>
            <p className="infoText">Verified: {errorMessage ? errorMessage.verified : ""}</p>
            <p className="infoText">
              Verification Time: {errorMessage ? errorMessage.verificationTime : ""}
            </p>
            <p className="infoText">Online: {errorMessage ? errorMessage.online : ""}</p>
            <p className="infoText">Target: {errorMessage ? errorMessage.target : ""}</p>
          </Alert>
        )}

        {url && success && (
          <Alert icon={<div />} className="alertMessage" severity="success">
            <AlertTitle icon={<div />} className="alertTitle">
              <h3 className="headerText">No Risk ! This is safe URL</h3>
            </AlertTitle>
          </Alert>
        )}
      </div>
    </div>
  );
}
