import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const Code = ({language, text}) => {
  return (
    <div className='py-2'>
      <CopyBlock
      language={language}
      text={text}
      showLineNumbers={true}
      theme={dracula}
      wrapLines={true}
      codeBlock
    />
    </div>
  )
}

export default Code