# Dating Api
---------------------------------------
### Problem Statement
Develop api endpoint which allows signUp, login(JWT), like image and block user.

### Technology Stack
##### Typescript, Postgres, NodeJS, Express, socket.io, JWT

### Installation

This requires [Node.js](https://nodejs.org/) v4+ to run, [NPM(Node Packege Manager)]() for handling node package, [Postgres]() to database handling.

1: Clone this Repository
```sh
$ git clone https://github.com/Parth910/dateApi.git
```
2: Change diractory
```sh
$ cd dateApi
```
3: Start Postgres server after installing Postgres


4: Install the dependencies

```sh
$ npm install
```

5: Now you are ready for run Application
```sh
$ npm run dev   
```
You can see this output in Teminal
```sh
> datingapi@1.0.0 dev /home/parth/Desktop/datingApi
> nodemon src/index.ts

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/index.ts`
Server is Started...
For Load Sample Dataset visit at http://localhost:3000

```
### Folder Structure
![Image](https://github.com/Parth910/dateApi/blob/master/Screenshot%20from%202020-06-09%2000-58-20.png


## How it Works!!!

### BackEnd(API)

#### SignUp API
  1. POST : http://localhost:3000/signup/
     * API for signup with email and password.
  
#### Login API
  1. POST : http://localhost:3000/login/
     * API for login.
#### Like API
  1. POST : http://localhost:3000/like/:id
     * API for like with real-time notification.
 #### Block API
  1. POST : http://localhost:3000/block/:id
     * API for block user.
 #### imageFeed API
  1. POST : http://localhost:3000/login/
     * API for login.
  
  
### Models(Database Schemas)
#### User Schema
```
   
    email: String,
    password:String,
    imgPath:String,
    imgId:String,
    uniqId:String,
    token:String,
    blocklist:Array<String>
    
```

### Conatact Details
* Name: **Parth Patel**
* Phone: **+91 6354813121**
* Email: **prp4203@gmail.com**
* altEmail: **17ucs107@lnmiit.ac.in**
* website: **[Parth910.github.io](https://Parth910.github.io)**

## Want to Contribute!!
  :+1::tada: First off, thanks for taking the time to contribute! :tada::+1:


### Development Setup
* To contribute in this you have this application locally.so first install from [here](https://github.com/Parth910/Innovaccer-SummerGeeks-Assignment-EMS/blob/master/README.md#installation).
### Styleguides

#### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

#### JavaScript Styleguide

* All JavaScript must adhere to [JavaScript Standard Style](https://standardjs.com/)
#### Git Issues and Pull request
 * Feel free to submit issues and enhancement requests.
