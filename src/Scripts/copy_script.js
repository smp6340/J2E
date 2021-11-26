import React from "react";

export default function Copy_Text() {
    const doCopy = text => {
        if (!document.queryCommandSupported("copy")) {
          return alert("복사하기가 지원되지 않는 브라우저입니다.");
        }
    
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.top = 0;
        textarea.style.left = 0;
        textarea.style.position = "fixed";
    
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("클립보드에 복사되었습니다.");
      };
    
      return (
        <button onClick={() => doCopy("복사할텍스트입니다!")}>복사하기</button>
      );
}