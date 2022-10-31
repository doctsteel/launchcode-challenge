# launchcode-challenge
The project for Launchcode recruitment process.

**Installing**

Clone this repository to a folder of your liking:

```
git clone launchcode-challenge
```

Then, make sure Docker is installed:

```
docker --version
```

get the postgres container up:
```
docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres 
```
now, starting from the backend, let's install all required dependencies, set up the environment variables and run it:

create an .env.stage.dev file on the root folder of the backend portion of the project.
Place this on the file and save it:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres?schema=public"
PORT=3000
JWT_SECRET="example"
```
Back to the terminal,

```
cd backend/
yarn install
```
now, set up the database by running the included prisma migrations on the project
``` 
prisma generate
prisma migrate dev --name init
``` 
and finally, run the app!

```
yarn start:dev
```
on another terminal, get to the repository frontend root folder, install all front-end dependencies and run it.
```
cd backend/
npm install
npm start
```


