
{/* login session maintain krne keliye */}
{/* npm install jsonwebtoken */}

// files upload krne keliye
// npm install multer

let myExpress =  require('express');
const multer  = require('multer');
let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ikramniazi4050:ikram1234@cluster0.2s9ljh9.mongodb.net/meri-achi-db').then(function(come){console.log(come)}).catch(function(error){console.log(error)});


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
      
//         cb(null, './mera-upload')

//     },
//     filename: function (req, file, cb) {      
//       cb(null, file.originalname)
//     }
//   })
  
//   const upload = multer({ storage: storage })


let app = myExpress();

app.use(myExpress.json())

// npm install appkiLibraryKName -g(global, har folder m library available cahhiye)


// npm install appkiLibraryKName appkiLibraryKName2 appkiLibraryKName3
// npm uninstall appkiLibraryKName

// npm
// node packge manager
// library/plugins manager

// REST AO

app.get('/login', (req, res)=>{
    res.end("yeh login tha")
})

let users = [
    {
        id:100,
        name:'farhan',
        password:'3232',
        city:'Faisalabad'
    },
    {
        id:102,
        name:'rameez',
        password:'1234',
        city:'Lahore'
    }
];

app.get('/get-user-by-id', (req, res)=>{

    let user  = users.find(user=>user.id == req.query.some);

    res.json(user);

});

    // let a = require('./data')
    // a.

app.put('/update-user', (req, res)=>{
    let index = users.findIndex(user=>user.id == req.body.id);
    users[index] = req.body;
    console.log(req.body)
})

app.get('/users-lao', (req, res)=>{

    // res.end()
    // yeh string send karta
    // res.sendFile()
    // yeh file send karta h 
    // res.json()
    //  yeh js wali koi bhi cheez like array ya object wagera

    res.json(users);


} )

app.delete('/delete-user', (req, res)=>{

    let index = users.findIndex(function(user){

        if(user.name ==  req.query.abc){
            return true;
        }

    })

    if(index != -1){
    users.splice(index, 1)
    }

    res.json({
        success:true
    })

    console.log(req.query.abc)
})

app.post('/create-user',  (req, res)=>{
    
    let userParaHua = users.find(function(user){

        if(user.name.toLowerCase() == req.body.name.toLowerCase()){
            return true
        }

    })

    if(userParaHua){

    res.status(409).json({});

    }else{


        req.body.img = req.files[0].originalname;

        users.push(req.body);

        res.json({success:true});
    }
   
    console.log(req.body)
    console.log('data awat');
});

// app.get('/', (incoming, outgoing)=>{

//     console.log(incoming.ip);
    
//     outgoing.end('ok hogya')

// })

// myExpress.static()
// yeh express ko btata h kay kis folder m aapne files ko dekhna ha

let fileServer = myExpress.static('./build');

app.use(fileServer);
app.use(myExpress.static('./mera-upload'));

app.listen(9000, ()=>{
    console.log('server chaling')
})




// console.log('server is chaling')


// same language as JS
// much faster as compared to PHP wagera
// needs much cheaper hardware

//  deliver website ki files
// website ko backend se data communicate krwana
