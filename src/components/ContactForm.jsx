import { TextField, Button, MenuItem, Box, Alert } from "@mui/material";
import { useState } from "react";

export default function ContactForm() {
  const [regarding, setRegarding] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.email.trim()) newErrors.email = "Required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Success
      console.log("Form Data:", { ...formData, regarding });
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setRegarding("");
      setTimeout(() => setSubmitted(false), 5000); // Hide after 5s
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#f5f5f6] max-w-[960px] mx-auto px-4 sm:px-6 md:px-10 py-8 space-y-6 font-[Poppins]"
    >
      {/* Success Message */}
      {submitted && (
        <Alert severity="success" className="mb-4">
          Message submitted successfully!
        </Alert>
      )}

      {/* Row 1: Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextField
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          label="Name"
          placeholder="Your name"
          variant="outlined"
          error={!!errors.name}
          helperText={errors.name}
          InputLabelProps={{ style: { fontWeight: 500 } }}
        />
        <TextField
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          label="Email"
          placeholder="Your email"
          type="email"
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email}
          InputLabelProps={{ style: { fontWeight: 500 } }}
        />
      </div>

      {/* Row 2: Phone and Subject */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextField
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          fullWidth
          label="Phone"
          placeholder="Contact number"
          variant="outlined"
          error={!!errors.phone}
          helperText={errors.phone}
          InputLabelProps={{ style: { fontWeight: 500 } }}
        />
        <TextField
          select
          fullWidth
          label="Subject"
          variant="outlined"
          value={regarding}
          onChange={(e) => setRegarding(e.target.value)}
          error={!!errors.regarding}
          helperText={errors.regarding}
          SelectProps={{
            MenuProps: {
              PaperProps: { style: { maxHeight: 250 } },
            },
          }}
          InputProps={{ sx: { height: 56 } }}
          InputLabelProps={{ style: { fontWeight: 500 } }}
        >
          <MenuItem value="" disabled>
            Please select..
          </MenuItem>
          <MenuItem value="General Contracting">General Contracting</MenuItem>
          <MenuItem value="Facilities & Property Management">
            Facilities & Property Management
          </MenuItem>
          <MenuItem value="Interior Finishing & Fit-Out">
            Interior Finishing & Fit-Out
          </MenuItem>
          <MenuItem value="MEP Works">MEP Works</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
      </div>

      {/* Row 3: Message */}
      <div>
        <TextField
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          fullWidth
          multiline
          rows={10}
          label="Message"
          placeholder="Your message"
          variant="outlined"
          error={!!errors.message}
          helperText={errors.message}
          InputLabelProps={{ style: { fontWeight: 500 } }}
        />
      </div>

      {/* Row 4: Submit Button */}
      <Box className="text-left">
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
      </Box>
    </form>
  );
}
