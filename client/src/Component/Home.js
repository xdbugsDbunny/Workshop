import React, { useState } from 'react'
import axios from 'axios'
import { Button,Box } from '@mui/material'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {
    const [data,setData] = useState([])
    var getData = async () => {
        var result = await axios.get("http://localhost:8000/workshops")
        setData(result.data)
    }
    useEffect(()=>{
        getData();
    },[])

    var deleteData = async(id) =>{
        var result = await axios.delete(`http://localhost:8000/workshops/${id}`)
        getData()
    }

    return (
        <div className="row">
            {data.map(row =>
                <div className="col-md-3" style={{display:'flex',justifyContent:'center'}}>
                    <div className="card">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-training-workshop-and-courses-visualization-2706189-2261424.png" className="card-img-top" height="250px" width="150px" />
                        <div className="card-body">
                            <Box display='flex' flexDirection='row' justifyContent='space-between'> 
                                <h5 className="card-title">{row.name}</h5>
                                <p className="card-text">{row.venue}</p>
                            </Box>
                                <p className="card-text">{row.date}</p>
                            <Box display='flex' flexDirection='row' justifyContent='space-between'> 
                                <a href={row.url} >Visit Us</a>
                                <Box>
                                    <Button><Link to={`/update/${row._id}`}><EditIcon/></Link></Button>
                                    <Button onClick={()=>deleteData(row._id)}><DeleteIcon/></Button>
                                </Box>
                            </Box>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home