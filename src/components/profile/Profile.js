import React,{Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom'
import {getProfileById} from '../../actions/profile'
// import {getRepos} from '../../actions/profile'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import ProfileTop from './ProfileTop'

// employee_age: "61"
// employee_name: "Brielle Williamson"
// employee_salary: "372000"
// id: "6"
// profile_image: ""



const Profile = ({ profile:{profile,loading},getProfileById,match }) => {
  useEffect(()=>{
    getProfileById(match.params.id)
  
},[getProfileById, match.params.id])

    console.log('profileeee')
    console.log(profile)
    
    return (
      <Fragment>
        {profile === null || loading === true ? (
          <Spinner />
        ) : (
          <Fragment>
            <div className="btn btn-secondary employee_profile">
              <Link to="/profiles">Back to Profiles</Link>
            </div>
            <ProfileTop profile={profile} />
          </Fragment>
        )}
      </Fragment>
    );


}
const mapStateToProps = state => ({
    profile : state.profile,
    auth : state.auth
})

export default connect(mapStateToProps,{getProfileById})(Profile) ;

// ------------------------------------------DONEEEEEEEEEEEEE-----------------------------------------------












    // if(profile){
    //     console.log(profile.profile)
    // }
    //  const {_id, name, avatar} = {profile} && {...profile.user}
    //         const {
    //             bio ,
    //             company  ,
    //             education  ,
    //             experience  ,
    //             githubusername  ,
    //             location,
    //             skills ,
    //             status
    //         } = profile
    // if(profile){