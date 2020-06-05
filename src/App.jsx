import React from 'react'
import './App.css'
import MainLayout from './components/layouts/Main'
import Clone from './components/organisms/Clone/Clone'
import { Provider } from 'react-redux'
import CreateStore from './store'
import IsAuthenticated from './components/atoms/IsAuthenticated/IsAuthenticated'

const store = CreateStore()

function App () {
  return (
    <Provider store={store}>
      <IsAuthenticated>
        <MainLayout>
          <Clone />
        </MainLayout>
      </IsAuthenticated>
    </Provider>
  )
}

export default App
