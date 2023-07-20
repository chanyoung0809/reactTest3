import React, { useState } from 'react'

const Tabs = () => {
    //탭메뉴, 탭박스 배열로 반복문
    let [menus, menusSet] =  useState(["탭메뉴1","탭메뉴2","탭메뉴3", "탭메뉴4"]);
    let [conts, contsSet] =  useState(["탭박스1","탭박스2","탭박스3", "탭박스4"]);
    let [tabNumber, tabNumberSet] = useState(0);
  return (
    <div className='tabWrap'>
        <ul className='tabMenu'>
            {/* <li className={(tabNumber === 0) ? 'on' : ''} onClick={()=>{tabNumberSet(0)}}><a href="#">탭메뉴1</a></li>
            <li className={(tabNumber === 1) ? 'on' : ''} onClick={()=>{tabNumberSet(1)}}><a href="#">탭메뉴2</a></li>
            <li className={(tabNumber === 2) ? 'on' : ''} onClick={()=>{tabNumberSet(2)}}><a href="#">탭메뉴3</a></li>
            <li className={(tabNumber === 3) ? 'on' : ''} onClick={()=>{tabNumberSet(3)}}><a href="#">탭메뉴4</a></li> */}
            {
                menus.map((menus, idx)=>{
                    return (
                        <li key={idx} className={(tabNumber === idx) ? 'on' : ''} onClick={()=>{tabNumberSet(idx)}}><a href="#">{menus}</a></li>
                    )
                })
            }
        </ul>
        <div className="tabCont">
            {/* <div className={((tabNumber === 0) ? 'show' : '')}>탭박스1</div>
            <div className={((tabNumber === 1) ? 'show' : '')}>탭박스2</div>
            <div className={((tabNumber === 2) ? 'show' : '')}>탭박스3</div>
            <div className={((tabNumber === 3) ? 'show' : '')}>탭박스4</div> */}
            {
                conts.map((conts, idx)=>{
                    return (
                        <div key={idx} className={(tabNumber === idx) ? 'show' : ''} onClick={()=>{tabNumberSet(idx)}}>{conts}</div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Tabs