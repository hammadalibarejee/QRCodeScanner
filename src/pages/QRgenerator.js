import React, { useState } from "react";
import { Fab, Button, Grid } from "@material-ui/core";
import { ArrowBack, GetApp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import QRcode from "qrcode.react";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";

function QRgenerator() {
  const [qr, setQr] = useState(null);
  const handleChange = (event) => {
    setQr(`REF-${Date.now()}`);
    console.log(Date.now());
  };
  const downloadQR = () => {
    const canvas = document.getElementById("myqr");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "myqr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <Link to="/">
        <Fab style={{ marginRight: 10 }} color="primary">
          <ArrowBack />
        </Fab>
      </Link>
      <span>QR Generator</span>

      <div style={{ marginTop: 30 }}>
        <Button
          variant="contained"
          onClick={handleChange}
          size="large"
          color="primary"
        >
          Generate
        </Button>
      </div>

      <div>
        {qr ? (
          <QRcode id="myqr" value={qr} size={320} includeMargin={true} />
        ) : (
          <p>No QR code preview</p>
        )}
      </div>
      <div>
        {qr ? (
          <Grid container>
            {/* <Grid item xs={10}></Grid> */}
            <Grid item xs={2}>
              <Fab
                onClick={downloadQR}
                style={{ marginLeft: 10 }}
                color="primary"
              >
                <GetApp />
              </Fab>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default QRgenerator;
