import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import moment from 'moment'
import notfound from '../images/notfound.PNG'

const Timelines = ({user}) => {
    const [value, onChange] = useState(new Date());
    let activeDays,sorted_activeDays 
    if(value){
        activeDays = user.activity_periods.map(time=> new Date(time.start_time.replace(/PM|AM/,"")))
    //    selectedStartDates = startDatesArr.filter(date=> date.toDateString() === value.toDateString() ? date.toDateString() : "" )
    //    endDatesArr = user.activity_periods.map(time=> new Date(time.end_time.replace(/PM|AM/,"")))
        // selectedEndDates = endDatesArr.filter(date=> date.toDateString() === value.toDateString() ? date.toDateString() : "" )
        sorted_activeDays = activeDays.sort((a,b) => {
            return new Date(a).getTime() -  new Date(b).getTime()
        });
        }

        console.log(sorted_activeDays)
    let i=0;
    // let result1 = activityPeriodsArr.filter(el=> console.log(el.toDateString()) )
    // let result2 = activityPeriodsArr.filter(el=> console.log(value.toDateString() ) )
    return (
        <div style={{fontFamily:"DM Sans"}}>
            {value === null ?
            <h3 style={{margin:"1rem",display:"flex",justifyContent:"center"}}>Please Select a date </h3> :
           <h3 style={{margin:"1rem",display:"flex",justifyContent:"center"}}> Selected Date -  <span style={{color:"#343a40",margin:"0 0.5rem"}}>{ new Date(value).toDateString().substring(4,15)}</span></h3> }
           <div style={{display:"flex",justifyContent:"space-between",margin:"1rem 0.5rem"}}>
           <h4> Change Date </h4>
           <DatePicker
            onChange={onChange}
            value={value}
            maxDate={new Date()}
            minDate={new Date("01-01-2000")}
            />
            </div>
           <table className="table mt-4">
               <tr>
               <th>SL No.</th>
               <th>Start Time</th>
               <th>End Time</th>
               </tr>
               {/* {selectedStartDates && selectedStartDates.map((time,index)=>(
                   <tr key={time}>
                    <td>{index+1}</td>
                    <td>{moment(selectedStartDates[0]).format('MMMM Do YYYY, h:mm:ss')}</td>
                    <td>{moment(selectedEndDates[0]).format('MMMM Do YYYY, h:mm:ss')}</td>
                    </tr> 
               ))} */}
               {console.log(activeDays)}
              {value && user.activity_periods.map((time,index) => {
                //   console.log(new Date(time.start_time.replace(/PM|AM/,"")).toDateString())
                  if(new Date(time.start_time.replace(/PM|AM/,"")).toDateString() === value.toDateString()){
                  return <tr>
                      <td>{++i}</td>
                      <td>{time.start_time}</td>
                      <td>{time.end_time}</td>
                  </tr>
                  }
                })}
           </table>
           {i === 0 && <><div style={{width:"100%",padding:"1rem"}}>
               <img style={{display:"block",marginLeft:'auto',marginRight:'auto',width:"50%"}} alt="no results" src={notfound}></img>
           <p style={{fontWeight:"500",display:'flex',justifyContent:'center'}}>{value ? `No activity periods found! ${user.real_name.split(" ")[0]} wasn't active on ${new Date(value).toDateString().substring(4,15)}` : "No Results" }</p></div>
           <p style={{fontWeight:"500",display:'flex',justifyContent:'center',marginTop:"1rem"}}>
           {value && sorted_activeDays.length>=1 && `Note : ${user.real_name.split(" ")[0]} was active for ${sorted_activeDays.length} days in the range ${new Date(sorted_activeDays[0]).toDateString().substring(4,15)} - ${new Date(sorted_activeDays[sorted_activeDays.length-1]).toDateString().substring(4,15)}` }</p>
            </>
           }
               
        </div>
    );
};

export default Timelines;