
import iconArrow from "../assets/images/icon-arrow.svg"
import { useState, useRef } from "react"
import moment from 'moment';


function Form() {
  // const [validDay, setValidDay] = useState(false);
  // const [validMonth, setValidMonth] = useState(false);
  // const [validYear, setValidYear] = useState(false);

  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const [messageDay, setMessageDay] = useState('')
  const [messageMonth, setMessageMonth] = useState('')
  const [messageYear, setMessageYear] = useState('')

  const [yearDisplay, setYearDisplay] = useState('--')
  const [monthDisplay, setMonthDisplay] = useState('--')
  const [dayDisplay, setDayDisplay] = useState('--')

  const dateArray = useState([]);

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

const handleNumberInput = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');

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
  

}

const handleSubmit = (e) => {
  e.preventDefault()

  // const date = `${dateArray.current[2]}-${dateArray.current[1]}-${dateArray.current[0]}`
  const date = `${year}-${month}-${day}`

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
  //   // setValidYear(true)
  // }
  if(day === ''){
    setMessageDay('This field is required')
  }else if (month === ''){  
    setMessageMonth('This field is required')
  }else if (year === ''){  
    setMessageYear('This field is required')
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
      setDayDisplay(tday - day + 30);
      tmonth = tmonth - 1;
    } else {
      setDayDisplay(tday - day)
    }
  
    if (tmonth < month) {
      setMonthDisplay(tmonth - month + 12);
      tyear = tyear - 1;
    } else {
      setMonthDisplay(tmonth - month);
    }
  
    setYearDisplay(tyear - year);
  }

  // if(day === '' || month === '' || year === ''){
  //   setMessageDay('This field is required')
  //   setMessageMonth('This field is required')
  //   setMessageYear('This field is required')
  // }else{  
  //   console.log(123)
  // }

    // } else if(moment(date, 'YYYY-M-D', true).isValid() === false) {
  //   setMessageMonth('')
  //   setMessageYear('')
  //   setMessageDay("Must be a valid date")

  // moment(date, 'D-M-YYYY', true).isValid() === false ? setMessageDay("Must be a valid date") : console.log(1)


  // if (messageDay === '' && messageMonth === '' && messageYear === '') {
  //   console.log(12)
  // }

}

  return (
    <>
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
      <div className="age-display">
       <div className="age-display__number">
           {/* <input type="text" id="age-years__display" name="age-years__display" value={yearDisplay} disabled/>
           <label htmlFor="age-years__display">years</label> */}
           <h1 id="age-years"><span id="age-years__calculate">{yearDisplay}</span> years</h1>

       </div>
       <div className="age-display__number">
           {/* <input type="text" id="age-months__display" name="age-months__display" value={monthDisplay} disabled/>
           <label htmlFor="age-months__display">months</label> */}
           <h1 id="age-months"><span id="age-months__calculate">{monthDisplay}</span> months</h1>
       </div>
       <div className="age-display__number">
           {/* <input type="text" id="age-days__display" name="age-days__display" value={dayDisplay} disabled/>
           <label htmlFor="age-days__display">days</label> */}
           <h1 id="age-days"><span id="age-days__calculate">{dayDisplay}</span> days</h1>
       </div>

   </div>
   </>
  )
}

export default Form
