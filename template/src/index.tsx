import { StrictMode } from 'react'
import { render } from 'react-dom'
import App from './App'

const RootComponent = (
  <StrictMode>
    <App />
  </StrictMode>
)

const $rootContainer = document.getElementById('root') ?? document.createElement('div')
const $bodyElement = document.body

$rootContainer.id = 'root'

if (!$bodyElement.contains($rootContainer)) {
  $bodyElement.appendChild($rootContainer)
}

render(RootComponent, $rootContainer)
