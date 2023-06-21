import styled from "styled-components";

const MainContent = styled.div`
  width: 400px;
  background-color: ${(props) => (props.check ? "#6dcc7c" : "#c56d6d")};
  padding: 30px;
  border-radius: 20px;
  margin: 10px auto 10px auto;
  font-size: 25px;
  word-break: break-all;
  font-family: "Times New Roman";
  height: fit-content;
`;
const BtnMain = styled.div`
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

const BtnDel = styled.button`
  background-color: #e78216;
  border: none;
  cursor: pointer;
  border-radius: 7px;
`;
const DateMain = styled.div`
  font-size: 20px;
  flex-grow: 3;
`;

const IsDone = styled.button`
  background-color: #e78216;
  border: none;
  cursor: pointer;
  border-radius: 7px;
`;
export const Main = ({ content, date, del, done, isDones }) => {
  return (
    <MainContent check={done}>
      {content}
      <BtnMain>
        <DateMain>{date}</DateMain>
        <IsDone onClick={isDones}>{done ? "Done" : "Not done"}</IsDone>
        <BtnDel onClick={del}>del</BtnDel>
      </BtnMain>
    </MainContent>
  );
};
