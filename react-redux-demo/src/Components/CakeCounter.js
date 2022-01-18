import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from './Redux/cakes';
const CakeCounter = (props) => {
    return (
        <>
        <div className='container p-3 mb-2 bg-dark text-white'>
            <h1>numOfCakes: {props.numOfCakes}</h1>
            <button className='btn btn-info' onClick={props.buyCake}>Buy Cake</button>
        </div>
        </>
    );
}

const mapStateToProps = state => {
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CakeCounter);