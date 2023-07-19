  // return (
  //   <Box className="background-container">
  //     <Box width="55%" p="1rem 6%" textAlign="center">
  //       <img src="/assets/GreenRouteLogo.png" alt="GreenRoute Logo" height="125px" />
  //     </Box>

  //     <Box width={isNonMobileScreens ? "50%" : "80%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}>
  //       <div className="register-form">
  //         <Typography fontWeight="800" variant="h3" sx={{ mb: "1.5rem" }}>
  //           Welcome to GreenRoute!
  //         </Typography>
  //         <Typography fontWeight="400" variant="h4" sx={{ mb: "1rem" }}>
  //           Register Page
  //         </Typography>

  //         <Formik
  //           initialValues={{
  //             firstname: '',
  //             lastname: '',
  //             phone: '',
  //             email: '',
  //             password: '',
  //             confirmpassword: '',
  //             acceptTerms: false
  //           }}
  //           validationSchema={validationSchema}
  //           onSubmit={(values, { setSubmitting, resetForm }) => {
  //             // Here you should usually confirm the data on the server
  //             console.log(JSON.stringify(values, null, 2));
  //             setSubmitting(false);
  //             resetForm();
  //             navigate('/login');
  //           }}
  //         >
  //           {({
  //             values,
  //             errors,
  //             touched,
  //             handleChange,
  //             handleBlur,
  //             handleSubmit,
  //             isSubmitting,
  //           }) => (
  //             <form onSubmit={handleSubmit} noValidate>
  //               <Field as={TextField} name="firstname" label="First Name" sx={{ gridColumn: "span 2" }} />
  //               <ErrorMessage name="firstname" component="div" className="invalid-feedback" />

  //               <Field as={TextField} name="lastname" label="Last Name" fullWidth required />
  //               <ErrorMessage name="lastname" component="div" className="invalid-feedback" />

  //               <Field as={TextField} name="phone" label="Phone" fullWidth required />
  //               <ErrorMessage name="phone" component="div" className="invalid-feedback" />

  //               <Field as={TextField} name="email" label="Email" type="email" fullWidth required />
  //               <ErrorMessage name="email" component="div" className="invalid-feedback" />

  //               <Field as={TextField} name="password" label="Password" type="password" fullWidth required />
  //               <ErrorMessage name="password" component="div" className="invalid-feedback" />

  //               <Field as={TextField} name="confirmpassword" label="Confirm Password" type="password" fullWidth required />
  //               <ErrorMessage name="confirmpassword" component="div" className="invalid-feedback" />

  //               <Field type="checkbox" name="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
  //               <label htmlFor="acceptTerms" className="form-check-label"> I have read and agree to the Terms </label>
  //               <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />

  //               <Button type="submit" variant="contained" color="primary" size="medium" disabled={isSubmitting} sx={{ mt: "2rem" }}>Register</Button>
  //               <Typography sx={{ mt: "1rem", textAlign: "center" }}>Already a user? <Link to="/login">Login here.</Link></Typography>
  //             </form>
  //           )}
  //         </Formik>
  //       </div>
  //     </Box>
  //     <Box p="2rem"></Box>
  //   </Box>
  // );

//   return (
//     <Box className="background-container">
//       <Box width="55%" p="1rem 6%" textAlign="center">
//         <img src="/assets/GreenRouteLogo.png" alt="GreenRoute Logo" height="125px" />
//       </Box>

//       <Box width={isNonMobileScreens ? "50%" : "80%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}>
//         <div className="register-form">
//           <Typography fontWeight="800" variant="h3" sx={{ mb: "1.5rem" }}>
//             Welcome to GreenRoute!
//           </Typography>
//           <Typography fontWeight="400" variant="h4" sx={{ mb: "1rem" }}>
//             Register Page
//           </Typography>

//           <Formik
//             initialValues={{
//               firstname: '',
//               lastname: '',
//               phone: '',
//               email: '',
//               password: '',
//               confirmpassword: '',
//               acceptTerms: false
//             }}
//             validate={values => {
//               const errors = {};

//               // Validation conditions here
//               if (!values.firstname) errors.firstname = 'Required';
//               if (!values.lastname) errors.lastname = 'Required';
//               if (!values.phone) errors.phone = 'Required';
//               if (!values.email) errors.email = 'Required';
//               if (!values.password) errors.password = 'Required';
//               if (values.password !== values.confirmpassword) errors.confirmpassword = 'Passwords must match';
//               if (!values.acceptTerms) errors.acceptTerms = 'You must accept the terms';

//               return errors;
//             }}
//             onSubmit={(values, { setSubmitting, resetForm }) => {
//               // Here you should usually confirm the data on the server
//               console.log(JSON.stringify(values, null, 2));
//               setSubmitting(false);
//               resetForm();
//               navigate('/login');
//             }}
//           >
//             {({ isSubmitting }) => (
//               <Form noValidate>
//                 <div className="form-group">
//                   <Field as={TextField} name="firstname" label="First Name" fullWidth sx={{ mt: "1rem" }} />
//                   <ErrorMessage name="firstname" component="div" className="invalid-feedback" />
//                 </div>

//                 <div className="form-group">
//                   <Field as={TextField} name="lastname" label="Last Name" fullWidth sx={{ mt: "1rem" }} />
//                   <ErrorMessage name="lastname" component="div" className="invalid-feedback" />
//                 </div>

//                 <div className="form-group">
//                   <Field as={TextField} name="phone" label="Phone" fullWidth sx={{ mt: "1rem" }} />
//                   <ErrorMessage name="phone" component="div" className="invalid-feedback" />
//                 </div>

//                 <div className="form-group">
//                   <Field as={TextField} name="email" label="Email" type="email" fullWidth sx={{ mt: "1rem" }} />
//                   <ErrorMessage name="email" component="div" className="invalid-feedback" />
//                 </div>

//                 <div className="form-group">
//                   <Field as={TextField} name="password" label="Password" type="password" fullWidth sx={{ mt: "1rem" }} />
//                   <ErrorMessage name="password" component="div" className="invalid-feedback" />
//                 </div>

//                 <div className="form-group">
//                   <Field as={TextField} name="confirmpassword" label="Confirm Password" type="password" fullWidth sx={{ mt: "1rem", mb: "1rem" }} />
//                   <ErrorMessage name="confirmpassword" component="div" className="invalid-feedback" />
//                 </div>

//                 {/* <div className="form-group form-check">
//                   <Field type="checkbox" name="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
//                   <label htmlFor="acceptTerms" className="form-check-label"> I have read and agree to the Terms </label>
//                   <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
//                 </div> */}

//                 <div className="form-group">
//                   <Button type="submit" variant="contained" color="primary" size="medium" disabled={isSubmitting} sx={{ mt: "1rem", height: "3em", width: "8em", backgroundColor: "#A2FB90", color: "#000000", fontWeight: "bold", fontSize: "15px" }}>Register</Button>
//                 </div>
//                 <Typography sx={{ mt: "1rem", textAlign: "center" }}>Already a user? <Link to="/login">Login here.</Link></Typography>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </Box>
//       <Box p="2rem"></Box>
//     </Box>
//   );
// };
