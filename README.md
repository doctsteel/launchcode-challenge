# launchcode-challenge

The project for Launchcode recruitment process.

# About the project

## Back end

For the backend I used nest.js coupled with prisma as my ORM, communicating with a postgres instance.

Two groups of endpoints were written: `/auth` and `/quotes`.
I took advantage of Prisma's automatic entity creation from the schema to define the DTOs for most endpoints.

Auth is a basic user authentication controller that uses `bcrypt` to encrypt passwords and JWT tokens.

Quotes deals with the Quote entity defined by prisma, in which most of its endpoints are fairly standard CRUD methods, except for the `GET /quotes`. It's the method that queries a list of quotes, but with pagination in mind.

Due to time constrains, no unit tests or swagger docs were generated.

## Front end

Front-end was where I most spent time and effort on: the stack it uses is React, Chakra-Ui, Formik, tanstack's react query and react table.

Managed to implement all required functions: Creating quote, visualizing tables of quotes and viewing the details of a quote.
Due to time constraints, I couldn't style all components.

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

now, starting from the backend, let's install all required dependencies and run it:

```
cd backend/
yarn install
```

now, set up the database by running the included prisma migrations and the db seed on the project

```
npx prisma migrate reset
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

default login is

```
user name: rootuser
password: rootuser
```

## Closing thoughts

Due to lots and lots of events happening this week at the same time, I failed to properly manage my time and this project suffered for it, but despite that, this was the most fun coding experience I had in such a long time.

I had barely touched front-end development in my career compared to back-end, and sought for courses at Udemy and Coursera to compensate the lack of experience, and honestly, I had forgotten how good is to get lost in code and logic, immersed on all those 'optional puzzles' our mind tends to search for ("should I do this function that way or the other way?")

I am grateful for Launchcode not only for offering this second wind of an opportunity to measure my skill and experience, but for also renewing my love for code (even if my submission is incomplete)!
