import { Button } from "@mui/material";
import React from "react";

const AddAuthor = () => {
  return (
    <>
      <form action="http://localhost:8080/api/authors" method="POST">
        <input placeholder="enter name" type="text" name="Name" />
        <input placeholder="enter Birthyear" type="text" name="Birthyear" />
        <input placeholder="enter Genre" type="text" name="Genre" />
        <input placeholder="enter isDead" type="text" name="isDead"/>
        <input placeholder="enter isMale" type="text" name="isMale"/>
        <input placeholder="enter ImageURL " type="url" name="ImageURL" />
        <Button type="submit" variant=" ">Add new Auuthor</Button>
      </form>
    </>
  );
};

export default AddAuthor;
