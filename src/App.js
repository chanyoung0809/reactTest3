import { useState } from "react";
import "./style/main.scss";
import Tabs from "./components/Tabs";
import Slider from "./components/Slider";


function App() {
  // 상태값 담는 변수이름, 상태값 변경하는 함수이름
  let [count, countSet] = useState(0);
  let [days, daysSet] = useState("오늘은 무슨 요일?");
  let [toggle, toggleSet] = useState(false);
  return (
    <div className="App">
      <div className="test">
        {/* 태그 내에서 이벤트 걸거나, 텍스트 출력하거나, 속성값 설정할 때, 주석 걸 때는 중괄호로 감싸고 가야 함 */}
        {/* 증감연산자 사용법
             1) += 1, -= 1
             2) 전위연산자 --변수 ++변수 (후위연산자 변수-- 변수++ 로 하면 실행 순서가 뒤로 밀림.)
        */}
        <button className="minus" onClick={()=>{
          (count === 0) ? countSet(4) : countSet(--count);
          // 조건식 ? 참일때실행코드 : 거짓일때실행코드 <- 삼항연산자 
        }}>-</button>
        <span>{count}</span>
        <button className="plus" onClick={()=>{
          (count === 4) ? countSet(0) : countSet(++count);
        }}>+</button>
      </div>
      <div>
        <button onClick={()=>{daysSet("수요일")}}>참</button>
        <button onClick={()=>{daysSet("몰라요")}}>거짓</button>
        <span>{days}</span>
      </div>
      <div className={(toggle) ? "popup show" : "popup"}>팝업화면창{`${toggle}`}</div>
      {/* <button className="on" onClick = {()=>{toggleSet(true)}}>팝업창 보이기</button>
      <button className="off" onClick = {()=>{toggleSet(false)}}>팝업창 사라지기</button> */}
      <button className="toggle" onClick = {()=>{toggleSet(!toggle)}}>팝업창 토글</button>
      <Tabs></Tabs>
      <Slider></Slider>
    </div>
  );
}

export default App;
