import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CoffeeAction from './Redux/Coffee/CoffeeAction';

const CoffeeCounterHook = () => {
    const decrementCoffee = useSelector(state => state.coffee.numOfCoffee)
    const dispatch = useDispatch()
    return (
        <>
        <div className='container p-3 mb-2 bg-dark text-white'>
            <h1>numOfCoffee: {decrementCoffee}</h1>
            <button className='btn btn-info' onClick={() => dispatch(CoffeeAction())}>Buy Coffee</button>
        </div>
        </>
    );
}

export default CoffeeCounterHook;
