import { useState } from 'react'
import PropType from 'prop-types'

// Hooks que extrae la lógica del contador
export const useCounter = ( state = 1) => { // Stado inicial por defecto
    const [counter, setCounter] = useState(state)

    const handleAdd = () => {
        setCounter(counter + 1)
    }
    const handleSub = () => {
        setCounter(counter - 1)
    }
    const handleRest = () => {
        setCounter(state)
    }

    return {counter, handleAdd, handleSub, handleRest}
}

// Se valida que se envia el state
useCounter.propType = {
    state: PropType.number.isRequired,
}