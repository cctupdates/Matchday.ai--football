import React from 'react'
import {Div,Number, NameDiv,Name, AvatarStyle} from './style'

const SinglePlayer = (props) => {
    return (
       <Div>
           {
               props.swap === true ? 
               <AvatarStyle alt="Remy Sharp" src={props.image} />
                :
                <Number>
                        {props.number}
                </Number>
           }

           <NameDiv color={props.color}>
               <Name>
                {props.name}
               </Name>
           </NameDiv>
       </Div>
    )
}

export default SinglePlayer
