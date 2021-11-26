import React, { useState } from 'react';
import * as H from "./Styled/HeaderStyle";
import LogoImg from "./imgs/Logo.png";
import axios from 'axios'
import {CopyToClipboard} from 'react-copy-to-clipboard';

function App() {

  const [result, setResult] = useState();
  const [input, setInput] = useState();
 
  const translate = () => {
    axios.post('http://192.168.8.103:8080/test/', {text : input})
      .then(res => setResult(res.data))
      .catch(err => alert("에러"))
  }
  return (
    <>
    <H.Header>
      <H.LogoImg src={LogoImg} />
      <H.Logo className="Logo">Jp_En</H.Logo>
    </H.Header>

    <H.ContentsStage>
      <div className="JpStage">
          <H.InputReasult id="japanese" name="japanese" placeholder="입력해주세요.." value={input} onChange={(e)=>setInput(e.target.value)}/>
        <H.LowerBar>
          <H.SubmitBtn type="submit" value="번역하기" onClick={()=>translate()}/>
        </H.LowerBar>
      </div>
      <div className="ReslutStage">
        <H.InputReasult id="English" name="English" placeholder="번역됨" readOnly value={result} />
        <H.LowerBar>
          <CopyToClipboard text={result}>
            <H.CopyBtn>Copy</H.CopyBtn>
          </CopyToClipboard>
        </H.LowerBar>
      </div>
    </H.ContentsStage>
    </>
  );
}

export default App;
