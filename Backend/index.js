const express=require('express');
const fs = require('fs');
const app=express();
const con=require("./config");
const cors=require('cors');
app.use(express.json());
app.use(cors());
const path = require('path'); 
const { log } = require('console');

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

// data for venues

app.get("/venue", (req, res) => {

  con.query('SELECT * FROM venues', (error, result) => {
    if (error) {
      res.send({message: 'Error in connecting to API' });
    } else {
      res.send(result);
    }
  });
  
})

// filter 

app.post("/filter", (req, res) => {
  const { range, radio, check, budget } = req.body;
  var query = "SELECT * FROM venues WHERE 1"; // Start with a true condition
  
  if (range >= 0) {
    var range_arr = [[0, 100], [100, 250], [250, 500], [500, 1000], [1000, 2000], [2000, 10000]]; 
    query = query + ` AND guest_capacity BETWEEN ${range_arr[range][0]} AND ${range_arr[range][1]}`;
  }
  if (budget >= 0) {
    var budget_arr = [[0, 25000], [25000, 50000], [50000, 100000], [100000, 200000], [200000, 500000], [500000, 1000000]]; 
    query = query + ` AND price BETWEEN ${budget_arr[budget][0]} AND ${budget_arr[budget][1]}`;
  }
  if (check.length > 0) {
    query = query + ` AND vcategory IN ('${check.join("','")}')`;
  }
  if (radio >= 0) {
    var radio_arr = [[0, 3], [3, 4], [4, 4.5], [4.5, 4.8], [4.8, 5]]; 
    query = query + ` AND vrating BETWEEN ${radio_arr[radio][0]} AND ${radio_arr[radio][1]}`;
    
  }

  console.log(query);
  con.query(query, (error, result) => {
    if (error) {
      res.send({ message: 'Error in connecting to API' });
    } else {
      res.send(result);
    }
  });
});

// search

app.post("/search", (req, res) => {
  const search = req.body["search"];
  console.log(search);
  var query = `SELECT * FROM venues where vname like '%${search}%'`
  console.log(query);
  con.query(query, (error, result) => {
    if (error) {
      res.send({ message: 'Error in connecting to API' });
    } else {
      res.send(result);
    }
  });
});


//data for single venue

app.post("/id_venue", (req, res) => {
  const data = req.body;
  id = data.vid;
  con.query(`SELECT * FROM venues where vid = ${id}`, (error, result) => {
    if (error) {
      res.send({message: 'Error in connecting to API' });
    } else {
      res.send(result);
    }
  });
  
})

// data for photographer

app.get("/photographer", (req, res) => {

  con.query('SELECT * FROM photographer', (error, result) => {
    if (error) {
      res.send({message: 'Error in connecting to API' });
    } else {
      res.send(result);
    }
  });
})
  
// review in venue page

app.get("/review", (req, res) => {

    con.query('SELECT * FROM review ', (error, result) => {
      if (error) {
        res.send({message: 'Error in connecting to API' });
      } else {
        res.send(result);
      }
    });
  })

// request booking in venue

app.post("/request",(req,res)=>{
  const data=req.body;
  console.log(data);
  con.query("insert into request_booking SET  ?",data,(error,result)=>{
      if(error)
      {
          res.send("error in connecting api")
      }
      else
      {
          res.send("data sent")
      }
  })
 
});

// add review in database

app.post("/addreview",(req,res)=>{
  const data  =req.body;
  console.log(data);
  con.query("insert into review SET ?",data,(error,result)=>{
    if (error) {
      console.error("Error inserting review:", error);
      res.send("Error inserting review");
  } else {
      res.send(result);
  }
  })
});

// display existing packages from packages table

app.get("/packages", (req, res) => {

  con.query('SELECT * FROM packages ', (error, result) => {
    if (error) {
      res.send({message: 'Error in connecting to API' });
    } else {
      res.send(result);
    }
  });
})

app.post("/createpackage", (req, res) => {
  const { pname,venue_name } = req.body;
  var vname = venue_name;
  var query = `SELECT * FROM venues WHERE vname LIKE '%${vname}%'`; // Start with a true condition
  
  con.query(query, (error, result) => {
    if (error) {
      res.send({message: 'Error in connecting to API' });
    } else {
      console.log("venue found");
      con.query("insert into packages SET ?",{pname,venue_name},(error,result)=>{
        if (error) {
          console.error("Error inserting review:", error);
          res.send("Error inserting review");
      } else {
          res.send(result);
      }}); 
    }
  });
 
})

// filter for Photography Page

app.post("/photofilter", (req, res) => {
  const { rating, radio, budget } = req.body;
  var query = "SELECT * FROM photographer WHERE 1"; // Start with a true condition
  
  if (radio >= 0) {
    var radio_arr = ["Beginner","Intermediate","Experienced"]; 
    query = query + ` AND plevel = '${radio_arr[radio]}' `;
  }
  if (budget >= 0) {
    var budget_arr = [[0, 25000], [25000, 50000], [50000, 100000], [100000, 200000], [200000, 500000], [500000, 1000000]]; 
    query = query + ` AND pprice BETWEEN ${budget_arr[budget][0]} AND ${budget_arr[budget][1]}`;
  }
  if (rating >= 0) {
    var rating_arr = [[0, 3], [3, 4], [4, 4.5], [4.5, 4.8], [4.8, 5]]; 
    query = query + ` AND prating BETWEEN ${rating_arr[rating][0]} AND ${rating_arr[rating][1]}`; 
  }

  console.log(query);
  con.query(query, (error, result) => {
    if (error) {
      res.send({ message: 'Error in connecting to API' });
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

//search for photographer

app.post("/photographysearch", (req, res) => {
  const search = req.body["search"];
  console.log(search);
  var query = `SELECT * FROM photographer where pname like '%${search}%'`
  console.log(query);
  con.query(query, (error, result) => {
    if (error) {
      res.send({ message: 'Error in connecting to API' });
    } else {
      res.send(result);
    }
  });
});

//collecting data makeup page
app.get("/makeup", (req, res) => {

  con.query('SELECT * FROM makeup', (error, result) => {
    if (error) {
      res.send({message: 'Error in connecting to API' });
    } else {
      res.send(result);
    }
  });
  
})

//filter makeup

app.post("/makeupfilter", (req, res) => {
  const { rating, radio, budget } = req.body;
  var query = "SELECT * FROM makeup WHERE 1"; // Start with a true condition
  
  if (radio >= 0) {
    var radio_arr = ["Beginner","Intermediate","Experienced"]; 
    query = query + ` AND mlevel = '${radio_arr[radio]}' `;
  }
  if (budget >= 0) {
    var budget_arr = [[0, 25000], [25000, 50000], [50000, 100000], [100000, 200000], [200000, 500000], [500000, 1000000]]; 
    query = query + ` AND mprice BETWEEN ${budget_arr[budget][0]} AND ${budget_arr[budget][1]}`;
  }
  if (rating >= 0) {
    var rating_arr = [[0, 3], [3, 4], [4, 4.5], [4.5, 4.8], [4.8, 5]]; 
    query = query + ` AND mrating BETWEEN ${rating_arr[rating][0]} AND ${rating_arr[rating][1]}`; 
  }

  console.log(query);
  con.query(query, (error, result) => {
    if (error) {
      res.send({ message: 'Error in connecting to API' });
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

// search makeup

app.post("/makeupsearch", (req, res) => {
  const search = req.body["search"];
  console.log(search);
  var query = `SELECT * FROM makeup where mname like '%${search}%'`
  console.log(query);
  con.query(query, (error, result) => {
    if (error) {
      res.send({ message: 'Error in connecting to API' });
    } else {
      res.send(result);
    }
  });
});

//filter food

app.post("/foodfilter", (req, res) => {
  const { rating, check, budget } = req.body;
  var query = "SELECT * FROM food WHERE 1"; // Start with a true condition
  
  // if (radio >= 0) {
  //   var radio_arr = ["Beginner","Intermediate","Experienced"]; 
  //   query = query + ` AND plevel = '${radio_arr[radio]}' `;
  // }
  if (budget >= 0) {
    var budget_arr = [[0, 800], [800, 2000], [2500, 3000], [3600, 4800], [4800, 5000], [5100, 6000]]; 
    query = query + ` AND fprice BETWEEN ${budget_arr[budget][0]} AND ${budget_arr[budget][1]}`;
  }
  if (rating >= 0) {
    var rating_arr = [[0, 3], [3, 4], [4, 4.5], [4.5, 4.8], [4.8, 5]]; 
    query = query + ` AND frating BETWEEN ${rating_arr[rating][0]} AND ${rating_arr[rating][1]}`; 
  }
  if (check.length > 0) {
    query = query + ` AND ffillings IN ('${check.join("','")}')`;
  }

  console.log(query);
  con.query(query, (error, result) => {
    if (error) {
      res.send({ message: 'Error in connecting to API' });
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

//search for food

app.post("/foodsearch", (req, res) => {
  const search = req.body["search"];
  console.log(search);
  var query = `SELECT * FROM food where fname like '%${search}%'`
  console.log(query);
  con.query(query, (error, result) => {
    if (error) {
      res.send({ message: 'Error in connecting to API' });
    } else {
      res.send(result);
    }
  });
});

//food page

app.get("/food", (req, res) => {

  con.query('SELECT * FROM food', (error, result) => {
    if (error) {
      res.send({message: 'Error in connecting to API' });
    } else {
      res.send(result);
    }
  });
  
})

// package details

app.get("/package_details", (req, res) => {

  con.query('SELECT * FROM package', (error, result) => {
    if (error) {
      res.send({message: 'Error in connecting to API' });
    } else {
      res.send(result);
    }
  });
  
})

app.listen(4000);