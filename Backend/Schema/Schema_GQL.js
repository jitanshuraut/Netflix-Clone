import gql from "graphql-tag";

const typeDefs = gql`
  type Movie_Tv {
    Type: String
    backdrop_path: String
    genre_ids: [Int]
    id: Int
    original_language: String
    original_title: String
    overview: String
    popularity: Float
    poster_path: String
    release_date: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
    with_genres: Int
  }

  type KnownFor {
    adult: Boolean
    backdrop_path: String
    id: ID
    title: String
    original_language: String
    original_title: String
    overview: String
    poster_path: String
    media_type: String
    genre_ids: [Int]
    popularity: Float
    release_date: String
    video: Boolean
    vote_average: Float
    vote_count: Int
  }

  type CastMember {
    adult: Boolean
    gender: Int
    id: ID
    known_for_department: String
    name: String
    original_name: String
    popularity: Float
    profile_path: String
    cast_id: Int
    character: String
    credit_id: String
    order: Int
  }

  type Person {
    adult: Boolean
    id: ID
    name: String
    original_name: String
    media_type: String
    popularity: Float
    gender: Int
    known_for_department: String
    profile_path: String
    known_for: [KnownFor]
  }

  type Genre {
    id: Int
    name: String
  }

  type ProductionCompany {
    id: Int
    logo_path: String
    name: String
    origin_country: String
  }

  type ProductionCountry {
    iso_3166_1: String
    name: String
  }

  type SpokenLanguage {
    english_name: String
    iso_639_1: String
    name: String
  }

  type Details_Movie {
    adult: Boolean
    backdrop_path: String
    belongs_to_collection: String
    budget: Int
    genres: [Genre]
    homepage: String
    id: Int
    imdb_id: String
    original_language: String
    original_title: String
    overview: String
    popularity: Float
    poster_path: String
    production_companies: [ProductionCompany]
    production_countries: [ProductionCountry]
    release_date: String
    revenue: Int
    runtime: Int
    spoken_languages: [SpokenLanguage]
    status: String
    tagline: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
    hour: String
    min: String
  }

  type Like_Content {
    _id: String
    id_user: String
    id_content: [String]
  }

  type Dislike_Content {
    _id: String
    id_user: String
    id_content: [String]
  }

  type ListSchema {
    _id: String
    id_user: String
    name: String
    list_val: [String]
  }

  type user {
    id: ID!
    email: String!
    _id: ID!
    name: String!
    subscription: Boolean!
  }

  type Video {
    name: String
    key: String
    site: String
    size: Int
    type: String
    official: String
    published_at: String
    id: String
  }

  type Query {
    discoverMovies_Tv(pageMovt: Int,TypeMovt: String,with_genres: Int): [Movie_Tv]
    tredingMovie_Tv(page: Int, Type: String): [Movie_Tv]
    upcomingMovies(pageUPcom: Int): [Movie_Tv]
    PopularCast(page: Int): [Person]
    FindCast(MovieID: Int): [CastMember]
    TopRated(pageRated: Int, TypeRated: String): [Movie_Tv]
    Details_Movie_Tv(MovieID: Int): [Details_Movie]
    Video(MovieID: Int): [Video]
    User(id: String): [user]
    MovList_user(id: String): [ListSchema]
    Dislike_Content(id: String): [Dislike_Content]
    Like_Content(id: String): [Like_Content]
    Get_MovList_user(id_user: String): [ListSchema]
    Get_user(email: String): [user]
  }

  type Mutation {
    create_user(name: String!, email: String!, subscription: Boolean!): user!
    create_MovList_user(name: String,id_user: String,list_val: String): ListSchema
    update_MovList_user(name: String,id_user: String,list_val: String): ListSchema
    delete_MovList_user(_id: String,name: String,id_user: String): ListSchema
    update_Like_Content(id_user: String,id_content: String): Like_Content
    update_Dislike_Content(_id: String,id_user: String,id_content: String): Dislike_Content
  }
`;

export default typeDefs;
