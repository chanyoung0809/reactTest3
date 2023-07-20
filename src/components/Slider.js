import React, { useState } from 'react'

const Slider = () => {
    let [sText, sTextSet] = useState(["슬라이드화면1","슬라이드화면2","슬라이드화면3","슬라이드화면4"]);
    let [sCircle, sCircleSet] = useState(["1","2","3","4"]);
    let [sIdx, sIdxSet] = useState(0);
    return (
        <div className='slider'>
            <div className='move' style={{marginLeft:`${sIdx * -100}%`}}>
                {
                    sText.map((sText, idx)=>{
                        return(
                            <div key={idx} className='views'>{sText}</div>
                        )
                    })
                }
                
            </div>
            <button className='prev' onClick={()=>{
                (sIdx === 0) ? sIdxSet(3) : sIdxSet(--sIdx);
            }}>◀</button>
            <button className='next' onClick={()=>{
                (sIdx === 3) ? sIdxSet(0) : sIdxSet(++sIdx);
            }}>▶</button>
            <ul className='circles'>
                {
                    sCircle.map((sCircle, idx)=>{
                        return(
                            <li key={idx} onClick={(event)=>{
                                event.preventDefault();
                                sIdxSet(idx);
                            }} className={(idx === sIdx) ? 'on' : ''}><a href="#">{sCircle}</a></li>
                        )
                    })
                }  
            </ul>
        </div>
    )
}

export default Slider