### Node v4 

#### SetUp
- Create a Script in package.json to start the project with node `ts-node src/index.ts`.
- OR create a Script with nodemon `nodemon --watch './**/*.ts' --exec 'ts-node' src/index.ts`

#### API Design - Server-side Rendering
- Runtime -- Nodejs
- Framework -- Express
- Database -- Postgres + Prisma
- Hosting -- Render

#### Prisma + Database: ORM
- Create a postgres database with Render: copy the external database URL
- Initialize the prisma schema with `npx prisma init`
- Add the external database URL to the prisma `.env`.
- You can format your schema with `npx prisma format`.
- Migration: teach your DB the description of the schema
- SDK for migration in prisma ` npm i @prisma/client --save `.
- Then the migration script `npx prisma migrate dev --name init`.
- This is a command to reset `npx prisma migrate --reset`.

#### Routes, Middleware and Authentication - CRUD
- Create, Read, Update and Delete from the database schema.
- Create different endpoints using express's new router method.
- Middleware-Morgan logs requests `npm i morgan --save`.
- Create authentication with JWT to identify each users accessing the database.
- USERS: For encryption of session and identification use `npm i jsonwebtoken bcrypt dotenv`. 