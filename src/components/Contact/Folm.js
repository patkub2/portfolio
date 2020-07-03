import React from "react";
import styled from "styled-components";
import mail from "../../img/mail.png";

const FormContainer = styled.div`
  form {
    /* border: 1px solid green; /* green*/
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

const Submit = styled.button`
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

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Folm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { email, message } = this.state;
    return (
      <FormContainer>
        <form onSubmit={this.handleSubmit}>
          <Mail
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder={this.props.emailplaceholder}
          />

          <Message
            placeholder={this.props.messageplaceholder}
            name="message"
            value={message}
            onChange={this.handleChange}
          />

          <Submit type="submit">{this.props.submitplaceholder}</Submit>
        </form>
      </FormContainer>
    );
  }
}
export default Folm;
