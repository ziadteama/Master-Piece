import {
    TextField,
    Button,
    Box,
    Grid,
    Typography,
    MenuItem,
  } from "@mui/material";
  import { useState } from "react";
  
  export default function ContactForm() {
    const [regarding, setRegarding] = useState("");
  
    const handleChange = (event) => {
      setRegarding(event.target.value);
    };
  
    return (
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          backgroundColor: "#f5f5f6",
          p: { xs: 3, sm: 4, md: 6 },
          maxWidth: 960,
          mx: "auto",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <Grid container spacing={4}>
          {/* Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              placeholder="Your name"
              InputLabelProps={{
                style: { fontWeight: 500 },
              }}
            />
          </Grid>
  
          {/* Email */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              placeholder="Your email"
              InputLabelProps={{
                style: { fontWeight: 500 },
              }}
            />
          </Grid>
  
          {/* Phone */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              placeholder="Contact number"
              InputLabelProps={{
                style: { fontWeight: 500 },
              }}
            />
          </Grid>
  
          {/* Subject dropdown */}
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Subject"
              variant="outlined"
              value={regarding}
              onChange={handleChange}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    style: {
                      maxHeight: 250,
                    },
                  },
                },
              }}
              InputProps={{
                sx: {
                  height: 56, // taller select height
                },
              }}
              InputLabelProps={{
                style: { fontWeight: 500 },
              }}
            >
              <MenuItem value="" disabled>
                Please select..
              </MenuItem>
              <MenuItem value="Contracting">Contracting</MenuItem>
              <MenuItem value="Consultancy">Consultancy</MenuItem>
              <MenuItem value="Trading">Trading</MenuItem>
              <MenuItem value="Developing">Developing</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>
  
          {/* Message */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              placeholder="Your message"
              multiline
              rows={10}
              InputLabelProps={{
                style: { fontWeight: 500 },
              }}
            />
          </Grid>
  
          {/* Submit Button */}
          <Grid item xs={12} textAlign="center">
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#16758a",
                fontWeight: "bold",
                px: 6,
                py: 1.75,
                fontSize: "1rem",
                borderRadius: "6px",
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: "#125d70",
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }
  