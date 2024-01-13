import React from "react";
import { Typography, Container, Paper } from "@mui/material";

const Terms = () => {
  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Paper
        elevation={1}
        sx={{ p: 4, mt: 4, mb: 2, bgcolor: "black", color: "white" }}
      >
        <Typography variant="h3" gutterBottom>
          Terms and Conditions
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to my portfolio website. This website showcases a collection
          of my creative projects and designs. By accessing and using this
          website, you agree to the following terms and conditions.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Intellectual Property
        </Typography>
        <Typography variant="body1" paragraph>
          All content displayed on this site, including designs, concepts, and
          works, are my original creations and are protected under intellectual
          property laws. They are showcased here for personal viewing and must
          not be replicated, distributed, or used without my express written
          consent.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Use of AI-Generated Images
        </Typography>
        <Typography variant="body1" paragraph>
          Some images on this site were generated using DALL-E 2, an AI image
          generation model by OpenAI. These images, while created with AI
          assistance, are part of my original compositions and are subject to
          the same intellectual property rights as my other works.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Usage and Licensing
        </Typography>
        <Typography variant="body1" paragraph>
          Any use of my designs, whether commercial or non-commercial, requires
          prior written approval from me. I welcome inquiries for collaborations
          or licensing arrangements, subject to agreement on specific terms and
          conditions.
        </Typography>
        <Typography variant="body1" paragraph>
          I reserve the right to amend these terms at any time. Your continued
          use of the site will constitute acceptance of any changes.
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for respecting my work and intellectual property rights. I
          appreciate your interest and support in my creative endeavors.
        </Typography>
        {/* Additional sections or contact information can be added here if needed */}
      </Paper>
    </Container>
  );
};

export default Terms;
