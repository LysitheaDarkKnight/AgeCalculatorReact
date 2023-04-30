
function AgeDisplay({day,month,year}) {

  return (
    <div className="age-display">
        <div className="age-display__number">
            {/* <input type="text" id="age-years__display" name="age-years__display" value={yearDisplay} disabled/>
            <label htmlFor="age-years__display">years</label> */}
            <h1 id="age-years"><span id="age-years__calculate">{year}</span> years</h1>

        </div>
        <div className="age-display__number">
            {/* <input type="text" id="age-months__display" name="age-months__display" value={monthDisplay} disabled/>
            <label htmlFor="age-months__display">months</label> */}
            <h1 id="age-months"><span id="age-months__calculate">{month}</span> months</h1>
        </div>
        <div className="age-display__number">
            {/* <input type="text" id="age-days__display" name="age-days__display" value={dayDisplay} disabled/>
            <label htmlFor="age-days__display">days</label> */}
            <h1 id="age-days"><span id="age-days__calculate">{day}</span> days</h1>
        </div>

    </div>
  )
}

export default AgeDisplay
