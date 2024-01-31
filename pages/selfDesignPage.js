import React from "react";
import dynamic from 'next/dynamic'

const Nav = dynamic(() => import('main/nav'), { ssr: false});


export const SelfDesignPage = () => {
    
    return <div>
        <Nav>This is my nav from main app 1 on SelfDesign</Nav>
        <h1>Self Desin Page</h1>
    </div>
}
export default SelfDesignPage;