import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";
import { Link, useNavigate } from "react-router-dom";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/user/activation`, {
            activation_token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            setError(true);
          });
      };
      sendRequest();
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Tokeni juaj ka skaduar!</p>
      ) : (
        <div>
          <p>Llogaria juaj eshte krijuar me sukses!</p>
          <br/>
          <p className="text-center"><Link className="text-blue-950 font-black" to="/login">Login</Link></p>
        </div>
      )}
    </div>
  );
};

export default ActivationPage;
