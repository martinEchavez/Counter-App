import React from 'react';
import { useCounter } from '../hooks/useCounter';

const CounterApp = () => {
    const { counter, handleAdd, handleRest, handleSub } = useCounter(1)
    return (
        <>
            <h2>Contador {counter}</h2>
            <button onClick={() => handleAdd(2)}>+</button>
            <button onClick={handleRest}>Reset</button>
            <button onClick={() => handleSub(2)}>-</button>
        </>
    )
}

export default CounterApp;