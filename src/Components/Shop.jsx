import React, { useEffect, useReducer } from 'react'
import list from '../List'
import Card from './Card'
import '../Styles/card.css'

const itemsPerPage = 5;

const paginationReducer = (state, action)=>{
    switch(action.type){
        case 'SET_TOTAL_ITEMS':
            return {...state, totalItem: action.payload};
        
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.payload};
        default:
            return state;
    }
}

const Shop = ({handleClick}) => {

    const [paginationState, dispatch] = useReducer(paginationReducer, {
        currentPage: 1,
        totalItem: 0,
    })

    useEffect(()=>{
        dispatch({type: "SET_TOTAL_ITEMS", payload: list.length});
    }, [list]);

    const startIndex = (paginationState.currentPage - 1)*itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedItems = list.slice(startIndex, endIndex);

    const handlePageClick = (newPage)=>{
        dispatch({type: "SET_CURRENT_PAGE", payload: newPage})
    }


    return (
        <section>
            <div className='section'>
            {
                displayedItems.map((item)=>{
                    return <Card item={item} key={item.id} handleClick={handleClick}/>
                })
            }
            </div>

            <div className='buttons'>
                <button className='button' onClick={()=> handlePageClick(paginationState.currentPage - 1)} disabled={paginationState.currentPage === 1}>Previous</button>
                <button className='button' onClick={()=> handlePageClick(paginationState.currentPage + 1)} disabled={endIndex >= list.length}>Next</button>
            </div>

        </section>
    )
}

export default Shop
