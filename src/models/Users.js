import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema; 
const SALT_WORK_FACTOR = 10


const UserSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    birthdate:{
        type: Date
    },
    cellPhone:{
        type:String
    },
    natiolality:{
        type:String
    },
    img_uri:{
        type:String
    },
    posts:[{
        type:Schema.Types.ObjectId,
        ref:"Catalogue"
    }],
    reservations:[{
        type:Schema.Types.ObjectId,
        ref:"Reservations"
    }],
    saved:[{
        type:Schema.Types.ObjectId,
        ref:"Catalogue"
    }]
},{'collection':'User', 'timestamps':true});

// https://mongoosejs.com/docs/middleware.html#pre
UserSchema.pre('save', function (next) {

    // Documento que será guardado
    let user = this

    // Si el documento no modifica/crea password, continuamos 
    if (!user.isModified('password')) { return next(); }

    // De lo contrario, encriptamos el password del usuarioy lo seteamos al documento (user) que se guardará
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err)
        bcrypt.hash(user.password, salt, async function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        })
    })
});

// Agregamos un método para comparar contraseñas
UserSchema.methods.comparePassword = function (candidate, cb) {
    //console.log(this.password)
    bcrypt.compare(candidate, this.password, function (err, isMatch) {
        cb(err, isMatch)
    })
}
const User = mongoose.model('User', UserSchema);
export default User;