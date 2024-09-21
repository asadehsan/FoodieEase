// import React, { useState } from "react";
// import { Link,useNavigate } from "react-router-dom";

// export default function Login() {
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });
// let navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("https://foodieease-backend.onrender.com/api/loginuser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: credentials.email,
//         password: credentials.password,
//       }),
//     });
//     const json = await response.json();
//     console.log(json);

//     if (json.success) {
//       localStorage.setItem("userEmail",credentials.email);
//       localStorage.setItem("authToken",json.authToken);
//       console.log(localStorage.getItem("authToken"))
//       navigate("/");
//       // console.log("Inserted values:", JSON.stringify(credentials));
//     } else {
//       alert("Enter Valid Credentials");
//     }
//   };

//   const onChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   };
//   return (
//     <div>
//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               name="email"
//               value={credentials.email}
//               onChange={onChange}
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//             <div id="emailHelp" className="form-text">
//               We'll never share your email with anyone else.
//             </div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               value={credentials.password}
//               onChange={onChange}
//               id="exampleInputPassword1"
//             />
//           </div>

//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//           <Link to="/createuser" className="m-3 btn btn-danger">
//             I'm a new User
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://foodieease-backend.onrender.com/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    } else {
      alert("Enter Valid Credentials");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <style>
        {`
          /* Basic reset for form elements */
          input, button {
            border: none;
            outline: none;
            padding: 0;
            margin: 0;
          }

          /* Container styling */
          .login-container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-color: #333;
          }

          .login-form {
            background-color: #444;
            color: #fff;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            width: 100%;
            max-width: 400px;
          }

          /* Title styling */
          .login-title {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
          }

          /* Form group styling */
          .form-group {
            margin-bottom: 1.5rem;
          }

          .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-size: 1rem;
            font-weight: bold;
          }

          .form-input {
            width: 100%;
            padding: 0.75rem;
            border-radius: 4px;
            background-color: #555;
            color: #fff;
            border: 1px solid #666;
          }

          .form-input:focus {
            border-color: #007bff;
            box-shadow: 0 0 0 1px #007bff;
            outline: none;
          }

          .form-text {
            font-size: 0.875rem;
            color: #aaa;
          }

          /* Button styling */
          .submit-button {
            width: 100%;
            padding: 0.75rem;
            background-color: #007bff;
            color: #fff;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
            transition: background-color 0.3s;
          }

          .submit-button:hover {
            background-color: #0056b3;
          }

          /* Link styling */
          .signup-link {
            display: block;
            text-align: center;
            margin-top: 1rem;
            color: #007bff;
            text-decoration: none;
          }

          .signup-link:hover {
            text-decoration: underline;
          }

          /* Responsive styling */
          @media (max-width: 600px) {
            .login-form {
              padding: 1rem;
            }

            .login-title {
              font-size: 1.25rem;
            }
          }
        `}
      </style>
      <div className="login-container">
        <div className="login-form">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={onChange}
                className="form-input"
              />
              <p className="form-text">
                We'll never share your email with anyone else.
              </p>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={onChange}
                className="form-input"
              />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
            <Link to="/createuser" className="signup-link">
              I'm a new User
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
