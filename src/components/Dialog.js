import React from "react";
import "./Dialog.scss";
import Button from "./Button";

function Dialog({ onCancel, onConfirm }) {
  return (
    <div className="DarkBackground">
      <div className="DialogBlock">
        <h3>정말 삭제하시겠습니까?</h3>
        <p>삭제하면 다시 되돌릴 수 없습니다.</p>
        <div className="ButtonGroup">
          <Button onClick={onCancel}>{"취소"}</Button>
          <Button onClick={onConfirm}>{"삭제"}</Button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
