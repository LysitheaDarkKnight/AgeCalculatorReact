
import iconArrow from "../assets/images/icon-arrow.svg"
import { useState, useRef } from "react"
import moment from 'moment';


function Form() {
  const [validDay, setValidDay] = useState(false);
  const [validMonth, setValidMonth] = useState(false);
  const [validYear, setValidYear] = useState(false);
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [messageDay, setMessageDay] = useState('')
  const [messageMonth, setMessageMonth] = useState('')
  const [messageYear, setMessageYear] = useState('')
  const dateArray = useRef([]);

//   function setError (element, msg) {
//     const inputControl = element.nextElementSibling.nextElementSibling;
//     inputControl.previousElementSibling.style.display = 'block';
//     inputControl.previousElementSibling.previousElementSibling.style.borderColor = 'hsl(0, 100%, 74%)';
//     inputControl.innerText = msg
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// function setError (element, msg) {
//   const inputControl = element
//   console.log(inputControl)
// }


// const setError = (e) => {
//   console.log(12)
// }


const handleNumberChange = (e) => {
 


    // setError(e.target, 'error message')
   
}

const handleNumberInput = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');

  if(day === 0 || day === ''){
    setMessageDay('This field is required')
  } else if(day > 31) {
    setMessageDay('Must be a valid day')
  } else {
    setMessageDay('')
  }

  if(month === 0 || month === ''){
    setMessageMonth('This field is required')
  } else if(month > 12) {
    setMessageMonth('Must be a valid month')
  } else {
    setMessageMonth('')
  }


  if(year === 0 || year === ''){
    setMessageYear('This field is required')
  } else if(moment(date, 'YYYY-M-D').isAfter(moment())) {
    setMessageYear('Must be in the past')
  } else {
    setMessageYear('')
    setValidYear(true)
  }
  

}

const handleSubmit = (e) => {
  e.preventDefault()

  const date = `${dateArray.current[2]}-${dateArray.current[1]}-${dateArray.current[0]}`

  console.log(date)
  console.log(moment().format('YYYY-M-D'))
  console.log(moment(date, 'YYYY-M-D').isAfter(moment()))


  // if(day === 0 || day === ''){
  //   setMessageDay('This field is required')
  // } else if(day > 31) {
  //   setMessageDay('Must be a valid day')
  // } else {
  //   setMessageDay('')
  // }

  // if(month === 0 || month === ''){
  //   setMessageMonth('This field is required')
  // } else if(month > 12) {
  //   setMessageMonth('Must be a valid month')
  // } else {
  //   setMessageMonth('')
  // }


  // if(year === 0 || year === ''){
  //   setMessageYear('This field is required')
  // } else if(moment(date, 'YYYY-M-D').isAfter(moment())) {
  //   setMessageYear('Must be in the past')
  // } else {
  //   setMessageYear('')
  //   setValidYear(true)
  // }

    // } else if(moment(date, 'YYYY-M-D', true).isValid() === false) {
  //   setMessageMonth('')
  //   setMessageYear('')
  //   setMessageDay("Must be a valid date")

  console.log(validYear)

  // moment(date, 'D-M-YYYY', true).isValid() === false ? setMessageDay("Must be a valid date") : console.log(1)


  // if (messageDay === '' && messageMonth === '' && messageYear === '') {
  //   console.log(12)
  // }

}

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="input-form">
            <label htmlFor="day-input">day</label>
            <input onChange={handleNumberChange} 
            onInput={handleNumberInput} 
            type="text" className="date-input" id="day-input" name="day-input" placeholder="DD" maxLength={2} value={day}/>
            {messageDay && <div className='message error'>{messageDay}</div>}
        </div>
        <div className="input-form">
            <label htmlFor="month-input">month</label>
            <input onChange={handleNumberChange} 
            onInput={handleNumberInput} 
            type="text" className="date-input" id="month-input" name="month-input" placeholder="MM" maxLength={2}  value={month}/>
            {messageMonth && <div className='message error'>{messageMonth}</div>}
        </div>
        <div className="input-form">
            <label htmlFor="year-input">year</label>
            <input onChange={handleNumberChange} 
            onInput={handleNumberInput} 
            type="text" className="date-input" id="year-input" name="year-input" placeholder="YYYY" maxLength={4}  value={year}/>
            {messageYear && <div className='message error'>{messageYear}</div>}
        </div>
      </div>
        <div className="border-container">
            <hr/>
            <span></span>
            <input 
             type="image" src={iconArrow} alt="Submit" id="btn-submit" />
            <hr/>
        </div>
    </form>

  )
}

export default Form
