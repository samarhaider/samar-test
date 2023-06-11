# Seat allocation App

## How to setup application
### Pre-resituate
node > v16.*
yarn install (optionally, preferred)
### Steps
1- cmd `yarn` or `npm install`
2- set PORT, DB other in .env file
3- cmd for
  - dev:  `yarn start:dev` or `npm run start:dev`
  - prod: `yarn start` or `npm run start`
4- cmd for running test
  - `yarn test`

# DB schema refer
- read db-schema.md file

## How app is working
- Find nearby routes with in specific distance like 400 meters by user current location
API: GET /routes?latitude=70.4977&longitude=25.3767&limit=2
- Once user get routes then he/she able to get trips of that route by route id with vehicle info
API: GET /trips/123
- Once user select trip, we return only booked seats
API: GET /bookings/available-seats/123
- Final user can select only available seats(which are not in previous call)
API: POST /bookings


## How to check seat availability
Each vehicles have totalSeats like 16 of vehicle A.
On booking creation time we only store user selected seat. Eg User X, select seat 10 & 11.
We store only two seats in booking table. All seats that are not in booking table are free.


## Improvements in task
- App must be dockerize
- Use ORM for DB connectivity like typeorm/prisma/knex/Sequelize/
- Setup eslint & prettier
- Use any logger library like winston/pino for logging and debugging on prod


## My Suggestions
### Product level
- User should be able to access via phone_number instead of username, we can easily verify user
- User should not be able to see other booked seat user information

### Tech level
- We should use any good nodejs framework or boilerplate, which have built-in app structure, DB connectivity, Logging, Session, Validation, Caching etc so we don't need to setup from scratch
- Each service must be dockerize
- Use typescript instead of javascript because it helps use to prevent prod issues



