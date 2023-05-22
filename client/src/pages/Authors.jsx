import { useState, useEffect } from "react";
import {Box,Button,Grid, Typography} from "@mui/material";
import { Card } from "antd";
import { deleteAuthorById, getAllAuthors } from "../api/requests";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Authors = () => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    getAllAuthors().then(res=>{
        setAuthors(res);
    })
  }, []);
  return (
    <>
      <Box sx={{ flexGrow: 1, width: "90%", margin: "25px auto" }}>
        <Grid container spacing={2}>
          {authors && authors.map((author)=>{
            return <Grid key={author.id} item lg={3} md={6} sm={12}>
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
              <Typography> <Link to={`/author/${author._id}`} style={author.isDead?{"color":"red"}:{}}>{author.Name}</Link></Typography>
              <Typography>Age:{2023-author.Birthyear}</Typography>
              <Typography>Genre:{author.Genre}</Typography>
              <Typography>Gender:{author.isMale?"Male":"Female"}</Typography>
              <Button onClick={()=>{
                  Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      setAuthors(authors.filter((x)=>x._id!==author._id))
                      Swal.fire(
                        `${author.Name} Deleted!`,
                        'Your author has been deleted.',
                        'success'
                      )
                      deleteAuthorById(author._id)
                     
                    }
                  })
                }
              } variant="outlined" color="warning">Delete</Button>
            </Card>
          </Grid>
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Authors;
