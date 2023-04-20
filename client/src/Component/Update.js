import React, { useEffect } from 'react'
import { TextField,Button } from '@mui/material'
import { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'



const Update = () => {
  const [sNo,setSno] = useState([])
  const [name,setName] = useState([])
  const [venue,setVenue] = useState([])
  const [type,setType] = useState([])
  const [url,setURL] = useState([])
  const [date,setDate] = useState([])
  const navigate = useNavigate()
  const {id} = useParams()
  useEffect(()=>{
    getData();
},[])
  var getData = async()=>{
      var result= await axios.get(`http://localhost:8000/workshops/${id}`)
      setName(result.data.name)
      setVenue(result.data.venue)
      setType(result.data.type)
      setURL(result.data.url)
      setDate(result.data.date)
      setSno(result.data.serialNumber)
  }
  var updateWorkshop = async(upId)=>{
    var data = {"name":name,"venue":venue,"type":type,"date":date,"url":url,"serialNumber":sNo}
    var result = await axios.put(`http://localhost:8000/update/${id}`,{data})
    navigate('/home')
  }
  return (

    <div>
      <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-10' style={{ display: 'flex', justifyContent: 'center' }}>
          <img src='https://www.pinclipart.com/picdir/big/573-5739730_business-training-illustration-clipart.png' height='300px' />
        </div>
      </div>
      <br />
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
          <div className='row'>
            <div className='col-md-6'>
              <TextField id="standard-basic" label={name} variant="standard" size='large' fullWidth helperText="Please enter name for your Workshop" type='text' onInput={(e) => setName(e.target.value)} />
            </div>
            <div className='col-md-6'>
              <TextField id="standard-basic" label={venue} variant="standard" size='large' fullWidth helperText="Please enter Venue for your Workshop" type='text' onInput={(e) => setVenue(e.target.value)} />
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col-md-6'>
              <TextField id="standard-basic" label={type} variant="standard" size='large' fullWidth helperText="Online/In person" type='text' onInput={(e) => setType(e.target.value)} />
            </div>
            <div className='col-md-6'>
              <TextField id="standard-basic" label={url} variant="standard" size='large' fullWidth helperText="Please enter URL of your Workshop" type='text' onInput={(e) => setURL(e.target.value)} />
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col-md-6'>
              <TextField id="standard-basic" value={date} variant="standard" size='large' fullWidth helperText="Workshop Date" type='date' onInput={(e) => setDate(e.target.value)} />
            </div>
          </div>
          <br />
          <Button variant="outlined" onClick={() => updateWorkshop(id)} >Update Workshop</Button>
        </div>
        <br />
      </div>
    </div>
  )
}

export default Update