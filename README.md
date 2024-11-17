# Marvel Searcher

## Requeriments
- Node v22.6 
- NPM v10.8.2

## Instalation method
1 - Clone the repository in your local <br>
2- Run ```npm install, or yarn install, or pnpm dev ``` <br>
3- Change the name of the file ```example.env to .env``` (Personal information in env files should be kept secret and should not be shared with others. But for the sake of this project, I am sharing it) <br>
4- The aplication uses a localhost json server. To run it, run the command ```npm run server``` in a terminal: This will initialize a localhost server in port 3001 wich is required for the favorites list <br>
5- Run the aplication using ```npm run dev```: The aplication will run in http://localhost:5173/ <br>

## Preview

![Captura de pantalla 2024-11-17 201427](https://github.com/user-attachments/assets/6e7ade42-8a51-47ff-ba86-f8a5d32690c7)

![Captura de pantalla 2024-11-17 202202](https://github.com/user-attachments/assets/141f8b6c-a17f-4556-aa50-589b340f65c4)

![Captura de pantalla 2024-11-17 202249](https://github.com/user-attachments/assets/bb464a3b-b090-4d18-a9fa-21329d1b15f5)

## Tests

The application uses Jest and react testing component. Has come minor integration tests

To run the tests simply use ```npm run test```
