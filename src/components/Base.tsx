import React from 'react'
import styled from 'styled-components'
import TopBar from './TopBar'

type Props = {
    children?: React.ReactElement
}
export default function Base({children} : Props){
    return (
    <>
        <TopBar />
        {children}
        </>
    )
}