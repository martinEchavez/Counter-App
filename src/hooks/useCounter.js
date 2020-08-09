import { useState } from 'react'
import PropType from 'prop-types'

// Hooks que extrae la lógica del contador
export const useCounter = ( state = 1) => { // Stado inicial por defecto
    const [counter, setCounter] = useState(state)
    // Se agrega el factor para poder incrementar un valor cualquiera
    const handleAdd = (factor = 1) => {
        setCounter(counter + factor)
    }
    const handleSub = ( factor = 1) => {
        setCounter(counter - factor)
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