import React from "react";
import { Box, Button, TextField, useMediaQuery, Typography, useTheme } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";


// const RegisterPage = () => {
//   const theme = useTheme();
//   const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
//   const navigate = useNavigate();

//   // const handleRegister = (initialValues) => {
//   //   // Insert logic to handle Register
//   //   navigate("/login");

//   // };

//   const onSubmit = data => {
//     console.log(JSON.stringify(data, null, 2));
//   }

//   const validationSchema = Yup.object().shape({
//     firstname: Yup.string()
//     .required('First Name is required')
//     .min(3, 'Username must be at least 6 characters')
//     .max(20, 'Username must not exceed 20 characters'),
//     lastname: Yup.string()
//       .required('Last Name is required')
//       .min(0, 'Username must be at least 6 characters')
//       .max(20, 'Username must not exceed 20 characters'),
//     phone: Yup.string()
//       .required('Phone is required')
//       .email('Phone is invalid'),
//     email: Yup.string()
//       .required('Email is required')
//       .email('Email is invalid'),
//     password: Yup.string()
//       .required('Password is required')
//       .min(6, 'Password must be at least 6 characters')
//       .max(40, 'Password must not exceed 40 characters'),
//     confirmPassword: Yup.string()
//       .required('Confirm Password is required')
//       .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
//     acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
//   });

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors }
//   } = useForm({
//     resolver: yupResolver(validationSchema)
//   });



//   return (
//     <Box className="background-container" >
//       {/* flexDirection="column" > */}
//       {/* <Box flexDirection="row"> */}

//       <Box
//         width="55%"
//         p="1rem 6%"
//         textAlign="center">
//         <img src="/assets/GreenRouteLogo.png" alt="GreenRoute Logo" height="125px" />
//       </Box>

//       <Box
//         width={isNonMobileScreens ? "50%" : "80%"}
//         p="2rem"
//         m="2rem auto"
//         borderRadius="1.5rem"
//         backgroundColor={theme.palette.background.alt}
//       >
//         <div className="register-form">
//           <Typography fontWeight="800" variant="h3" sx={{ mb: "1.5rem" }}>
//             Welcome to GreenRoute!
//           </Typography>
//           <Typography fontWeight="400" variant="h4" sx={{ mb: "1rem" }}>
//             Register Page
//           </Typography>

//           <form onSubmit={handleSubmit(onSubmit)}>


//             {/* // new content here */}
//             {/* First Name input */}
//             <div className="form-group">
//               <TextField
//                 label="First Name"
//                 name="firstname"
//                 type="text"
//                 fullWidth
//                 required
//                 sx={{ mt: "1rem" }}
//                 {...register('fullname')}
//                 className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
//               />
//               <div className="invalid-feedback">{errors.firstname?.message}</div>
//             </div>

//             <div className="form-group">
//               {/* Last Name input */}
//               <TextField
//                 label="Last Name"
//                 name="lastname"
//                 type="text"
//                 fullWidth
//                 required
//                 sx={{ mt: "1rem" }}
//                 {...register('lastname')}
//                 className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
//               />
//               <div className="invalid-feedback">{errors.lastname?.message}</div>
//             </div>

//             <div className="form-group">
//               {/* Phone input */}
//               <TextField
//                 label="Phone"
//                 name="phone"
//                 type="number"
//                 fullWidth
//                 required
//                 sx={{ mt: "1rem" }}
//                 {...register('phone')}
//                 className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
//               />
//               <div className="invalid-feedback">{errors.phone?.message}</div>
//             </div>

//             <div className="form-group">
//               {/* Email input */}
//               <TextField
//                 label="Email"
//                 name="email"
//                 type="email"
//                 fullWidth
//                 required
//                 sx={{ mt: "1rem" }}
//                 {...register('email')}
//                 className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//               />
//               <div className="invalid-feedback">{errors.email?.message}</div>
//             </div>


//             <div className="form-group">
//               {/* Password input */}
//               <TextField
//                 label="Password"
//                 name="password"
//                 type="password"
//                 fullWidth
//                 required
//                 sx={{ mt: "1rem" }} // Adding top margin for spacing
//                 {...register('password')}
//                 className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//               />
//               <div className="invalid-feedback">{errors.password?.message}</div>
//             </div>


//             <div className="form-group">
//               {/* Confirm Password input */}
//               <TextField
//                 label="Confirm Password"
//                 name="confirmpassword"
//                 type="password"
//                 fullWidth
//                 required
//                 sx={{ mt: "1rem", mb: "1rem", }} // Adding top margin for spacing
//                 {...register('confirmpassword')}
//                 className={`form-control ${errors.confirmpassword ? 'is-invalid' : ''}`}
//               />
//               <div className="invalid-feedback">{errors.confirmpassword?.message}</div>
//             </div>


//             <div className="form-group form-check" >
//               <input
//                 name="acceptTerms"
//                 type="checkbox"
//                 {...register('acceptTerms')}
//                 className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''
//                   }`}
//               />
//               <label htmlFor="acceptTerms" className="form-check-label">
//                 I have read and agree to the Terms
//               </label>
//               <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
//             </div>


//             <div className="form-group">
//               {/* Register Button */}
//               <Button
//                 sx={{ mt: "1rem", height: "6ev", width: "10ev", backgroundColor: "#A2FB90", color: "#000000", fontWeight: "bold", fontSize: "15px" }}
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 size="medium"
//                 onClick={handleSubmit}
//               // sx={{ mt: "2rem" }} // Adding top margin for spacing
//               >
//                 Register
//               </Button>
//             </div>
//             {/* Link to register page */}
//             <Typography sx={{ mt: "1rem", textAlign: "center" }}>
//               Already a user? <Link to="/login">Login here.</Link>
//             </Typography>
//           </form>
//         </div>

//       </Box>
//       <Box p="2rem">

//       </Box>
//       {/* </Box> */}
//     </Box>
//   );
// };


const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  picture: yup.string().required("required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  picture: "",
};

const RegisterPage = () => {
    const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isNonMobile = useMediaQuery("(min-width:600px)");

  const register = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    const savedUserResponse = await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      body: formData,
    });
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
      navigate("/auth/login");
    }
  };

  return (
    <Box className="background-container" 
           flexDirection="column" >
         {/* <Box flexDirection="row"> */}
    
        <Box
            width="55%"
            p="1rem 6%"
            textAlign="center">
            <img src="/assets/GreenRouteLogo.png" alt="GreenRoute Logo" height="125px" />
          </Box>
    
          <Box
            width={isNonMobileScreens ? "50%" : "93%"}
            p="2rem"
            m="2rem auto"
            borderRadius="1.5rem"
            backgroundColor={theme.palette.background.alt}
          >
    <Formik
      onSubmit={register}
      initialValues={initialValues}
      validationSchema={registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobileScreens ? undefined : "span 4" },
            }}
          >
            <TextField
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
              error={Boolean(touched.firstName) && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              error={Boolean(touched.lastName) && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              sx={{ gridColumn: "span 2" }}
            />
            <Box
              gridColumn="span 4"
              border={`1.5px solid ${palette.neutral.medium}`}
              borderRadius="5px"
              p="1rem"
            >
              <Dropzone
                acceptedFiles=".jpg,.jpeg,.png"
                multiple={false}
                onDrop={(acceptedFiles) =>
                  setFieldValue("picture", acceptedFiles[0])
                }
              >
                {({ getRootProps, getInputProps }) => (
                  <Box
                    {...getRootProps()}
                    border={`2px dashed ${palette.primary.main}`}
                    p="1rem"
                    sx={{ "&:hover": { cursor: "pointer" } }}
                  >
                    <input {...getInputProps()} />
                    {!values.picture ? (
                      <p>Add Picture Here</p>
                    ) : (
                      <FlexBetween>
                        <Typography>{values.picture.name}</Typography>
                        <EditOutlinedIcon />
                      </FlexBetween>
                    )}
                  </Box>
                )}
              </Dropzone>
            </Box>

            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>

          {/* BUTTONS */}
          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: palette.primary.main,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}
            >
              REGISTER
            </Button>
            <Typography
              onClick={() => {
                navigate("/auth/login");
                resetForm();
              }}
              sx={{
                textDecoration: "underline",
                color: palette.primary.main,
                "&:hover": {
                  cursor: "pointer",
                  color: palette.primary.light,
                },
              }}
            >
              Already have an account? Login here.
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
    </Box>
    </Box>
  );
};


export default RegisterPage;