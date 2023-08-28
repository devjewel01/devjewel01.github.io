import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const CodeOutput = ({text}) => {
  return (
    <div className='py-2'>
      <CopyBlock
      language={text}
      text={text}
      theme={dracula}
      wrapLines={true}
      showLineNumbers={false}
      codeBlock
    />
    </div>
  )
}

export default CodeOutput