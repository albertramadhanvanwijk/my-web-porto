import { Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import { PersonOutlineOutlinedIcon } from '@material-ui/icons/PersonOutlineOutlined'

import resumeData from '../../utils/resumeData'

import './Profile.css';
import Hero from '../../assets/images/albert.png'
import { TimelineContent, TimelineItem } from '@mui/lab'

const CustomTimelineItem = ({ title, text, link}) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className='timeline_content'>
      {link ? (
        <Typography className='timelineItem_text'>
          <span>{title}:</span> {''}
          <a href={link} target='_blank'>
            {text} 
          </a>
        </Typography>
        ) : (
          <Typography className='timelineItem_text'>
            <span>{title}:</span> {text}
          </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
    return (
        <div className='profile container_shadow'>
          <div className='profile_name'>
          <Typography className='name'>{resumeData.name}</Typography>
          <Typography className='title'>{resumeData.title}</Typography>
          </div>

          <figure className='profile_image'>
            <img src={Hero} alt='' />
          </figure>

          <div className='profile_information'>
            <CustomTimeline icon={<PersonOutlineOutlinedIcon/>}>
              <CustomTimelineItem title='Name' text={resumeData.name} />
              <CustomTimelineItem title='Birthday' text={resumeData.birthday} />
              <CustomTimelineItem title='Occupation' text={resumeData.Occupation} />
              <CustomTimelineItem title='Email' text={resumeData.email} />
              <CustomTimelineItem title='Address' text={resumeData.address} />
            </CustomTimeline>
            <br/>
            <button>my Button</button>
          </div>
        </div>
    )
};

export default Profile;
