import React from 'react'
import './styles.css'

type MainProps = {
    children: React.ReactNode
}

const Main = (props: MainProps) => {
    return (
    <>
    {props.children}
    </>
    )
}


export default Main