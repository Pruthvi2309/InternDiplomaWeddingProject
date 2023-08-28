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

  con.query('SELECT * FROM photography', (error, result) => {
    if (error) {
      res.send({message: 'Error in connecting to API' });
    } else {
      res.send(result);
    }
  });
})
  
// review in venue page

app.post("/review", (req, res) => {
  const data = req.body;
  
  var name = data.name;
  var category = data.category;
  con.query(`SELECT * FROM review where rfor = '${name}' AND rcategory='${category}'`, (error, result) => {
    if (error) {
      res.send({message: 'Error in connecting to API' });
      console.log(error); 
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
  var average = data.average;
  var category = data.category;
  var name = data.name;
  var first_letter = category[0].toLowerCase();
  delete data.average;
  delete data.category;
  delete data.name;
 
  con.query("insert into review SET ?",data,(error,result)=>{
    if (error) {
      console.error("Error inserting review:", error);
      res.send("Error inserting review");
  } else {
      
  }
  })
  con.query(`UPDATE ${category} SET ${first_letter}rating = ${average} WHERE  ${first_letter}name='${name}'`,data,(error,result)=>{
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

//create new package

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

// add to package

app.post("/addtopack", (req, res) => {
  const { name,id,category } = req.body;
  var vendor = name;
  var pid = id;
  var cat = category.toLowerCase();
  var first_letter = cat[0];
  var query = `SELECT * FROM packages WHERE pid = ${pid} `; // Start with a true condition
  
  con.query(query, (error, result) => {
    if (error) {
      res.send({message: 'Error in connecting to API ' });
      console.log(error);

    } else {
      var pname = result[0].pname;
      var pvendors = result[0].pvendors;
      var pprices = result[0].pprices;
      console.log("package found " + pname);
      con.query(`SELECT * FROM ${cat} WHERE ${first_letter}name = '${vendor}'`,(error,result)=>{
        if (error) {
          console.error("Error updating packages:", error);
          res.send("Error inserting review");
      } else {
        var price = result[0][first_letter+"price"]; 
        console.log(price);
        con.query(`UPDATE packages SET pvendors='${pvendors+","+vendor}', pprices = '${pprices+","+price}' WHERE pid=${pid}`,(error,result)=>{
          if (error) {
            console.error("Error updating packages:", error);
            res.send("Error inserting review");
        } else {
            res.send(result);
        }}); 
      }}); 
      
    }
  });
 
})

// remove item from package

app.post("/remove_item", (req, res) => {
  const {pname,vendor_arr,prices_arr} = req.body;
  console.log(pname);
  var query = `UPDATE packages SET pvendors='${vendor_arr}', pprices = '${prices_arr}' WHERE pname='${pname}'`
  console.log(query);
  con.query(query, (error, result) => {
    if (error) {
      res.send({ message: 'Error in connecting to API' });
    } else {
      res.send(result);
    }
  });
});

// filter for Photography Page

app.post("/photofilter", (req, res) => {
  const { rating, radio, budget } = req.body;
  var query = "SELECT * FROM photography WHERE 1"; // Start with a true condition
  
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
  var query = `SELECT * FROM photography where pname like '%${search}%'`
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

app.post("/package_details", (req, res) => {
  const data = req.body;
  var name = data.pname;
  console.log(name);
  con.query(`SELECT * FROM packages where pname = '${name}'`, (error, result) => {
    if (error) {
      res.send({message: 'Error in connecting to API' });
      console.log(error); 
    } else {
      res.send(result);
    }
  });
  
})

// vendor page

app.post("/vendor_details", (req, res) => {
  const data = req.body;
  console.log(data);
  var name = data.pname;
  console.log(data.vendor_name);
  var category = data.vname;
  var first_letter = category[0].toLowerCase();
  console.log(name);
  con.query(`SELECT * FROM ${category} where ${first_letter}name = '${name}'`, (error, result) => {
    if (error) {
      res.send({message: 'Error in connecting to API' });
      console.log(error); 
    } else {
      res.send(result);
    }
  });
  
})

// Profile Insert Data

app.post("/profilesetting",(req,res)=>{
  const data=req.body;
  console.log(data);
  con.query("insert into profilesetting SET ?",data,(error,result)=>{
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

// retrive existing data

app.post("/get_user_data", (req, res) => {
  // const name = req.body;
  con.query(`SELECT * FROM profilesetting where profname='Tanish'`, (error, result) => {
    if (error) {
      res.send({message: 'Error in connecting to API' });
      console.log(error);
    } else {
      res.send(result);
    }
  });
  
})

// filter for jewellery

app.post("/jwelleryfilter", (req, res) => {
  const { rating, budget, check } = req.body;
  var query = "SELECT * FROM jewellery WHERE 1"; // Start with a true condition
  
  // if (range >= 0) {
  //   var range_arr = [[0, 100], [100, 250], [250, 500], [500, 1000], [1000, 2000], [2000, 10000]]; 
  //   query = query + ` AND guest_capacity BETWEEN ${range_arr[range][0]} AND ${range_arr[range][1]}`;
  // }
  // /
  console.log("hi"+check);
  if (budget >= 0) {
    var budget_arr = [[0, 25000], [25000, 50000], [50000, 100000], [100000, 200000], [200000, 500000], [500000, 1000000]]; 
    query = query + ` AND jprice BETWEEN ${budget_arr[budget][0]} AND ${budget_arr[budget][1]}`;
  }
  if (check.length > 0) {
    query = query + ` AND type IN ('${check.join("','")}')`;
  }
  if (rating >= 0) {
    var rating_arr = [[0, 3], [3, 4], [4, 4.5], [4.5, 4.8], [4.8, 5]]; 
    query = query + ` AND jrating BETWEEN ${rating_arr[rating][0]} AND ${rating_arr[rating][1]}`;
    
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

// collecting data for jewellery

app.get("/jewellery", (req, res) => {

  con.query('SELECT * FROM jewellery', (error, result) => {
    if (error) {
      res.send({message: 'Error in connecting to API' });
    } else {
      res.send(result);
    }
  });
  
})

// search for jewellery

app.post("/searchjwell", (req, res) => {
  const search = req.body["search"];
  console.log(search);
  var query = `SELECT * FROM jewellery where jname like '%${search}%'`
  console.log(query);
  con.query(query, (error, result) => {
    if (error) {
      res.send({ message: 'Error in connecting to API' });
    } else {
      res.send(result);
    }
  });
});

app.listen(4000);