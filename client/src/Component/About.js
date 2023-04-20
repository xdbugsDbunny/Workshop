import React from 'react'
import { Box, Divider, Typography, styled } from '@mui/material'

const Image = styled('img')({
  width: 370,
})

const About = () => {
  return (
    <Box display="flex" flexDirection='column'>
      <Box textAlign='center'>
        <Typography variant='h2' style={{ marginTop: 20, color: 'teal' }}>
          Suraj Singh Negi
        </Typography>
      </Box>
      <Divider><Typography variant='h5' style={{ color: 'blue' }}>MERN Stack Developer</Typography></Divider>
      <Box display='flex' marginLeft='400px' alignItems='center'>
        <Box width='40%'>
          <Typography variant='h6' >Hi there! My name is <b>Suraj Singh Negi</b> and I'm a MERN Stack Developer. I'm passionate about exploring new technologies and love learning those technologies.
          </Typography>
          <br/>
          <Typography variant='h6'>
            In my free time, I enjoy playing games and often spend time playing FPS Games. I'm also an avid reader and love to explore new topics.
          </Typography>
        </Box>
        <Box>
          <Image src='https://homeschool-curriculum.org/wp-content/uploads/2020/09/453-1024x1024.jpg' />
        </Box>
      </Box>
      <Box display='flex' justifyContent='center'>
        <Box  textAlign='center' width='70%'>
        <Typography variant='h3'>About The Project</Typography>
          <Typography variant='h6'>
            This banking app, built on the <b>MERN</b> stack, offers a range of key features to help users manage their finances securely and conveniently. With the ability to <b>withdraw</b>, <b>deposit</b>, and <b>check balances</b>, users can easily manage their transactions and stay on top of their finances. The app also provides <b>transaction history</b>, allowing users to view their past activities and keep track of their spending.
          </Typography>
          <br/>
          <Typography variant='h6'>
            In addition to basic banking functions, users can <b>create new accounts</b>, perform <b>fund transfers</b>, and <b>change their PINs</b>. They can also <b>update their personal details</b>, ensuring that their information is always up-to-date and accurate.
          </Typography>
          <br/>
          <Typography variant='h6'>
            Overall, this MERN-based banking app offers a comprehensive and user-friendly solution for managing finances. With its range of features and intuitive interface, users can easily manage their money, stay on top of their finances, and make transactions quickly and securely.
          </Typography>
          <br/>
          <Typography variant='h4'>
            Thanks for visiting!
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default About