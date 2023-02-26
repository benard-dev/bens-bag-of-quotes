import React, {useState} from 'react'
import AddQuote from './Components/AddQuote';
import ViewQuote from './Components/ViewQuote';
import './App.css'

const App = () => {
  const [view, setView] = useState("viewQuote");

  return (
    <div className='main'>
      <div className='title'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
        <h1 className="main-title">Ben's Bag of Quotes</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/></svg>
      </div> 
      <nav>
          <h3 onClick={() => setView('viewQuote')} className={ view === "viewQuote" ? "active" : "" }>View Quote</h3>
          <h3 onClick={() => setView('addQuote')} className={ view === "addQuote" ? "active" : "" }>Add Quote</h3>
      </nav>
      {view === "viewQuote" ? <ViewQuote /> : <AddQuote />}
    </div>
  )
}

export default App