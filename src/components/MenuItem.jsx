import React, { useState } from 'react'
import MenuList from './MenuList';


const MenuItem = ({ item }) => {

    const [visibleChild, setVisibleChils] = useState(false)
    return (
        <li className='menu-list' >
            <div className='menu-item'>
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length ? <span onClick={()=>setVisibleChils(prev=>!prev)}>
                        {!visibleChild ? "+":"-"}
                    </span> : null
                }
            </div>


            {
                item && item.children && item.children.length > 0 && visibleChild?
                    <MenuList list={item.children} /> : null
            }
        </li >
    )
}

export default MenuItem