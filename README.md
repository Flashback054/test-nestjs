## Installation

- Install dependencies

```bash
$ pnpm install
```

- Create a database in Postgres name `hello`

- Create a `.env` file in root folder

```
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=hello
DB_USERNAME=<YOUR USERNAME>
DB_PASSWORD=<YOUR PASSWORD>
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test `/hello` endpoint

- First, hit `localhost:3000/hello/pre-populate` endpoint to prepopulate the `hello` database with following hellos:

```javascript
[
  {
    id: 1,
    name: 'Bonjour!',
  },
  {
    id: 2,
    name: 'Hola!',
  },
  {
    id: 3,
    name: 'Ciao!',
  },
  {
    id: 4,
    name: 'Hallo!',
  },
  {
    id: 5,
    name: 'Konnichiwa!',
  },
];
```

- Hit `localhost:3000/hello` endpoint to GET all hellos
