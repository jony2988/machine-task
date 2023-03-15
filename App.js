import React, { useState } from 'react';
import './App.css';
import { Form } from 'react-bootstrap';
function App() {
  let [fname, setFname] = useState('');
  let [show, setShow] = useState('');

  let [lname, setLname] = useState('');
  let [showlname, setShowlname] = useState('');

  let [mail, setMail] = useState('');
  let [showmail, setShowmail] = useState('');

  let [dob, setDob] = useState('');
  let [showdob, setShowdob] = useState('');

  let [number, setNumber] = useState('');
  let [showNumber, setShowNumber] = useState('');

  let [password, setPassword] = useState('');
  let [showpassword, setShowpassword] = useState('');


  let onSubmits = (event) => {
    event.preventDefault();
    setShow(fname);
    setShowlname(lname);
    setShowmail(mail);
    setShowdob(dob);
    setShowNumber(number);
    setShowpassword(password);
  }


  let firstName = (event) => { setFname(event.target.value); }
  let lastName = (event) => { setLname(event.target.value); }
  let Email = (event) => { setMail(event.target.value); }
  let Dateofbirth = (event) => { setDob(event.target.value); }
  let PhoneNumber = (event) => { setNumber(event.target.value); }
  let mainPassword = (event) => { setPassword(event.target.value); }
  return (
    <>
      <div>
        <h1 id='had' className='text-center fw-light my-5 text-dark'> Form With React Js</h1>

      </div>
      <div className=''>
        <Form className='p-4' onSubmit={onSubmits}>
          {/* FIRST NAME */}
          <input placeholder='First name' value={fname} onChange={firstName} className='form-control ' id='fname' style={{ float: 'left' }} required />
          {/* LAST NAME  */}
          <input placeholder='Last name' value={lname} onChange={lastName} className='form-control ms-1' id='lname' style={{ float: 'right' }} required /><br /><br /><br />
          {/* EMAIL  */}
          <input placeholder='Email Address' value={mail} onChange={Email} className='form-control' type={'email'} required /><br />
          {/* DATE OF BIRTH  */}
          <label className='text-dark fw-semibold ms-2'>Date of Birth:</label>
          <input placeholder='Date of Birth' value={dob} onChange={Dateofbirth} className='form-control ' type={'date'} required /><br />
          {/* Gender  */}
          <label className=' ms-2 text-dark fw-semibold ' htmlFor='gender'>Gender</label>&nbsp;&nbsp;&nbsp;&nbsp;

          <input type={'radio'} name='gender' className='form-check-input' required />&nbsp;<label className=' ms-2 text-dark '>Male</label>&nbsp;&nbsp;

          <input type={'radio'} name='gender' className='form-check-input' required />&nbsp;<label className=' ms-2 text-dark'>Female</label>&nbsp;&nbsp;

          {/* <input type={'radio'} name='gender' className='form-check-input' required />&nbsp;<label className=' ms-2 text-dark '>Other</label> */}
          <br /><br />
          {/* PHONE NUMBER  */}
          <input placeholder='Phone Number' value={number} onChange={PhoneNumber} className='form-control' type={'number'} required /><br />
          {/* PASSWORD  */}
          <input placeholder='Password' value={password} onChange={mainPassword} className='form-control ' type={'password'} required /><br />

          <button className='btn btn-secondary w-50 p-2 ' type='submit' > Save </button>
        </Form>
      </div>


      {/* THIS WILL SHOW THE RESULT ON WINDOW */}

      <div id='show' className='text-center my-3 text-dark p-5'>
        <h1>RESULT</h1><br></br>
        <div className='text-center  p-2 text-success'>
        <h1>{show}&nbsp;{showlname}</h1>
        <h3>{showmail}</h3>
        <h3>{showdob}</h3>
        <h3>{showNumber}</h3>
        <h3>{showpassword}</h3>
      </div>
      </div>

    </>
  )
}
export default App;