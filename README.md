# Notes App Backend

This is the backend of the notes application we developed the frontend for under the part 2 directory,  
which can be found [here](https://github.com/smwingira/part2-notes-frontend/tree/main).  

You can interact with the backend here: [https://part3-notes-app-backend.fly.dev/](https://part3-notes-app-backend.fly.dev/). Below are a list of usable endpoints.

## Endpoints

### GET

- Home: [https://part3-notes-app-backend.fly.dev/](https://part3-notes-app-backend.fly.dev/)
- All Notes: [https://part3-notes-app-backend.fly.dev/api/notes](https://part3-notes-app-backend.fly.dev/api/notes) => JSON data
- Single Note: [https://part3-notes-app-backend.fly.dev/api/notes/6650f574fb015f1b229775d1](https://part3-notes-app-backend.fly.dev/api/notes/6650f574fb015f1b229775d1)
  - You can modify the ID at the end to any of the existing notes in the API
- All Users: [https://part3-notes-app-backend.fly.dev/api/users](https://part3-notes-app-backend.fly.dev/api/users)

### POST

- Notes: [https://part3-notes-app-backend.fly.dev/api/notes](https://part3-notes-app-backend.fly.dev/api/notes)
  - Posting to this endpoint will create a new note entry. Only registered users can do this. Both the name and number must be in the request body, there are error checks to make sure this is the case.