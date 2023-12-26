
Project Name: art_project
Version: 1.0.0

Description:
This project is a Node.js application designed for handling and managing data. It includes features for user authentication, utilizing technologies like JWT (JsonWebToken) for secure user sessions, and bcryptjs for password hashing. The project also integrates with MongoDB.

Installation:
Clone the repository: git clone 
Navigate to the project directory: cd server
Install dependencies: npm install

Usage:
To run the application, use : npm start
This will start the server using nodemon, allowing for automatic restarts on file changes.

Dependencies:
bcryptjs: ^2.4.3 - Library for hashing passwords.
body-parser: ^1.20.1 - Middleware to parse HTTP request body.
cors: ^2.8.5 - Middleware for handling Cross-Origin Resource Sharing.
dotenv: ^16.3.1 - Module to load environment variables from a .env file.
express: ^4.18.2 - Web application framework for Node.js.
http-status: ^1.7.3 - HTTP status codes.
jsonwebtoken: ^9.0.2 - Implementation of JSON Web Tokens for user authentication.
moment: ^2.29.4 - Library for handling dates and times.
mongodb: ^4.12.1 - Official MongoDB driver for Node.js.
mongoose: ^6.7.3 - MongoDB object modeling for Node.js.
mysql: ^2.18.1 - MySQL database driver for Node.js.
nodemon: ^2.0.22 - Utility that monitors for changes and automatically restarts the server.
validator: ^13.11.0 - Library for data validation.

Author:
Aishwarya Raj Tyagi
#art

Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)


---- Curl --------

Register :

curl --location 'http://localhost:4004/auth/register' \
--header 'Accept: application/json, text/plain, */*' \
--header 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8' \
--header 'Connection: keep-alive' \
--header 'Content-Type: application/json' \
--header 'DNT: 1' \
--header 'Origin: http://localhost:3000' \
--header 'Referer: http://localhost:3000/' \
--header 'Sec-Fetch-Dest: empty' \
--header 'Sec-Fetch-Mode: cors' \
--header 'Sec-Fetch-Site: same-site' \
--header 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
--header 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
--header 'sec-ch-ua-mobile: ?0' \
--header 'sec-ch-ua-platform: "Windows"' \
--data-raw '{
    "first_name": "Aishwarya Raj",
    "last_name": "Tyagi",
    "phone_number": "7451020300",
    "email": "aish@gmail.com",
    "password": "123@aish",
    "role": "user",
    "address": "Up 11 Saharanpur"
}'


-------------------------------------------------------

Login

curl --location 'http://localhost:4004/auth/login' \
--header 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
--header 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8' \
--header 'Cache-Control: max-age=0' \
--header 'Connection: keep-alive' \
--header 'DNT: 1' \
--header 'Referer: http://localhost:3000/login' \
--header 'Sec-Fetch-Dest: document' \
--header 'Sec-Fetch-Mode: navigate' \
--header 'Sec-Fetch-Site: same-origin' \
--header 'Sec-Fetch-User: ?1' \
--header 'Upgrade-Insecure-Requests: 1' \
--header 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
--header 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
--header 'sec-ch-ua-mobile: ?0' \
--header 'sec-ch-ua-platform: "Windows"' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "aish@gmail.com",
    "password": "123@aish"
}'