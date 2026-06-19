import mongoose from "mongoose";

const watchSchema =  mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
        },
        price : {
            type : Number,
            required : true,
        },
        image : {
            type : String,
            required : true,
        },
        category : {
            type : String,
            required : true,
            enum : ['men', 'women']
        },
        brand : {
            type : String,
        },
        description : {
            type : String,
        },
    
    },
    {
        timestamps : true,
    },
)

const Watch = mongoose.model("Watch", watchSchema);

export default Watch;