import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAuthorById } from '../api/requests';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Card } from 'antd';

const AuthorDetail = () => {
    const[author,setAutor]=useState({})
    const{id}=useParams();
    useEffect(()=>{
        getAuthorById(id).then(res=>{
            setAutor(res)
        })
    },[id])
  return (
    <>
 <Box sx={{ flexGrow: 1, width: "90%", margin: "25px auto" }}>
        <Grid container spacing={2}>
           <Grid key={author.id} item lg={3} md={6} sm={12}>
            <Card
              hoverable
              cover={
                <img
                  style={{
                    height: "250px",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                  alt="example"
                  src={author.ImageURL}
                />
              }
            >
              <Typography><Link to={`/author/${author.id}`} style={author.isDead?{"color":"red"}:{}}>{author.Name}</Link></Typography>
              <Typography>Birthyear:{author.Birthyear}</Typography>
              <Typography>Genre:{author.Genre}</Typography>
              <Typography>Gender:{author.isMale?"Male":"Female"}</Typography>
              <Button variant='contained' color='primary'> <Link style={{color:"white"}} to={'/authors'}>Go Back</Link> </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default AuthorDetail