# URL Shortener for Tier Mobility

## How to run project:

### NodeJS

1. Install packages:
    ```bash
    npm i
    ```
2. Export environment variables as below (example):
    ```bash
    EXPORT MONGODB=mongodb://root:root@localhost:27017/urlshortener?authSource=admin
    ```
3. Then run the Project:
    ```bash
    npm run start
    ```

### Docker
Simply run the project with `docker-compose`:
```bash
docker-compose up -d
```
It will build the project first, then runs it.

## My notes and thoughts
1. I tried to control the user inputs as much as I could with `Joi` package
2. I added docker support, `Dockerfile` and `docker-compose.yml` for easier usage, Also `mongodb` and `redis` setup included inside `docker-compose`
3. I used `prettier` with `.prettierrc` config to maintain a single code style across all files in project.
4. I used `eslint` to prevent future bugs, performance and code style problems.
5. I did my best to follow best practices, Like `DRY`, `KISS`, `YAGNI`.
6. Used middlewares for input validation in order to prevent code repetition.
7. Implemented an `errors` service, which is a proxy to throw errors in a stylish was, also has http status code in it.
8. Added a `Postman` collection file in `docs` folder for easier testing.
9. Of course I can give the same short url slug for same url again, but I thought, Maybe we want to track each short url separately, or maybe two deferent users want a same url be shortened.


## What I'll do next
1. Change authentication system to be compatible with jwt `access` and `refresh` token.
2. Add more logs with a better log package like `winston` for implement log to file and file rotation, etc...
3. Add more tests, for every controller, db methods, etc...

--------

Total time I spent on this task: 2h 30m
