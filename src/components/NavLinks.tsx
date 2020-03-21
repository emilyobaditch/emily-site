import React from 'react'
import { Typography}  from '../styleguide/Typography'
import { Link } from 'react-router-dom'

const { H3 } = Typography;


export default function NavLinks(){

return (
    <>
        <Link to={"/"}>
            <H3>Home</H3>
        </Link>
        <Link to={"/bio"}>
            <H3>Bio</H3>
        </Link>
    </>
    )
}
