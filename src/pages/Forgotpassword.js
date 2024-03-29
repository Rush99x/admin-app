
import React from "react";
import CustomInput from "../components/CustomInput";

const Forgotpassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <div className="my-5 mx-2 mx-md-auto p-4 bg-white rounded-3" style={{ maxWidth: "400px" }}>
        <h3 className="text-center title">Forgot Password</h3>
        <p className="text-center">Please enter your register email to get reset password mail</p>
        <form>
          <CustomInput type="password" label="Email Address" id="email" />
         
          <br />
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Send Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;
