import React, { useRef } from 'react'

export default function StyleChanger() {
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const turnWhite = () => {
        div1Ref.current!.style.backgroundColor = 'white';
        div2Ref.current!.style.backgroundColor = 'white';
    };
    const switchText = () => {
        const textDiv1 = div1Ref.current!.innerText
        div1Ref.current!.innerText = div2Ref.current!.innerText;
        div2Ref.current!.innerText = textDiv1;
    }

    return (
        <>
            <div style={{ backgroundColor: 'blue', height: '100px', width: "100px", border: "solid" }} ref={div1Ref}>אני ריבוע כחול</div>
            <div style={{ backgroundColor: 'red', height: '100px', width: "100px", border: "solid" }} ref={div2Ref} >אני ריבוע אדום</div>
            <button onClick={turnWhite}>הפוך ללבן</button>
            <button onClick={switchText}>הפוך בין הטקסטים</button>
        </>
    )
}
