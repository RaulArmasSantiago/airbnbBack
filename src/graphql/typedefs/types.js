// Imports: GraphQL
import { gql } from 'apollo-server-express';

// GraphQL: TypeDefs
const TYPEDEFS = gql`

scalar ObjectID

#TYPES
type AuthToken {
    token:String
}

type User {
    _id:ObjectID
    name:String
    lastname:String
    email:String
    birthdate:String
    cellPhone:String
    nationality:String
    img_uri:String
    #post:[Catalogue]
    #reservations:[Reservation]
    #saved:[Catalogue]
}

type Characteristics{
    capacity:Int
    bedrooms:Int
    beds:Int
    bathrooms:Int
}

type Accommodation{
    characteristics:Characteristics
    services:[String]
    price:Int
}

type Restaurants{
    social:[String]
    schedules:[String]
    espciality:String
}

type Location{
    lat:String,
    lng:String
}

type Catalogue {
    _id:ObjectID
    name:String,
    rating:Float
    description:String,
    tipo:String
    accommodations:Accommodation
    restaurants:Restaurants
    url_images:[String]
    location:Location
    comments:[String]
    host:String
}

#INPUTS
input UserInput {
    name:String!
    lastname:String!
    email:String!
    password:String!
    birthdate:String
    cellPhone:String
    nationality:String
    img_uri:String
    #post:[Catalogue]
    #reservations:[Reservation]
    #saved:[Catalogue]
}

input CharacteristicsInput{
    capacity:Int
    bedrooms:Int
    beds:Int
    bathrooms:Int
}

input AccommodationInput{
    characteristics:CharacteristicsInput
    services:[String]
    price:Int
}

input RestaurantsInput{
    social:[String]
    schedules:[String]
    espciality:String
}

input LocationInput{
    lat:String
    lng:String
}

input CatalogueInput {
    name:String!,
    rating:Float
    description:String!,
    tipo:String!
    accommodations:AccommodationInput
    restaurants:RestaurantsInput
    url_images:[String]
    location:LocationInput
    comments:[String]
    host:String!
}

type Query {

  # User
  me: User
  
  #Catalogue
  oneCatalogue(id: ObjectID ) : Catalogue
  allCatalogue: [Catalogue]


  # Movies
  #oneMovie(id: ObjectID) : Movie
  #allMovies: [Movie]
}

type Mutation {

  # User
  signup(data:UserInput!) : AuthToken
  login(email:String!,password:String!):AuthToken

  #Catalogue
  createCatalogue(input: CatalogueInput) : Catalogue
  deleteCatalogue(id: ObjectID) : String

  # Movie
  #createMovie(input: MovieInput) : Movie
  #updateMovie(id: ObjectID, input: MovieInput) : Movie
  #deleteMovie(id: ObjectID) : String
}
`;

// Exports
export default TYPEDEFS;