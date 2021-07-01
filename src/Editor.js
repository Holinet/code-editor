import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'

function Editor(props) {
  const {
    displayName,
    onChange,
    value,
    language
  } = props

  const [open, setOpen] = useState(true)

  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <div className={`editorContainer ${open ? '' : 'collapsed'}`}>
      <div className="editorTitle">
        {displayName}
        <button onClick={() => {
          setOpen(prevOpen => !prevOpen)
        }} ><img className='arraws' src="https://img.icons8.com/material-rounded/24/ffffff/left-and-right-arrows.png"/></button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='mirrorWrapper'
        options={{lineWrapping: true, lint: true, mode: language, lineNumbers: true, theme: 'material'}}
      />
    </div>
  )
}

export default Editor
