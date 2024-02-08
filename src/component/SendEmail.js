import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import axios from 'axios';
import { Button } from '@mui/material';
function SendEmail() {
    const mystyle={
        margin:"15px"
    }
    const [myemail,setMyEmail]= useState();
    const [recipientEmail,setRecipientEmail]= useState();
    const [myAppPassword,setMyAppPassword]= useState();
    const [subject,setSubject]= useState();
    const [message,setMessage]= useState();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log("click")
        if(!myemail || !recipientEmail || !myAppPassword || !subject || !message){
            alert("all field required");
        }
        else{
            const response = await axios.post("https://assignment-backend-ovi3.onrender.com/api/send-email/",{
                "myemail":myemail,
                "mypassword":myAppPassword,
                "recipient": recipientEmail,
                "subject": subject,
                "message": message
            })
            
            alert("email has sent")
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Stack style={{width:'30%',display:"flex", justifyContent:"center", alignItems:"center",margin:'auto'}}>
            <h2>Send email to any one</h2>
            <TextField id="outlined-basic" label="your email" onChange={(e)=>setMyEmail(e.target.value)} variant="outlined" style={mystyle} />
            <TextField id="filled-basic" label="Your app password" type="password" variant="outlined" onChange={(e)=>setMyAppPassword(e.target.value)} style={mystyle}/>
            <TextField id="standard-basic" label="Reciepient email" variant="outlined" onChange={(e)=>setRecipientEmail(e.target.value)} style={mystyle}/>
            <TextField id="standard-basic" label="subject of email" variant="outlined" onChange={(e)=>setSubject(e.target.value)} style={mystyle}/>
            <TextField id="standard-basic" label="message" variant="outlined"onChange={(e)=>setMessage(e.target.value)} style={mystyle}/>
            <Button variant="contained" onClick={handleSubmit}>Send mail</Button>
      </Stack>
      </form>
    </div>
  )
}

export default SendEmail
