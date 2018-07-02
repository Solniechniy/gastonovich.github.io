import React from 'react';

export  default  function getCardView (props){
    return(
        props.map((card)=>card!==16 ? <div key={card}>{card}</div>: <div id={'yellow'} key={16}>&#160;</div>
        )
    )
}
