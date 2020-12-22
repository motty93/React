import React from 'react'
import './App.css'
import BarPlot from './components/BarPlot'
import LinePlot from './components/LinePlot'
import PiePlot from './components/PiePlot'
import RadarPlot from './components/RadarPlot'

const App: React.FC = () => {
  return (
    <div className="App">
      <LinePlot />
      <PiePlot />
      <BarPlot />
      <RadarPlot />
    </div>
  )
}

export default App
