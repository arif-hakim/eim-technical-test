import { seedUsers, DummyUsers } from "./user.seeder";
import { seedAuthors, DummyAuthors } from "./author.seeder";
import { seedActors, DummyActors } from "./actor.seeder";
import { seedMovies, DummyMovies } from "./movie.seeder";
import { seedMovieCasts, DummyMovieCasts } from "./movieCast.seeder";

const seed = async () => {
  console.log("🌱 Seeding users...");
  const users: DummyUsers = await seedUsers();
  console.log("✅ Seeding users has been completed.");
  console.log("🌱 Seeding authors...");
  const authors: DummyAuthors = await seedAuthors();
  console.log("✅ Seeding authors has been completed.");
  console.log("🌱 Seeding actors...");
  const actors: DummyActors = await seedActors();
  console.log("✅ Seeding actors has been completed.");
  console.log("🌱 Seeding movies...");
  const movies: DummyMovies = await seedMovies({ authors });
  console.log("✅ Seeding movies has been completed.");
  console.log("🌱 Seeding movie casts...");
  const movieCasts: DummyMovieCasts = await seedMovieCasts({ actors, movies });
  console.log("✅ Seeding movie casts has been completed.");

  process.exit();
};

seed();
