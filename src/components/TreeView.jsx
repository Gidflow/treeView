import React from 'react'
import MenuList from './MenuList'
import "./style.css"

const TreeView = ({menu = []}) => {
  return (
    <div class="container">
    <MenuList  list = {menu}/>
    </div>
  )
}

export default TreeView