module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");


  
    var router = require("express").Router();

    // router.get("/", (req, res) => {
    //   res.setHeader("Access-Control-Allow-Origin", "*")
    //   res.setHeader("Access-Control-Allow-Credentials", "true");
    //   res.setHeader("Access-Control-Max-Age", "1800");
    //   res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
    //   res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    //    });  
  //   app.all('/', function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //   next()
  // });

  // app.get('/', function(req, res, next) {
  //   // Handle the get for this route
  // });
  // app.post('/', function(req, res, next) {
  //   // Handle the post for this route
  // })
  
    // Create a new Tutorial
    router.post("/", tutorials.create);
  
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
  
    // Create a new Tutorial
    router.delete("/", tutorials.deleteAll);
  
    app.use('/api/tutorials', router);
  };