// import React, { useEffect } from "react";
// import CustomInput from "../components/CustomInput";
// import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../features/auth/authSlice";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   let schema = Yup.object().shape({
//     email: Yup.string()
//       .email("Email should be valid")
//       .required("Email is required"),
//     password: Yup.string().required("Password is Required"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: schema,
//     onSubmit: (values) => {
//       dispatch(login(values));
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   // const { user, isLoading, isError, isSuccess, message } = useSelector(
//   //   (state) => state.auth
//   // );

//   const authState = useSelector((state) => state);

//   const {user, isError, isSuccess, isLoading, message} = authState.auth;

//   useEffect(() => {
//     if (isSuccess){
//       navigate("admin");
//     }else{
//       navigate("");
//     }
//   }, [user, isLoading, isError, isSuccess, message]);
//   return (
//     <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
//       <div
//         className="my-5 mx-2 mx-md-auto p-4 bg-white rounded-3"
//         style={{ maxWidth: "400px" }}
//       >
//         <h3 className="text-center title">Login</h3>
//         <p className="text-center">Login to your account to continue.</p>
//         <div>
//           {message.message == "Rejected" ? "You are not an Admin": ""}
//         </div>
//         <form action="" onSubmit={formik.handleSubmit}>
//           <CustomInput
//             type="text"
//             name="email"
//             label="Email Address"
//             id="email"
//             val={formik.values.email}
//             onCh={formik.handleChange("email")}
//           />
//           <div className="error">
//             {formik.touched.email && formik.errors.email ? (
//               <div>{formik.errors.email}</div>
//             ) : null}
//           </div>
//           <CustomInput
//             type="password"
//             name="password"
//             label="Password"
//             id="pass"
//             val={formik.values.password}
//             onCh={formik.handleChange("password")}
//           />
//           <div className="error">
//             {formik.touched.password && formik.errors.password ? (
//               <div>{formik.errors.password}</div>
//             ) : null}
//           </div>
//           <br />
//           <div className="mb-3 text-end">
//             <Link to="/forgot-password">Forgot Passowrd?</Link>
//           </div>
//           <button
//             className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none"
//             style={{ background: "#ffd333" }}
//             type="submit"
//           >
//             <button
//               className="border-0 px-3 py-2 text-white fw-bold w-100"
//               style={{ background: "#ffd333" }}
//               type="submit"
//             >
//               Login
//             </button>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";

let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  const authState = useSelector((state) => state);

  const { user, isError, isSuccess, isLoading, message } = authState.auth;

  useEffect(() => {
    if (isSuccess) {
      navigate("admin");
    } else {
      navigate("");
    }
  }, [user, isError, isSuccess, isLoading]);
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <div className="error text-center">
          {message.message == "Rejected" ? "You are not an Admin" : ""}
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Email Address"
            id="email"
            name="email"
            onChng={formik.handleChange("email")}
            onBlr={formik.handleBlur("email")}
            val={formik.values.email}
          />
          <div className="error mt-2">
            {formik.touched.email && formik.errors.email}
          </div>
          <CustomInput
            type="password"
            label="Password"
            id="pass"
            name="password"
            onChng={formik.handleChange("password")}
            onBlr={formik.handleBlur("password")}
            val={formik.values.password}
          />
          <div className="error mt-2">
            {formik.touched.password && formik.errors.password}
          </div>
          <div className="mb-3 text-end">
            <Link to="forgot-password" className="">
              Forgot Password?
            </Link>
          </div>
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;



