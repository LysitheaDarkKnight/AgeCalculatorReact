// import logo from './logo.svg';
// import './App.css';
import Form from "./components/Form";
import AgeDisplay from "./components/AgeDisplay";
import { useState } from "react"

// import Input from "./components/Input";

function App() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [showAge, setShowAge] = useState(false)


  return (
    <main>
      <div className="container">
        <Form day={day} setDay={setDay} month={month} setMonth={setMonth} year={year} setYear={setYear} setShowAge={setShowAge}>
        </Form>

        {showAge && <AgeDisplay day={day} month={month} year={year}/>}
        
       
      </div>
    </main>
  );
}

export default App;
