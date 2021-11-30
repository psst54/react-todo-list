import { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [values, setValues] = useState({
    category: "",
    text: "",
  });

  const onChange = useCallback(
    (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
    [values]
  );

  const onSubmit = useCallback(
    (e) => {
      if (values.text === "") {
        alert("텍스트를 입력하세요");
      } else if (values.category === "") {
        alert("카테고리를 입력하세요");
      } else {
        onInsert(values.category, values.text);
        setValues({
          category: "",
          text: "",
        });
      }

      e.preventDefault();
    },
    [onInsert, values]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <div>
        <input
          placeholder="카테고리를 입력하세요"
          value={values.category}
          name="category"
          onChange={onChange}
        />
        <input
          placeholder="할 일을 입력하세요"
          value={values.text}
          name="text"
          onChange={onChange}
        />
      </div>

      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
