
import iconArrow from "../assets/images/icon-arrow.svg"
import { useState, useRef } from "react"
import moment from 'moment';


function Form({day, setDay, month, setMonth, year, setYear, setShowAge}) {
  const [messageDay, setMessageDay] = useState('')
  const [messageMonth, setMessageMonth] = useState('')
  const [messageYear, setMessageYear] = useState('')

  const [yearDisplay, setYearDisplay] = useState('')
  const [monthDisplay, setMonthDisplay] = useState('')
  const [dayDisplay, setDayDisplay] = useState('')

const handleNumberChange = (e) => {

  const idInput = e.target.id.slice(0,-6)

  if (idInput === 'day'){
    setDay(e.target.value)
  } else if (idInput === 'month'){
    setMonth(e.target.value)
  } else {
    setYear(e.target.value)
  }
    // setError(e.target, 'error message')
   
}

const handleYearChange = (e) => {
  setYearDisplay(e.target.value) 
}
const handleMonthChange = (e) => {
  setMonthDisplay(e.target.value) 
}
const handleDayChange = (e) => {
  setDayDisplay(e.target.value) 
}



const handleNumberInput = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
}

const isEmpty = () => {
  if(day === ''){
    setMessageDay('This field is required')
  }else if (month === ''){  
    setMessageMonth('This field is required')
  }else if (year === ''){  
    setMessageYear('This field is required')
  }else{
    return true
  }
  return false
}

const calculateAge = (date) => {
  if(!isEmpty){
  }else if(!moment(date, 'YYYY-M-D', true).isValid()) {
    setMessageYear('Must be a valid date')
  }else if(moment(date, 'YYYY-M-D').isAfter(moment())){
    setMessageYear('Must be in the past')
  }else{
    setMessageDay('')
    setMessageMonth('')
    setMessageYear('')

    let tday = moment().format('D')
    let tmonth = moment().format('M')
    let tyear = moment().format('YYYY')

    if (tday < day) {
      setDay(tday - day + 30);
      tmonth = tmonth - 1;
    } else {
      setDay(tday - day)
    }
  
    if (tmonth < month) {
      setMonth(tmonth - month + 12);
      tyear = tyear - 1;
    } else {
      setMonth(tmonth - month);
    }
  
    setYear(tyear - year);
  }
}

const handleSubmit = (e) => {
  e.preventDefault()
  const date = `${year}-${month}-${day}`

  // display date in console
  console.log(date)
  console.log(moment().format('YYYY-M-D'))
  console.log(moment(date, 'YYYY-M-D').isAfter(moment()))

  // Calculate
  calculateAge(date)

  // Set flag for display result
  if(isEmpty()){
    setShowAge(true)
  }
}

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="input-form">
            <label htmlFor="day-input">day</label>
            <input onChange={handleNumberChange} 
            onInput={handleDayChange} 
            type="text" className="date-input" id="day-input" name="day-input" placeholder="DD" maxLength={2} value={dayDisplay}/>
            {messageDay && <div className='message error'>{messageDay}</div>}
        </div>
        <div className="input-form">
            <label htmlFor="month-input">month</label>
            <input onChange={handleNumberChange} 
            onInput={handleMonthChange} 
            type="text" className="date-input" id="month-input" name="month-input" placeholder="MM" maxLength={2}  value={monthDisplay}/>
            {messageMonth && <div className='message error'>{messageMonth}</div>}
        </div>
        <div className="input-form">
            <label htmlFor="year-input">year</label>
            <input onChange={handleNumberChange} 
            onInput={handleYearChange} 
            type="text" className="date-input" id="year-input" name="year-input" placeholder="YYYY" maxLength={4}  value={yearDisplay}/>
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
      
   </>
  )
}

export default Form
