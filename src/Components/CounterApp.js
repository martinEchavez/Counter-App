import React from 'react';
import { useCounter } from '../hooks/useCounter';

const CounterApp = () => {
    const { counter, handleAdd, handleRest, handleSub } = useCounter(1)
    return (
        <>
            <h2>Contador {counter}</h2>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleRest}>Reset</button>
            <button onClick={handleSub}>-</button>
        </>
    )
}

export default CounterApp;