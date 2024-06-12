import dotenv from "dotenv";
import { User, List, Like, Dislike } from "../Schema/Schema_MongoDb.js";
import { v4 as uuidv4 } from "uuid";
dotenv.config();
const TMDB_API_KEY = process.env.TMDB_API_KEY;
import axios from "axios";

const resolvers = {
  Query: {
    discoverMovies_Tv: async (_, { pageMovt, TypeMovt, with_genres }) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/${TypeMovt}`,
          {
            params: {
              api_key: TMDB_API_KEY,
              language: "en-US",
              page: pageMovt,
              with_genres: with_genres,
            },
          }
        );

        return response.data.results.map((Moviess) => ({
          id: Moviess.id.toString(),
          original_title: Moviess.original_title || Moviess.original_name,
          popularity: Moviess.popularity,
          genre_ids: Moviess.genre_ids,
          backdrop_path: Moviess.backdrop_path,
          original_language: Moviess.original_language,
          overview: Moviess.overview,
          poster_path: Moviess.poster_path,
          release_date: Moviess.release_date || Moviess.first_air_date,
          title: Moviess.title || Moviess.original_name,
          vote_average: Moviess.vote_average,
        }));
      } catch (error) {
        throw new Error(error);
      }
    },
    Video: async (_, { MovieID }) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${MovieID}/videos`,
          {
            params: {
              api_key: TMDB_API_KEY,
              language: "en-US",
            },
          }
        );

        return response.data.results.map((Moviess) => ({
          name: Moviess.name,
          key: Moviess.key,
          site: Moviess.site,
          size: Moviess.size,
          type: Moviess.type,
          official: Moviess.official,
          published_at: Moviess.published_at,
          id: Moviess.id.toString(),
        }));
      } catch (error) {
        throw new Error(error);
      }
    },
    Details_Movie_Tv: async (_, { MovieID }) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${MovieID}`,
          {
            params: {
              api_key: TMDB_API_KEY,
              language: "en-US",
            },
          }
        );

        let list = [];

        list.push(response.data);
        return list.map((ele) => ({
          id: ele.id.toString(),
          adult: ele.adult,
          backdrop_path: ele.backdrop_path,
          belongs_to_collection: ele.belongs_to_collection,
          budget: ele.budget,
          genres: ele.gender,
          homepage: ele.homepage,
          imdb_id: ele.imdb_id,
          original_language: ele.original_language,
          original_title: ele.original_title,
          overview: ele.overview,
          popularity: ele.popularity,
          poster_path: ele.poster_path,
          production_companies: ele.production_companies,
          production_countries: ele.production_countries,
          release_date: ele.release_date,
          revenue: ele.revenue,
          runtime: ele.runtime,
          title: ele.title,
          vote_average: ele.vote_average,
          vote_count: ele.vote_count,
        }));
      } catch (error) {
        throw new Error(error);
      }
    },
    TopRated: async (_, { pageRated, TypeRated }) => {
      try {
        const response = await axios.get(
          ` https://api.themoviedb.org/3/${TypeRated}/top_rated`,
          {
            params: {
              api_key: TMDB_API_KEY,
              language: "en-US",
              page: pageRated,
            },
          }
        );

        return response.data.results.map((Moviess) => ({
          id: Moviess.id.toString(),
          original_title: Moviess.original_title || Moviess.original_name,
          popularity: Moviess.popularity,
          genre_ids: Moviess.genre_ids,
          backdrop_path: Moviess.backdrop_path,
          original_language: Moviess.original_language,
          overview: Moviess.overview,
          poster_path: Moviess.poster_path,
          release_date: Moviess.release_date || Moviess.first_air_date,
          title: Moviess.title || Moviess.original_name,
          vote_average: Moviess.vote_average,
        }));
      } catch (error) {
        throw new Error(error);
      }
    },
    upcomingMovies: async (_, { pageUPcom }) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming`,
          {
            params: {
              api_key: TMDB_API_KEY,
              language: "en-US",
              page: pageUPcom,
            },
          }
        );

        return response.data.results.map((Moviess) => ({
          id: Moviess.id.toString(),
          original_title: Moviess.original_title || Moviess.original_name,
          popularity: Moviess.popularity,
          genre_ids: Moviess.genre_ids,
          backdrop_path: Moviess.backdrop_path,
          original_language: Moviess.original_language,
          overview: Moviess.overview,
          poster_path: Moviess.poster_path,
          release_date: Moviess.release_date || Moviess.first_air_date,
          title: Moviess.title || Moviess.original_name,
          vote_average: Moviess.vote_average,
        }));
      } catch (error) {
        throw new Error(error);
      }
    },
    FindCast: async (_, { MovieID }) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie//${MovieID}/credits`,
          {
            params: {
              api_key: TMDB_API_KEY,
              language: "en-US",
            },
          }
        );

        return response.data.cast.map((Moviess) => ({
          id: Moviess.id.toString(),
          gender: Moviess.gender,
          known_for_department: Moviess.known_for_department,
          name: Moviess.name,
          original_name: Moviess.original_name,
          popularity: Moviess.popularity,
          profile_path: Moviess.profile_path,
          cast_id: Moviess.cast_id,
          character: Moviess.character,
          credit_id: Moviess.credit_id,
          order: Moviess.order,
        }));
      } catch (error) {
        throw new Error(error);
      }
    },
    PopularCast: async (_, { page }) => {
      try {
        const response = await axios.get(
          `
          https://api.themoviedb.org/3/trending/person/week`,
          {
            params: {
              api_key: TMDB_API_KEY,
              language: "en-US",
              page: page,
            },
          }
        );

        return response.data.results.map((Moviess) => ({
          id: Moviess.id.toString(),
          name: Moviess.name || Moviess.original_name,
          popularity: Moviess.popularity,
          gender: Moviess.gender,
          known_for_department: Moviess.known_for_department,
          original_name: Moviess.original_name,
          media_type: Moviess.media_type,
          profile_path: Moviess.profile_path,
          known_for: Moviess.known_for,
        }));
      } catch (error) {
        throw new Error(error);
      }
    },
    tredingMovie_Tv: async (_, { page, Type }) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/${Type}/week`,
          {
            params: {
              api_key: TMDB_API_KEY,
              language: "en-US",
              page: page,
            },
          }
        );

        return response.data.results.map((Moviess) => ({
          id: Moviess.id.toString(),
          original_title: Moviess.original_title || Moviess.original_name,
          popularity: Moviess.popularity,
          genre_ids: Moviess.genre_ids,
          backdrop_path: Moviess.backdrop_path,
          original_language: Moviess.original_language,
          overview: Moviess.overview,
          poster_path: Moviess.poster_path,
          release_date: Moviess.release_date || Moviess.first_air_date,
          title: Moviess.title || Moviess.original_name,
          vote_average: Moviess.vote_average,
        }));
      } catch (error) {
        throw new Error(error);
      }
    },
    Get_MovList_user: async (_, { id_user }) => {
      try {
        const existingLike = await List.find({ id_user });

        if (existingLike) {
          return existingLike;
        } else {
          return "no list found";
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    
    Get_user: async (_, { email }) => {
      try {
        const existingLike = await User.find({ email });
        console.log(existingLike);

        if (existingLike.length > 0) {
          return existingLike;
        } else {
          const error = new Error("User not found for the provided email");
          error.status = 404; // You can set an appropriate HTTP status code
          throw error;
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
  Mutation: {
    create_user: async (_, { name, email, subscription }) => {
      try {
        const id_user = String(uuidv4());
        console.log("Generated user ID:", id_user);

        // Create the user in the database
        const user = await User.create({
          name,
          id_user,
          email,
          subscription,
        });

        // Log the created user object
        console.log("Created user:", user);

        // Ensure the user object contains the necessary fields before returning
        return {
          id: user.id_user.toString(),
          name: user.name,
          email: user.email,
          subscription: user.subscription,
        };
      } catch (error) {
        if (error.code === 11000) {
          // User already exists, fetch and return user ID
          const existingUser = await User.findOne({ email });
          if (existingUser) {
            console.log("User already exists:", existingUser);
            return {
              id: existingUser.id_user.toString(),
              name: existingUser.name,
              email: existingUser.email,
              subscription: existingUser.subscription,
            };
          } else {
            console.error("User not found after duplicate key error:", error);
            throw new Error("Failed to fetch existing user");
          }
        } else {
          // Other error occurred, log and throw error
          console.error("Error creating or fetching user:", error);
          throw new Error("Failed to create or fetch user");
        }
      }
    },
    create_MovList_user: async (_, { name, id_user }) => {
      const List_up = new List({
        name,
        id_user,
      });
      await List_up.save();
      return List_up;
    },
    update_MovList_user: async (_, { name, id_user, list_val }) => {
      const List_up = await List.updateOne(
        { id_user: id_user },
        { $push: { list_val: list_val } },
        { upsert: true }
      );
      return List_up;
    },
    delete_MovList_user: async (_, { _id, name, id_user }) => {
      const List_del = await List.deleteOne({ id_user: id_user });
      return List_del;
    },
    update_Like_Content: async (_, { id_user, id_content }) => {
      try {
        // Remove from dislikes if exists
        await Dislike.updateOne(
          { id_user: id_user },
          { $pull: { id_content: id_content } }
        );

        // Check for existing like
        const existingLike = await Like.findOne({ id_user: id_user });

        if (existingLike) {
          const updated = await Like.updateOne(
            { _id: existingLike._id },
            { $addToSet: { id_content: id_content } },
            { upsert: true }
          );
          return updated;
        } else {
          const new_like = new Like({
            id_user,
            id_content: [id_content],
          });
          await new_like.save();
          return new_like;
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    update_Dislike_Content: async (_, { id_user, id_content }) => {
      try {
        // Remove from likes if exists
        await Like.updateOne(
          { id_user: id_user },
          { $pull: { id_content: id_content } }
        );

        // Check for existing dislike
        const existingDislike = await Dislike.findOne({ id_user: id_user });

        if (existingDislike) {
          const updated = await Dislike.updateOne(
            { _id: existingDislike._id },
            { $addToSet: { id_content: id_content } },
            { upsert: true }
          );
          return updated;
        } else {
          const new_dislike = new Dislike({
            id_user,
            id_content: [id_content],
          });
          await new_dislike.save();
          return new_dislike;
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
};

export default resolvers;
