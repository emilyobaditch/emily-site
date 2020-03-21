import React from 'react'
import styled from 'styled-components'
import TopBar from '../molecules/TopBar'
import Box from '../atoms/Box'

type Props = {
    children?: React.ReactElement
}
export default function Base({children} : Props){
    return (
    <>
        <TopBar />
        <Box mt="42px" width="100%">
        {children}
        </Box>
        </>
    )
}