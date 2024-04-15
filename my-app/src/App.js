import "./App.css";
import React, { useState } from "react";

function App() {
  const [inputarr, setInputarr] = useState([]);
  const [inputData, setinputData] = useState({
    sname: "",
    phoneNo: "",
    email: "",
    enno: "",
    address: ""
  });
  function handlechange(e) {

    const value = e.target.value;
    if (e.target.name === 'sname') {
      const regex = /^[a-zA-Z ]+$/;
      if (!regex.test(value)) {
        return;
      }
    }
    setinputData({ ...inputData, [e.target.name]: value });
  }
  let { sname, phoneNo, email, enno, address } = inputData;
  function handleSubmit() {

    if (sname === '' || phoneNo === '' || email === '' || enno === '' || address === '') {
      alert('Please fill all data');
      return false;
    }
    if (sname.length > 20) {
      alert("Name is too long")
      return
    }
    if (phoneNo.length !== 10) {
      alert("Phone number with 10 digits only");
      return false;
    }
    if (email.length > 50) {
      alert("Email is too long")
    }
    const existingEnno = inputarr.find(data => data.enno === enno);
    if (existingEnno) {
      alert('Enrollment number already exists');
      return false;
    }
    setInputarr([...inputarr, { sname, phoneNo, email, enno, address }]);
    console.log(inputarr);
    console.log(inputData);
    setinputData({ sname: '', phoneNo: '', email: '', enno: '', address: '' });
  }

  return (
    <div className="App">
      <div className="container">
      <h1>Student Registration</h1>
        <label>Student Name: </label>
        <input type="text" name="sname" autoComplete='off' value={inputData.sname} onChange={handlechange} placeholder="Enter Student Name" required />

        <br /><br />
        <label>Student PhoneNo: </label>
        <input type="number" name="phoneNo" autoComplete='off' value={inputData.phoneNo} onChange={handlechange} placeholder="Enter Student Phone Number" required />
        <br /><br />
        <label>Student Email: </label>
        <input type="text" name="email" autoComplete="off" value={inputData.email} onChange={handlechange} placeholder="Enter Email" required />
        <br /><br />
        <label>Student Enrollment No: </label>
        <input type="text" name="enno" autoComplete="off" value={inputData.enno} onChange={handlechange} placeholder="Enter Enrollment No" required />
        <br /><br />
        <label>Student Address: </label>
        <input type="text" name="address" autoComplete="off" value={inputData.address} onChange={handlechange} placeholder="Enter Address" required />
        <br /><br />
      </div>
      <button onClick={handleSubmit}>Submit</button><br /><br />


      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>PhoneNo</th>
            <th>EmailId</th>
            <th>En No.</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {inputarr.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.sname}</td>
                <td>{data.phoneNo}</td>
                <td>{data.email}</td>
                <td>{data.enno}</td>
                <td>{data.address}</td>
              </tr>
            )
          })
          }
        </tbody>
      </table>

    </div>
  );
}

export default App;
