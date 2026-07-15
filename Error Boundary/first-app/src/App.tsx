import { useState } from 'react'
import { ErrorBoundary } from "react-error-boundary";
import './App.css'
import ApiCompo from './components/ApiCompo'
import ErrorBoundaryWrapper from './components/ErrorFallback';

function App() {


  return (
    <>
   <ErrorBoundaryWrapper>
      <ApiCompo/>
   </ErrorBoundaryWrapper>
    </>
  )
}

export default App
