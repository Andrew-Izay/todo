import { Form } from "./Components/Form";
import { Main } from "./Components/Main";
import "./App.css";
import { useState } from "react";
const saveToLocalStorage = (content) =>
  localStorage.setItem("contentKey", JSON.stringify(content));
const readToLocalStorage = () => {
  const date = localStorage.contentKey
    ? JSON.parse(localStorage.getItem("contentKey"))
    : [];
  return date.map((item) => ({ ...item, date: new Date(item.date) }));
};
function App() {
  const [content, setContent] = useState(readToLocalStorage());
  const handlerCreate = (e) => {
    e.preventDefault();
    const formContent = new FormData(e.currentTarget);
    const todos = {
      text: formContent.get("textContent"),
      isDone: false,
      date: new Date(),
    };
    setContent((prev) => {
      const newContent = [todos, ...prev];
      saveToLocalStorage(newContent);
      return newContent;
    });
    e.currentTarget.reset();
  };
  const handlerDel = (id) => {
    setContent((prev) => {
      const newContent = [...prev].filter((_, index) => id !== index);
      saveToLocalStorage(newContent);
      return newContent;
    });
  };
  const handlerDone = (id) => {
    setContent((prev) => {
      const newContent = prev.map((el, index) =>
        id === index ? { ...el, isDone: !el.isDone } : el
      );
      saveToLocalStorage(newContent);
      return newContent;
    });
  };
  return (
    <div className="App">
      <Form newContent={handlerCreate}></Form>
      {content.map((el, index) => {
        return (
          <Main
            key={index}
            content={el.text}
            date={el.date.toLocaleTimeString()}
            del={() => handlerDel(index)}
            done={el.isDone}
            isDones={() => handlerDone(index)}
          ></Main>
        );
      })}
    </div>
  );
}
export default App;
