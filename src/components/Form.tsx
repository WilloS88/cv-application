import { useState, useEffect } from "react";
import { Container } from "./Container";
import { InputBox } from "./InputBox";
import { ClearButton } from "./Buttons/ClearButton";
import { LoadExampleButton } from "./Buttons/LoadExampleButton";
import { HeaderOutputSection } from "./HeaderOutputSection";
import data from "../data/exampleData";

export const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [adress, setAdress] = useState("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNum(e.target.value);
  };

  const handleAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdress(e.target.value);
  };

  const clearData = () => {
    setFullName("");
    setEmail("");
    setPhoneNum("");
    setAdress("");
  };

  const loadData = () => {
    setFullName(data[0].fullName);
    setEmail(data[0].email);
    setPhoneNum(data[0].phoneNumber);
    setAdress(data[0].address);
  };

  useEffect(() => {}, []);

  return (
    <div className="flex justify-center items-center bg-slate-500 p-40 gap-5 rounded-md">
      <Container>
        <div className="flex gap-5 py-2 px-4">
          <ClearButton clearData={clearData} />
          <div>
            <LoadExampleButton onClick={loadData} />
          </div>
        </div>
        <div>
          <h2>Personal Details</h2>
        </div>
        <InputBox
          heading="Full Name"
          value={fullName}
          onChange={handleName}
          placeholderText="First and last name"
        />
        <InputBox
          heading="Email"
          value={email}
          onChange={handleEmail}
          placeholderText="Enter email"
        />
        <InputBox
          heading="Phone number"
          value={phoneNum}
          onChange={handlePhoneNum}
          placeholderText="Enter phone number"
        />
        <InputBox
          heading="Adress"
          value={adress}
          onChange={handleAdress}
          placeholderText="City, Country"
        />
      </Container>
      <Container>
        <HeaderOutputSection
          fullName={fullName}
          email={email}
          phoneNum={phoneNum}
          adress={adress}
        />
      </Container>
    </div>
  );
};
