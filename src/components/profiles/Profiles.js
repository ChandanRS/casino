import React,{ Fragment,useEffect } from 'react';
import {Link} from 'react-router-dom'
import {getAllProfiles} from '../../actions/profile'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner' 
// import ProfileItems from './ProfileItems' 


const Profiles = ( {getAllProfiles ,profile:{profiles,loading} } ) => {

    const employeeData = []

    if(profiles && profiles.data){
      for (const value of Object.values(profiles.data)) {
        console.log({value})
        employeeData.push(value)
      }
    }
    

console.log(profiles.data)
console.log(employeeData)

    useEffect(()=>{
        getAllProfiles()
    },[getAllProfiles])

    return (
      <Fragment>
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <div className="employees-data">
              <h1 className="large text-primary">Employees List</h1>
              <p className="lead">
              <i className="fab fa-connectdevelop"></i> Browse and Explore Employees
              </p>
            </div>
            {/* {
            employeeData.length > 0 ? (
              employeeData.map((profile) => <ProfileItems profile={profile} />)
            )  : <Spinner /> 
            } */}
            <div className="table-contaner">
          <table className="table">
            <tr>
            <th>Employee Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            </tr>
            {employeeData.length >0 ? employeeData.map(profile=>(
              <tr>
              <td>{profile.id}</td>
              <Link to={`/profile/${profile.id}`} ><td>{profile.employee_name}</td></Link>
              <td>{profile.employee_age}</td>
              <td>{profile.employee_salary}</td>
            
              </tr> 
            )) : <div className="ml-5 spin" ><Spinner /></div>

            }
          </table>
          </div>
          </Fragment>
        )
        }
      </Fragment>
    );

}

const mapStateToProps = state=> ({
        profile : state.profile
       
})


export default connect(mapStateToProps, { getAllProfiles })(Profiles);