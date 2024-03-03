import React from 'react'
import TreeView from './components/TreeView';
import {menus} from "./data"
import QrCode from './components/qrCode/QrCode';

const App = () => {
  return (
    <div>
      {/* <TreeView menu={menus}/> */}

      <QrCode/>
    </div>
  )
}

export default App