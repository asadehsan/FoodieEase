// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// export default function Signup() {
//   const [credentials, setCredentials] = useState({
//     name: '',
//     email: '',
//     password: '',
//     geolocation: '',
//   });

//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('https://foodieease-backend.onrender.com/api/createuser', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name: credentials.name,
//         email: credentials.email,
//         password: credentials.password,
//         location: credentials.geolocation,
//       }),
//     });
//     const json = await response.json();
//     console.log(json);

//     if (json.success) {
//       console.log('Inserted values:', JSON.stringify(credentials));
//       navigate('/login'); // Redirect to login page on successful signup
//     } else {
//       alert('Enter Valid Credentials');
//     }
//   };

//   const onChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   };

//   return (
//     <>
//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">
//               Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               value={credentials.name}
//               onChange={onChange}
//             />
//           </div>
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
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Address
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="geolocation"
//               value={credentials.geolocation}
//               onChange={onChange}
//               id="exampleInputPassword1"
//             />
//           </div>

//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//           <Link to="/login" className="m-3 btn btn-danger">
//             Already a User
//           </Link>
//         </form>
//       </div>
//     </>
//   );
// }



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// export default function Signup() {
//   const [credentials, setCredentials] = useState({
//     name: '',
//     email: '',
//     password: '',
//     geolocation: '',
//   });

//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://foodieease-backend.onrender.com/api/createuser', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: credentials.name,
//           email: credentials.email,
//           password: credentials.password,
//           location: credentials.geolocation,
//         }),
//       });
  
//       const json = await response.json();
//       console.log('Server response:', json);
  
//       if (json.success) {
//         console.log('Signup successful:', JSON.stringify(credentials));
//         navigate('/login');
//       } else {
//         if (json.errors && Array.isArray(json.errors)) {
//           const errorMessages = json.errors.map(error => error.msg);
//           console.log('Error messages:', errorMessages);
//           alert(errorMessages.join('\n'));
//         } else {
//           console.log('Unexpected error format:', json);
//           alert('An error occurred during signup. Please check your input and try again.');
//         }
//       }
//     } catch (error) {
//       console.error('Error during signup:', error);
//       alert('An error occurred during signup. Please try again.');
//     }
//   };

//   const onChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   };

//   return (
//     <>
//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">
//               Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               value={credentials.name}
//               onChange={onChange}
//             />
//           </div>
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
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Address
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="geolocation"
//               value={credentials.geolocation}
//               onChange={onChange}
//               id="exampleInputPassword1"
//             />
//           </div>

//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//           <Link to="/login" className="m-3 btn btn-danger">
//             Already a User
//           </Link>
//         </form>
//       </div>
//     </>
//   );
// }


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    geolocation: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://foodieease-backend.onrender.com/api/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation,
        }),
      });
  
      const json = await response.json();
      console.log('Server response:', json);
  
      if (json.success) {
        console.log('Signup successful:', JSON.stringify(credentials));
        navigate('/login');
      } else {
        if (json.errors && Array.isArray(json.errors)) {
          const errorMessages = json.errors.map(error => error.msg);
          console.log('Error messages:', errorMessages);
          alert(errorMessages.join('\n'));
        } else {
          console.log('Unexpected error format:', json);
          alert('An error occurred during signup. Please check your input and try again.');
        }
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred during signup. Please try again.');
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
          .signup-container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-color: #333;
          }

          .signup-form {
            background-color: #444;
            color: #fff;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            width: 100%;
            max-width: 400px;
          }

          /* Title styling */
          .signup-title {
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
          .login-link {
            display: block;
            text-align: center;
            margin-top: 1rem;
            color: #007bff;
            text-decoration: none;
          }

          .login-link:hover {
            text-decoration: underline;
          }

          /* Responsive styling */
          @media (max-width: 600px) {
            .signup-form {
              padding: 1rem;
            }

            .signup-title {
              font-size: 1.25rem;
            }
          }
        `}
      </style>
      <div className="signup-container">
        <div className="signup-form">
          <h2 className="signup-title">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={credentials.name}
                onChange={onChange}
                className="form-input"
              />
            </div>
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
            <div className="form-group">
              <label htmlFor="geolocation" className="form-label">
                Address
              </label>
              <input
                type="text"
                id="geolocation"
                name="geolocation"
                value={credentials.geolocation}
                onChange={onChange}
                className="form-input"
              />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
            <Link to="/login" className="login-link">
              Already a User?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
