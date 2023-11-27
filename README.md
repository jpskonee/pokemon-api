# Pokemon API

This is a test API to return the variation tree of any Pokemon.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) - version v20 and above.
- [npm](https://www.npmjs.com/) - version v9 and above.

## Getting Started

Follow these steps to get the project up and running.

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-project.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd your-project
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Configuration

If your project requires any configuration, provide instructions on how to do it. For example:

1. Copy the `.env.example` file and rename it to `.env`.
2. Update the variables in the `.env` file with your specific values.
i.e
POKEMON_SPECIE_URL='https://pokeapi.co/api/v2/pokemon-species'
PORT=5050 (or any desired port.)


## Running the Project

Use the following command to run the project locally:

```bash
npm run dev
```

## Using the API.

From your web browser or any API querying tool (e.g Postman):
Go to: http://localhost:5050/api/pokemon/charmeleon.

IF you used a different port in your .env, Please update accordingly. 
i.e http://localhost:[YOUR_PORT]/api/pokemon/charmeleon.

You can change the name in the params to get the variation tree of any desired pokemon.

You can get the full list of valid pokemon names here. 
https://pokeapi.co/api/v2/pokemon?limit=2000

## Thanks!