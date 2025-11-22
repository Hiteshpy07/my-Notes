const express=require('express');
const app=express();
const fs=require('fs')
const cors=require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    fs.readdir('./notes', function(err,files){
        console.log(files)
    })
})
app.post("/create-note", (req, res) => {
  console.log(req.body);
  res.json({ message: "Data received", data: req.body });

  //creating file to store the notes 
  let title=req.body.title;
  let body=req.body.body;
  fs.writeFile('./notes/'+title.split(' ').join('')+".txt", body, function (err){
    if (err){
        console.log(err);
    }else{
      console.log("File created successfully");
    }
  })
  })
  app.get('/create-notes',(req,res)=>{
    fs.readdir('./notes', function(err,files){
        res.json({files:files})
    })

    app.delete('/delete-note/:filename',(req,res)=>{
      const filename=req.params.filename;
      console.log(`${filename} is to be deleted`)
      fs.unlink(`./notes/${filename}`, function(err){
        if (err){
            console.log(err);
        }else{
          console.log("File deleted successfully");
        }})
}
    )

  })



app.listen(3000)






