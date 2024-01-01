// import React from "react";
// import CustomInput from "../components/CustomInput";

// const Login = () => {
//   return(
//   <div className="py-5" style={{ background: "#ffd333", minHeight:"100vh"}}>
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
//       <h3 className="text-center">Login</h3>
//       <p className="text-center">Login to your account continue.</p>
//       <form action="">
//       <CustomInput type="text" placeholder="Email Address" id="email" />
//       <CustomInput type="'password" placeholder="Password" id="pass"/>
//       <br/>
//         <button className="border-0 px-3 py-2 text-white fw-blod w-100"
//         style={{background: "#ffd333" }}
//         type="submit">
//           Login
//         </button>
//       </form>
//     </div>
//   </div>
//   );
// };
 
// export default Login;


import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <div className="my-5 mx-2 mx-md-auto p-4 bg-white rounded-3" style={{ maxWidth: "400px" }}>
        <h3 className="text-center title">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <form action="">
          <CustomInput type="text" label="Email Address" id="email" />
          <CustomInput type="password" label="Password" id="pass" />
          <br />
          <div className="mb-3 text-end">
            <Link to='/forgot-password'>Forgot Passowrd?</Link>
          </div>
          <Link to="/admin"
          className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none"
          style={{ background:"#ffd333"}}
          type="submit">
          

          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Login
          </button>
          </Link>


        </form>
      </div>
    </div>
  );
};

export default Login;
