import { Add } from "@mui/icons-material";
import { Fab, Input } from "@mui/material";
import React from "react";
import {useRef} from "react";

const Form = ({setFiles}) => {
    const fileRef = useRef();
    const handleClick = ()=>{
        fileRef.current.click();
    };
    const hnadleChange=(e)=>{
      setFiles([...e.target.files])
      fileRef.current.value=null;
    };

  return (
    <form>
      <Input type="file" inputProps={{multiple:true}} sx={{ display: "none" }} inputRef={fileRef} onChange={hnadleChange}/>
      <Fab color="primary" aria-label="add" onClick={handleClick}>
        <Add fontSize="large" />
      </Fab>
    </form>
  );
};

export default Form;
