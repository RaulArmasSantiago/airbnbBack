// Mongodb Models
//import Movie from '../../models/Movie';
import User  from '../../models/Users';

// Utilities
import createToken      from '../../utils/createToken';
import comparePasswords from '../../utils/comparePasswords';
import Catalogue from '../../models/Catalogue';

export default {

    // User
    async signup(_, args, context, info){
        return await User
                .create(args.data)
                .then(user => {
                    let token = createToken(user)
                    return { token }
                })
                .catch(err => {
                    throw new Error(err)
                })
    },

    async login(_, args, context, info){
        return await comparePasswords(args.email, args.password)
            .then(token => { return { token } })
            .catch(err => { throw err })
    },

    async createCatalogue(_, {input}, context){
        if(!context.user) { throw new Error('Necesitas autenticarte...')}

        return await Catalogue
            .create(input)
            .then(catalogue => { return catalogue.toObject() })
            .catch(err => { throw err })
    },
    
    async deleteCatalogue(root, { id }) {
        return await Catalogue
            .findByIdAndDelete(id)
            .then(() => 'Eliminado exitosamente')
            .catch(errr => { throw err });
    }



    /* Movie
    async createMovie(_, { input }, context) {

        if(!context.user) { throw new Error('Necesitas autenticarte...')}

        return await Movie
            .create(input)
            .then(movie => { return movie.toObject() })
            .catch(err => { throw err })
    },

    async updateMovie(root, { id, input }) {
        return await Movie
            .findOneAndUpdate(id, { $set: input }, { new: true })
            .then(updatedMovie => { return updatedMovie })
            .catch(err => { throw err });
    },

    async deleteMovie(root, { id }) {
        return await Movie
            .findByIdAndDelete(id)
            .then(() => 'Eliminado exitosamente')
            .catch(errr => { throw err });
    }*/
}