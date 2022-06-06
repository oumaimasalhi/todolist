import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
const Input = ({onChange}) => {
    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl aria-label="First name"
                onChange={(e)=> onChange(e.target.value)}
                />
            </InputGroup>
        </div>
    )
}

export default Input