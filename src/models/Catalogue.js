import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const CatalogueSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    rating:{
        type:[Number]
    },
    description:{
        type:String,
        required:true
    },
    tipo:{
        type:String,
        required:true
    },
    accommodation:{
        characteristics:{
            capacity:{
                type:Number,
            },
            bedrooms:{
                type:Number,
            },
            beds:{
                type:Number,
            },
            bathrooms:{
                type:Number,
            }
        },
        services:[{
            type:String,
        }],
        price:{
            type:Number,
        }
    },
    restaurants:{
        social:[{
            type:String
        }],
        schedules:[{ //Horario
            type:String,
            required:true
        }],
        espciality:{
            type:String
        }
    },
    url_images:[{ 
        type:String
    }],
    location:{
        lat:{
            type:String,
        },
        lng:{
            type:String,
        }   
    },
    comments:[{
        type:String
    }],
    host:{
        type:String,
        required:true
    },
    
},{'collection':'Catalogue', 'timestamps':true});

const Catalogue = mongoose.model('Catalogue', CatalogueSchema);

export default Catalogue;