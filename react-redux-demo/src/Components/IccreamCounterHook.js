import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buy_Iccream } from './Redux/iccream/Iccream.Action';
const IccreamCounterHook = () => {
    const decrementIccream = useSelector(state => state.iccream.numOfIccream  )
    const dispatch = useDispatch()
    return (
        <>
        <div className='container p-3 mb-2 bg-danger text-white'>
                <h1>numOfIccream: {decrementIccream} </h1>
                <button className='btn btn-secondary' onClick={() => dispatch(buy_Iccream())}>Buy Iccream</button>
        </div>
        </>
    );
}

export default IccreamCounterHook;