import General from './components/General.jsx'
import Education from './components/Education.jsx'
import Practical from './components/Practical.jsx'
import './App.css'

function App() {
  return (
    <div className="main">
      <h2 className="title" style={{ backgroundColor: "#f4f4f4", margin: "0", padding: "12px" }}>CV</h2>
      <General />
      <Education />
      <Practical />
    </div>
  );
}

export default App
