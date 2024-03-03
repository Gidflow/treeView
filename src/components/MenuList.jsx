import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({ list = [] }) => {
    return (
        <ul className='menu-list' >
          {
            list && list.length ?
            list.map((item, index)=>{
          return  <MenuItem key={index} item={item}/>
}):null
          }
        </ul>
    )
}

export default MenuList