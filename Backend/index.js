const express=require('express');
const app=express();
const con=require("./config");
const cors=require('cors');
app.use(express.json());
app.use(cors());

// sign-up page

app.post("/signup",(req,res)=>{
    const data=req.body;
    con.query("insert into user_info SET?",data,(error,result)=>{
        if(error)
        {
            res.send("error in connecting api")
        }
        else
        {
            res.send(result)
        }
    })
   
 });

//  login page

app.post('/login', (req, res) => {
    const { uname, password } = req.body;
    
    con.query('SELECT * FROM user_info WHERE uname = ? AND password = ?', [uname, password], (error, result) => {
      if (error) {
        res.send({ success: false, message: 'Error in connecting to API' });
      } else {
        if (result.length === 1) {
          res.send({ success: true, message: 'Login successful' });
        } else {
          res.send({ success: false, message: 'Invalid credentials' });
        }
      }
    });
  });

app.listen(4000);