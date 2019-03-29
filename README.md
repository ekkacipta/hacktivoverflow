# hacktivoverflow

# User Router



| Router            | HTTP   | Params                   | Body                                                         | Description          | Output               |
| ----------------- | ------ | ------------------------ | ------------------------------------------------------------ | -------------------- | -------------------- |
| /users            | GET    |                          |                                                              | get all data user    | array of object user |
| /users/:id        | GET    | user id:string(required) |                                                              | get spesific user    | object of user       |
| /users            | POST   |                          | name:string, <br />email: string(required),<br />password:string(required) |                      |                      |
| /users/login      | POST   |                          | email:string(required),<br />password:string(required)       |                      |                      |
| /users/update/:id | PUT    | user id:string(required) | name:string,<br />password: string                           | edit spesific data   |                      |
| /users/delete/:id | DELETE | user id:string(required) |                                                              | delete spesific data |                      |



# Question Router

| Router                    | HTTP   | Params                       | Body                                            | Description                    | Output          |
| ------------------------- | ------ | ---------------------------- | ----------------------------------------------- | ------------------------------ | --------------- |
| /questions                | GET    |                              |                                                 | get all question data          | array of object |
| /questions/:id            | GET    | question id:string(required) |                                                 | get spesific user data         | object          |
| /questions                | POST   |                              | title:string(required),<br />description:string | create a new question          |                 |
| /questions/update/:id     | PUT    | question id:string(required) | title:string,<br />description:string           | edit spesific question         |                 |
| /questions/postAnswer/:id | PUT    | question id:string(required) | array of object answer                          | push id answer into answer key |                 |
| /questions/delete/:id     | DELETE | question id:string(required) |                                                 | delete spesific question       |                 |
| /questions/upvote/:id     | PUT    | question id:string(required) | user id:string(required)                        | push user id into upvote       |                 |
| /questions/downvote/:id   | PUT    | question id:string(required) | user id:string(required)                        | push user id into downvote     |                 |

# Answer Router

| Router       | HTTP | Params                     | Body                                                 | Description              | Output          |
| ------------ | ---- | -------------------------- | ---------------------------------------------------- | ------------------------ | --------------- |
| /answers     | GET  |                            |                                                      | get all answer data      | array of object |
| /answers/:id | GET  | answer id:string(required) |                                                      | get spesific answer data | object          |
| /answers     | POST |                            | title:string(required), description:string(required) | create a new answer data |                 |
| /answers/    |      |                            |                                                      |                          |                 |
|              |      |                            |                                                      |                          |                 |
|              |      |                            |                                                      |                          |                 |

