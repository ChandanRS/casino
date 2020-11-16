import React,{Fragment} from 'react';
import Spinner from '../layout/Spinner'


const ProfileTop = ({profile}) => {
  console.log('profile')
    const {employee_name, profile_image,  employee_salary, employee_age} = profile
console.log({employee_name})
console.log({profile_image})
    return (
      <Fragment>
      {profile !== null ? 

      <Fragment>
        <div class="profile-top bg-primary m-4 p-2 profile_top">
       {profile_image ? <img class="round-img my-1" src={profile_image} alt="" /> : <img class="round-img my-1" src={"https://i.pravatar.cc/300"} alt="" />}
          <h1 class="large">{employee_name}</h1>
          <p class="lead">
            Software Engineer at GoPoolIt
          </p>
          <p>Bangalore, KA</p>
          <p>Salary:{employee_salary}</p>
          <p>Age:{employee_age}</p>
          <div class="icons my-1">
             
              <a href="#!" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-globe fa-2x"></i>
              </a>

              <a
                href="#!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-twitter fa-2x"></i>
              </a>
           
              
              <a  href="#!" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-facebook fa-2x"></i>
              </a>
           
              <a  href="#!" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
              <a  href="#!" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-youtube fa-2x"></i>
              </a>
              <a  href="#!" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram fa-2x"></i>
              </a>
          </div>
        </div>
      </Fragment> : <Spinner /> }
      </Fragment>
    );
};



export default ProfileTop ;
