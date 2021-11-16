import { Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline from '../Timeline/Timeline'

import './Profile.css';
import Hero from '../../assets/images/albert.png'

const Profile = () => {
    return (
        <div className='profile container_shadow'>
          <div className='profile_name'>
          <Typography className='name'>Albert</Typography>
          <Typography className='title'>coders</Typography>
          </div>

          <figure className='profile_image'>
            <img src={Hero} alt='' />
          </figure>

          <div className='profile_information'>
            <CustomTimeline />
            <br/>
            <button>my Button</button>
          </div>
        </div>
    )
}

export default Profile;
