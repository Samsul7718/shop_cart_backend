# 1.Project SetUp

### 1.1 Backend

  1.1.1 Create a folder open it with vscode . Now create another 2 folder inside main folder(frontend, backend)
  
  1.1.2 Open terminal and type cd/backend(select backend folder)
  
  1.1.3 Then type npm init and pass yes and enter,automatically install the package.json
  
  1.1.4 After that type npm i express(to create the express js)
  
  1.1.5 Then select backend and create a file named index.js
  
  1.1.6 inside the index.js we import express

      import express from "express"
      const app=express()
      app.get("/",(req,res)=>{
          res.send("Server is Ready to Serve")
      })
      const port =process.env.PORT || 3000

       app.listen(port,(req,res)=>{
           console.log(`Server running at http://localhost:${port}`) 
      })


   1.1.7 Now go to package.json inside script (update test into start)

      "script":{
        "start":"node index.js"
      },

   1.1.8 After main

       "type":"module",


   1.1.9 Now type in console: npm run start    (to run the backend)

        you will get a url where the server will be running 
        click on the link and check the server is running or not.
