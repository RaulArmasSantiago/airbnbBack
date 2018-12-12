import express from 'express';
import 'dotenv/config'
//Atlas cluster connection
import './db/mongoController';
//Apollo Graphql Server
import ApolloServer from './graphql/schema';

const app = express();
const PORT = process.env.PORT || 5000;


/*
app.post('/api/login', (req,res)=>{
    const user = {
        "name":"Raul",
        "last_name":"Armas Santiago",
        "mail":"raul.armas@sento40.io"
    }

    jwt.sign({user}, 'secretkey', (err, token)=>{
        res.send({
            "message":"logged-in succesfuly",
            "userData": user,
            "token":token
        });
    })
});*/
//Middleware: GraphQL
ApolloServer.applyMiddleware({app});

app.get('/', (req,res) => {
    res.send("Estoy funcionando :P")
})

app.listen(PORT,() =>{
    console.log("Magic Happens in port: "+PORT)
})