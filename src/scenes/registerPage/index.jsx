import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Box, Button, TextField, useMediaQuery, Typography, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const errors = [];

const RegisterForm = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();

  return (
    <Box className="background-container">
      <Box width="55%" p="1rem 6%" textAlign="center">
        <img src="/assets/GreenRouteLogo.png" alt="GreenRoute Logo" height="125px" />
      </Box>

      <Box width={isNonMobileScreens ? "50%" : "80%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}>
        <div className="register-form">
          <Typography fontWeight="800" variant="h3" sx={{ mb: "1.5rem" }}>
            Welcome to GreenRoute!
          </Typography>
          <Typography fontWeight="400" variant="h4" sx={{ mb: "1rem" }}>
            Register Page
          </Typography>

          <Formik
            initialValues={{
              firstname: '',
              lastname: '',
              phone: '',
              email: '',
              password: '',
              confirmpassword: '',
              acceptTerms: false
            }}
            validate={values => {
              const errors = {};

              // Validation conditions here
              if (!values.firstname) errors.firstname = 'Please fill the mandatory field';
              if (!values.lastname) errors.lastname = 'Please fill the mandatory field';
              if (!values.phone) errors.phone = 'Please fill the mandatory field';
              if (!values.email) errors.email = 'Please fill the mandatory field';
              if (!values.password) errors.password = 'Please fill the mandatory field';
              if (values.password !== values.confirmpassword) errors.confirmpassword = 'Passwords must match';
              if (!values.acceptTerms) errors.acceptTerms = 'You must accept the terms';
              return errors;
            }}

            onSubmit={(values, { setSubmitting, resetForm }) => {
              fetch('http://localhost:3001/auth/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
              })
                .then(response => {
                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                  return response.json();
                })
                .then(data => {
                  console.log(data);
                  if(data.auth && data.token){
                    localStorage.setItem('token', data.token);
                  }
                  setSubmitting(false);
                  resetForm();
                  navigate('/login');
                })
                .catch(error => {
                  console.error('There has been a problem with your fetch operation:', error);
                });
            }}
            

          >
            {({ isSubmitting }) => (
              <Form noValidate>
                <div className="form-group">
                  <Field as={TextField} name="firstname" label="First Name" fullWidth sx={{ mt: "1rem" }} />
                  <ErrorMessage name="firstname" component="div" className="invalid-feedback" />
                </div>

                <div className="form-group">
                  <Field as={TextField} name="lastname" label="Last Name" fullWidth sx={{ mt: "1rem" }} />
                  <ErrorMessage name="lastname" component="div" className="invalid-feedback" />
                </div>

                <div className="form-group">
                  <Field as={TextField} name="phone" label="Phone" fullWidth sx={{ mt: "1rem" }} />
                  <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                </div>

                <div className="form-group">
                  <Field as={TextField} name="email" label="Email" type="email" fullWidth sx={{ mt: "1rem" }} />
                  <ErrorMessage name="email" component="div" className="invalid-feedback" />
                </div>

                <div className="form-group">
                  <Field as={TextField} name="password" label="Password" type="password" fullWidth sx={{ mt: "1rem" }} />
                  <ErrorMessage name="password" component="div" className="invalid-feedback" />
                </div>

                <div className="form-group">
                  <Field as={TextField} name="confirmpassword" label="Confirm Password" type="password" fullWidth sx={{ mt: "1rem", mb: "1rem" }} />
                  <ErrorMessage name="confirmpassword" component="div" className="invalid-feedback" />
                </div>

                <div className="form-group">
                  <Button type="submit" variant="contained" color="primary" size="medium" disabled={isSubmitting} sx={{ mt: "1rem", height: "3em", width: "8em", backgroundColor: "#A2FB90", color: "#000000", fontWeight: "bold", fontSize: "15px" }}>Register</Button>
                </div>
                <Typography sx={{ mt: "1rem", textAlign: "center" }}>Already a user? <Link to="/login">Login here.</Link></Typography>
              </Form>
            )}
          </Formik>
        </div>
      </Box>
      <Box p="2rem"></Box>
    </Box>
  );
};
export default RegisterForm;
