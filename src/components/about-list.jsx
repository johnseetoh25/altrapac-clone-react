import { House } from '@mui/icons-material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import { Typography } from '@mui/material'
import React from 'react'
import { AboutItemsList } from '../libs/data'

export default function AboutList() {
  return (
    <div>
        <Timeline>
            {AboutItemsList.map((item, index) => (
                <TimelineItem key={index}>
                    <TimelineOppositeContent sx={{ scale: 0.75}}>
                        <img src={'/' + item.icon} alt='icon' />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{alignContent: 'center'}}>
                        <Typography sx={{ fontSize: '24px', fontWeight: 700}}>{item.title}</Typography>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    </div>
  )
}
