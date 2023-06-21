import styled from "styled-components";
const Header = styled.div``;
const Forma = styled.form`
  margin: 70px auto 10px auto;
  width: 400px;
  background-color: rgba(103, 173, 245, 0.6);
  padding: 30px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  font-size: 20px;
`;

const BtnCreate = styled.button`
  border: none;
  padding: 10px;
  border-radius: 10px;
  background-color: #43dcfa;
  cursor: pointer;
  :hover {
    background-color: #3896e3;
  }
  font-size: 20px;
`;
const BrnSort = styled.button`
  border: none;
  padding: 10px;
  border-radius: 10px;
  background-color: #43dcfa;
  cursor: pointer;
  :hover {
    background-color: #3896e3;
  }
  font-size: 20px;
`;
export const Form = ({ newContent, sort }) => {
  return (
    <Header>
      <Forma onSubmit={newContent}>
        <Input type="text" placeholder="Write..." name="textContent" />
        <BtnCreate>Add</BtnCreate>
      </Forma>
    </Header>
  );
};
