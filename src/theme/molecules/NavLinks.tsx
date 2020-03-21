import React from 'react'
import Text from '../atoms/Text'
import { Link } from 'react-router-dom'


export default function NavLinks(){

return (
    <>
        <Link to={"/"}>
            <Text>Home</Text>
        </Link>
        <Link to={"/bio"}>
            <Text>Bio</Text>
        </Link>
    </>
    )
}
