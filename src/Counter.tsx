import react, { useRef } from 'react'

export default function Counter() {
    const countRef = useRef<HTMLDivElement>(null);
    const printer = () => {
        if (countRef.current) {
            const countString = parseInt(countRef.current.innerText) + 1;
            countRef.current.innerText = countString.toString();
        }
    }
    const deleteCounter = () => {
        if (countRef.current)
        countRef.current.innerText = '0'
    }

;
return (
    <>
        <button onClick={printer}>הוסף</button>
        <div id="counterStatus" ref={countRef}>0</div>
        <button onClick={deleteCounter}>איפוס</button>
    </>
)
}
