import React, { useState } from "react";
import styled from "styled-components";
import mail from "../../img/mail.png";
import { useForm } from "react-hook-form";

const FormContainer = styled.div`
  form {
    /*border: 1px solid green; /* green*/
    margin: 0px;
    min-height: 450px;
    width: 600px;
    background-color: ${({ theme }) => theme.colors.darker};
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;

    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }
`;

const Mail = styled.input`
  color: white;
  width: 90%;
  padding: 12px 20px;
  margin: 8px 0;
  height: 40px;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  outline: none;
  background-color: ${({ theme }) => theme.colors.dark};
  background-image: url(${mail});
  background-size: 25px;
  background-position: 10px 7px;
  background-repeat: no-repeat;
  padding-left: 50px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.family.main};
  }
`;

const Message = styled.textarea`
  color: white;
  width: 90%;
  padding: 12px 12px;
  margin: 8px 0;
  height: 300px;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  resize: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.dark};
  ::placeholder {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.family.main};
  }
  ::value {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.family.main};
  }
`;

const Submit = styled.input`
  background-color: ${({ theme }) => theme.colors.darker};
  color: white;
  border: 2px solid ${({ theme }) => theme.colors.orange};
  outline: none;
  padding: 15px 0px;
  width: 150px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 40px;
  cursor: pointer;
`;

function Form(p) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => set(data);
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const set = (data) => {
    setEmail(data.mail);
    setMessage(data.message);
    handleSubmitt();
  };

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const handleSubmitt = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", email, message }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  };

  //  const handleSubmitt = (e) => {
  //    const data = { "form-name": "contact", email, message };
  //
  //    fetch("/", {
  //      method: "POST",
  //      // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
  //      body: encode(data),
  //    })
  //      .then(() => setStatus("Form Submission Successful!!"))
  //      .catch((error) => setStatus("Form Submission Failed!"));
  //
  //    e.preventDefault();
  //  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Mail
          name="mail"
          type="email"
          ref={register}
          placeholder={p.emailplaceholder}
        />
        <Message
          placeholder={p.messageplaceholder}
          name="message"
          ref={register}
          required
        ></Message>

        <Submit type="submit" value={p.submitplaceholder} />
      </form>
      <h3>{status}</h3>
    </FormContainer>
  );
}

export default Form;
