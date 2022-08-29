import React, { useState } from "react";
import { Fab, TextareaAutosize } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";
import QrScan from "react-qr-reader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function QRscanner() {
  const [qrscan, setQrscan] = useState("No result");
  const handleScan = (data) => {
    if (data) {
      console.log(data);
      let re = new RegExp("REF-[0-9]+");
      re.test(data);
      console.log(re, re.test(data));

      setQrscan(data);
      if (re.test(data)) {
        toast.success("Qr Code is valid");
      } else {
        toast.error("Qr Code is Invalid");
      }
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <Link to="/">
        <Fab style={{ marginRight: 10 }} color="primary">
          <ArrowBack />
        </Fab>
      </Link>
      <span>QR Scanner</span>

      <center>
        <div style={{ marginTop: 30 }}>
          <QrScan
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ height: 240, width: 320 }}
          />
        </div>
      </center>

      <TextareaAutosize
        style={{ fontSize: 18, width: 320, height: 100, marginTop: 100 }}
        rowsMax={4}
        defaultValue={qrscan}
        value={qrscan}
      />
      <ToastContainer
        style={{ fontSize: "15px" }}
        toastStyle={{ Color: "green" }}
      />
    </div>
  );
}

export default QRscanner;
