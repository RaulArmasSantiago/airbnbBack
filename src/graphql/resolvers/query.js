// Mongodb Models
//import Movie from '../../models/Movie';
import User  from '../../models/Users';
import Catalogue from '../../models/Catalogue';

export default {

    // User
    async me(_, args, context, info){
        if (!context.user) throw new Error("Es necesario autenticarse");

        return User
            .findById(context.user._id)
            .then(user => {
                console.log( user.toObject() )
                return user.toObject() 
            })
            .catch(err => { throw err; })
    },

    async oneCatalogue(_, args, context, info){
        return await Catalogue.findById(args.data);
    },

    async allCatalogue(_, args, context, info){
        return await Catalogue.find();
    }
    /* Movie
    async oneMovie(_, { id }, context, info) {
        return await Movie.findById(id);
    },

    async allMovies() {
        return await Movie.find();
    },*/
}