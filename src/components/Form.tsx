import { useState, useEffect } from "react";
import { Container } from "./Container";
//import { InputBox } from "./InputBox"

export const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [adress, setAdress] = useState("");



  const handleName = (e) => {
    setFullName(e.target.value)    
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)    
  }

  const handlePhoneNum = (e) => {
    setPhoneNum(e.target.value)    
  }

  const handleAdress = (e) => {
    setAdress(e.target.value)    
  }

  useEffect(() => {}, []);

  return (
    <div className="flex justify-center items-center bg-slate-500 p-40 gap-5 rounded-md">
      
      <Container >
        <div>
          <h2>Personal Details</h2>
        </div>
        
        <div className="flex-col">
          <h2>Full Name</h2>
          <input type="text" value={fullName} onChange={handleName} placeholder="First and last name"/>
        </div>
        <div className="flex-col">
          <h2>Email</h2>
          <input type="text" value={email} onChange={handleEmail} placeholder="Enter email"/>
        </div>
        <div className="flex-col">
          <h2>Phone Number</h2>
          <input type="text" value={phoneNum} onChange={handlePhoneNum} placeholder="Enter phone number"/>
        </div>
        <div className="flex-col">
          <h2>Adress</h2>
          <input type="text" value={adress} onChange={handleAdress} placeholder="City, Country"/>
        </div>
      </Container>
      <Container >
        <div>{fullName}</div>
        <div>{email}</div>
        <div>{phoneNum}</div>
        <div>{adress}</div>
      </Container>
    </div>
  );
};
