import styled from "styled-components";

const Button = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 1px;
  font-size: 12px;
  padding: 5px 10px;
  width: 100px;
  margin-right: 10px;
  text-align: center;
  transition: 0.3s;
  text-decoration: none;
  cursor: pointer;
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export default Button;
