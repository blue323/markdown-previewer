import React, { useState } from 'react'
import './App.css';
import { marked } from 'marked';


function App() {
  const [text, setText] = useState(`
  # Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:


![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `)
  

  marked.setOptions({
    breaks: true
  })


  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <div className='titles'>
        <h2>Editor</h2>
        <h2>Result</h2>
      </div>
      <div className='content'>
        <textarea id="editor" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        <div className="mark" id='preview' dangerouslySetInnerHTML={{__html: marked(text)}}></div>
      </div>
    </div>
  );
}

export default App;