import { useCallback, useMemo, useRef, useState } from "react";

// function fib_sum(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fib_sum(n - 1) + fib_sum(n - 2);
// }

function Counter() {
    console.log('render Counter');
    const [number, setNumber] = useState(30);
    const num = useRef(0); // userRef - with value

    function handleClick(e) {
        e.stopPropagation();

        setNumber(number => number + 5);
        // setNumber(number => number + 1);
        // setNumber(number => number + 1);

        num.current++;

        console.log(`number : ${number} - num.current : ${num.current}`);
    }


    // useMemo : function's return value will be memoized
    // const fibMemoized = useMemo(() => fib_sum(number), [number]);


    // useCallback : function itself will be memoized
    const fibFnMemoized = useCallback(function fib_sum(n) {
        if (n <= 1) {
            return n;
        }
        return fib_sum(n - 1) + fib_sum(n - 2);
    }, []);

    const fibMemoized = useMemo(() => fibFnMemoized(number), [number, fibFnMemoized]);



    return (
        <>
            <h1 style={{ color: 'white' }}>{number} - {num.current}</h1>
            <h2>Fib ({number}): {fibMemoized}</h2>
            {/* <h2>Fib Series: {fibSeries}</h2> */}
            <button onClick={handleClick}>Add</button>
        </>
    );

}

export default Counter;