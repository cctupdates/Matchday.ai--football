import React from 'react'
import {Button} from './style'

const CustomButton = (props) => {

    return (
        <>
        <Button type={props.type}>
            {props.text}
        </Button>
        </>
    )
}

export default CustomButton
