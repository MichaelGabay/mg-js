import React from 'react'

export type IfProps = {
    children: any,
    condition: boolean
}

const If: React.FC<IfProps> = ({ children, condition }) => {
    if (condition) return children;
}

export default If