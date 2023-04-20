import React, { useState } from 'react'
import { TextField,Button } from '@mui/material'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const Create = () => {

    const [name,setName] = useState([])
    const [venue,setVenue] = useState([])
    const [type,setType] = useState([])
    const [url,setURL] = useState([])
    const [date,setDate] = useState([])

    const navigate = useNavigate()
    var insert = async()=>{
        var getData= await axios.get("http://localhost:8000/workshops")
        var data={"name":name,"type":type,"venue":venue,"url":url,"date":date}
        await axios.post("http://localhost:8000/create",data);
        navigate("/home")
    }
  return (
    <div>
        <div className='row'>
            <div className='col-md-1'></div>
            <div className='col-md-10' style={{display:'flex',justifyContent:'center'}}>
                <img src='https://www.pinclipart.com/picdir/big/573-5739730_business-training-illustration-clipart.png' height='300px' />
            </div>
        </div>
        <br/>
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
                <div className='row'>
                    <div className='col-md-6'>
                        <TextField id="standard-basic" label="Workshope Name" variant="standard" size='large' fullWidth helperText="Please enter name for your Workshop" type='text' onInput={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <TextField id="standard-basic" label="Workshope Venue" variant="standard" size='large' fullWidth helperText="Please enter Venue for your Workshop" type='text' onInput={(e)=>setVenue(e.target.value)}/>
                    </div>
                </div>
                <br/>
                <div className='row'>
                    <div className='col-md-6'>
                        <TextField id="standard-basic" label="Workshope Type" variant="standard" size='large' fullWidth helperText="Online/In person" type='text' onInput={(e)=>setType(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <TextField id="standard-basic" label="Workshope URL" variant="standard" size='large' fullWidth helperText="Please enter URL of your Workshop" type='text' onInput={(e)=>setURL(e.target.value)}/>
                    </div>
                </div>
                <br/>
                <div className='row'>
                    <div className='col-md-6'>
                        <TextField id="standard-basic"  variant="standard" size='large' fullWidth helperText="Workshop Date" type='date' onInput={(e)=>setDate(e.target.value)}/>
                    </div>
                </div>
                <br/>
                <Button variant="outlined" onClick={()=>insert()} >Create Workshop</Button>
            </div>
            <br/>
        </div>
    </div>
  )
}

export default Create