import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from './Redux/cakes/cakeAction';
const HookCakeCounter = () => {
    const numOfCake = useSelector(state => state.cake.numOfCakes)
    const BUY_CAKE = useDispatch()
    return (
        <div  className='container p-3 mb-2 bg-success text-white'>
            <h1>numOfCake: {numOfCake} </h1>
            <button className='btn btn-dark' onClick={() => BUY_CAKE(buyCake())}>Buy Cake</button>
        </div>
    );
}

export default HookCakeCounter;