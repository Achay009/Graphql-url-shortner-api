import express from 'express';
import graphqlExpress from 'express-graphql';
import  mongoose  from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import schema from './graphql/schema.js';
import api from './api/routes/index.js';
import GraphqlContext from './api/middleware/GraphqlContext.js';
import dotenv from 'dotenv'
// import {RedirectUrl} from './api/Controllers/UrlController.js'
const app = express();
const {graphqlHTTP} = graphqlExpress;
dotenv.config()

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


let db = mongoose.connection

db.once('open', function () {
    console.log('Database has connected')
})
db.once('error', function () {
    console.log('oops an error occurred')
})

app.use(cors());
app.use(morgan('combined'));


app.use('/graphiql', graphqlHTTP((req, res, graphQLParams) => ({
    schema : schema,
    graphiql : true,
    context: {
        req
    },
})));

app.use('/', api);

app.use((err, req, res, next) => {
    if (! err.status) {
        res.status(500)
    }else {
        res.status(err.status);
    }
    res.json({
        message : err.message,
        stack : err.stack
    })
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Listening on Port http://localhost:${port}`);
});