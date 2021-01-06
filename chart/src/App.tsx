import React from 'react'
import './App.css'
import BarPlot from './components/BarPlot'
import LinePlot from './components/LinePlot'
import PiePlot from './components/PiePlot'
import RadarPlot from './components/RadarPlot'
import BubblePlot from './components/BubblePlot'

const App: React.FC = () => {
  return (
    <div className="App">
      <LinePlot />
      <PiePlot />
      <BarPlot />
      <RadarPlot />
      <BubblePlot />
    </div>
  )
}

export default App
