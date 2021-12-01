import { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TodoInsert = ({ onInsert }) => {
  const [values, setValues] = useState({
    category: "",
    text: "",
  });
  const [startDate, setStartDate] = useState(new Date());

  const onChange = useCallback(
    (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
    [values]
  );

  const onSubmit = useCallback(
    (e) => {
      if (values.text === "") {
        alert("할 일을 입력하세요");
      } else if (values.category === "") {
        alert("카테고리를 입력하세요");
      } else {
        //console.log(startDate);
        const date =
          startDate.getFullYear().toString() +
          `/` +
          (startDate.getMonth() + 1).toString() +
          `/` +
          startDate.getDate().toString();
        onInsert(values.category, values.text, date);

        setValues({
          category: "",
          text: "",
          date: new Date(),
        });
      }

      e.preventDefault();
    },
    [onInsert, values, startDate]
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
        <DatePicker
          placeholderText="날짜를 선택하세요"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy/MM/dd"
        />
      </div>

      <button>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
