import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resumePDF from "../../../assets/resume.pdf";
import { Box, Button } from "@mui/material";
import "./Resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumePage = () => {
  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log(`Number of pages: ${numPages}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ overflowX: "auto", maxWidth: "100%" }}>
        <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={1} scale={1.5} renderTextLayer={false} />
        </Document>
      </Box>
      <Button
        variant="contained"
        color="primary"
        href={resumePDF}
        download="My_Resume.pdf"
        sx={{
          marginY: 2,
          background: "linear-gradient(180deg, #4a4a4a, #000000)",
          borderColor: "white",
          borderWidth: "1px",
          borderStyle: "solid",
          backgroundColor: "#5f5f5f", // Normal state background
          ":hover": {
            background: "linear-gradient(180deg, #5f5f5f, #0a0a0a)", // Darker gradient on hover
            borderColor: "white", // Keep the border color for the hover state if you want
          },
        }}
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default ResumePage;
