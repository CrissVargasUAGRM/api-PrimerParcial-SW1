import moongose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

//mongodb://localhost/${process.env.NAMEDB}
//mongodb+srv://cristhian:<password>@parcialsw1.xjjxv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb+srv://${process.env.USERDB}:${process.env.PASSDB}@parcialsw1.xjjxv.mongodb.net/${process.env.NAMEDB}?retryWrites=true&w=majority
//${process.env.URLPROD}
moongose.connect(`${process.env.URLPROD}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    }).then(db => console.log("Data Base is connected"))
      .catch(err => console.log(err)
);