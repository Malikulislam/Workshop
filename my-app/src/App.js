import logo from "./logo.svg";
import "./App.css";
import { useState,useEffect } from "react";

function App() {
  const data = localStorage.getItem("studentRecord");
  console.log(data);

  const [name, setName] = useState("");
  const [mobileNumber, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [eNumber, setENumber] = useState("");
  const [Dob,setDob]=useState("");
  const [address,setaddress]=useState("");
  const [studentsRecords, setStudent] = useState([]);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const validateName = () => {
    if (name === '') {
      return "*"
      
    }
    return '';
  };
  const validateEmail = () => {
    if (email === '') {
      return '*';
    }
    return '';
  };
  const validatePhone = () => {
    if (mobileNumber === '') {
      return '*';
    }
    return '';
  };
  const onSubmit = (event) => {
    let jsonData = {
      name: name,
      mobile: mobileNumber,
      email: email,
      eNumber: eNumber,
      Dob:Dob,
      address:address
    };
    event.preventDefault();
    const nameError = validateName();
    const emailError = validateEmail();
    const phoneError = validatePhone();
    if (nameError || emailError || phoneError) {
      setNameError(nameError);
      setEmailError(emailError);
      setPhoneError(phoneError);
      return;
    }
    
    studentsRecords.push(jsonData);
    setStudent(studentsRecords);
  };
  useEffect(() => {
    const nameError = validateName();
  const emailError = validateEmail();
  const phoneError = validatePhone();
  setNameError(nameError);
  setEmailError(emailError);
  setPhoneError(phoneError);
}, [name, email, mobileNumber]);


  return (
    <div className="App">
      <header className="App-header">
        <p>
          <div>
            <label>
              Student Name :
              <input value={name} onChange={(e) => setName(e.target.value)} required />
              {nameError && <div>{nameError}</div>}
            </label>{" "}
          </div>
          <br></br>
          <div>
            <label>
              Student Phone Number :
              <input
                value={mobileNumber}
                onChange={(e) => setMobile(e.target.value)} required
              />
              {phoneError && <div>{phoneError}</div>}
            </label>{" "}
          </div>
          <br></br>
          <div>
            <label>
              Student Email :
              <input value={email} onChange={(e) => setEmail(e.target.value)} required/>
              {emailError && <div>{emailError}</div>}
            </label>{" "}
          </div>
          <br></br>
          <div>
            <label></label>
            {"Student En. Number "}
            <input
              value={eNumber}
              onChange={(e) => setENumber(e.target.value)}
            />
          </div>
          <br></br>
          <div>
            <label>
              Student DOB :
              <input value={Dob} onChange={(e) => setDob(e.target.value)} />
            </label>{" "}
          </div>
          <br></br>
          <div>
            <label>
              Student Address :
              <input value={address} onChange={(e) => setaddress(e.target.value)} />
            </label>{" "}
          </div>
          <br></br>
          <br></br>
          <div>
            <button onClick={onSubmit}>submit</button>
          </div>

          <br></br>
          
          <div>
            <table>
              <thead>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>email</th>
                <th>En No.</th>
                <th>DOB</th>
                <th>Address</th>
              </tr>
              </thead>
              <tbody>
              {studentsRecords.map((val, key) => (
                
                  <tr key={key}>
                    <td>{val.name}</td>
                    <td>{val.mobile}</td>
                    <td>{val.email}</td>
                    <td>{val.eNumber}</td>
                    <td>{val.Dob}</td>
                    <td>{val.address}</td>
                  </tr>
                
              ))}
              </tbody>

            </table>
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;