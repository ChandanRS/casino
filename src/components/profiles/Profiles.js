import React,{ Fragment,useEffect,useState } from 'react';
import Spinner from '../layout/Spinner' 
import Data from '../../TestData.json'
// import ProfileItems from './ProfileItems' 
import SimpleModal from '../Modal.js'


const Profiles = () => {

  const [loading,setLoading] = useState(true)
    
    const usersData = Data.members

    setTimeout(() => {
      setLoading(false)
    }, 2000);

    

    return (
      <Fragment>
        {loading ? (
          <Spinner />
        ) : 
        (
          <div style={{fontFamily:"DM Sans"}}>
            
            <div className="employees-data">
              <h1 className="large text-primary">Users List</h1>
              <p className="lead">
              <i className="fab fa-connectdevelop"></i> Browse and Explore Users
              </p>
            </div>
           
            <div className="table-container">
          <table className="table">
            <tr>
            <th>SL No.</th>
            <th>User Id</th>
            <th>Name</th>
            <th>Time Zone</th>
            </tr>
            {usersData.length >0 ? usersData.map((user,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{user.id}</td>
              {/* <td>{profile.real_name}</td> */}
              <SimpleModal user={user}/>
              <td>{user.tz}</td>
            
              </tr> 
            )) : <div className="ml-5 spin" ><Spinner /></div>
            }
          </table>
          </div>
          
          </div>
        )
          }
      </Fragment>
    );

}



export default Profiles;