# RestaurantsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Additional notes
-----------------------
---------------
MongoDB
---------------
Setting Path:
"D:\Shekhar\Softwares\MongoDB-3.4.3\bin\mongod.exe" --dbpath D:\Shekhar\Softwares\MongoDB-3.4.3\data\db

Importing data from json file. Execute the command in the \data\db path.

mongoimport --db SampleDB --collection Restaurants --type json --file D:\Users\chandrashekhar_m\Downloads\primer-dataset.json

## Node 
-------------------
Setting the proxy and https-proxy config variables
---------------------------------------------------- 
npm config set proxy http://10.97.32.18:8080
npm config set https-proxy http://10.97.32.18:8080

npm config set proxy http://"hcltech%5Cchandrashekhar_m:MCShekhar2280(&*)@10.97.32.18:8080"
npm config set https-proxy http://"hcltech%5Cchandrashekhar_m:MCShekhar2280(&*)@10.97.32.18:8080" 

npm config set proxy http://"hcltech\chandrashekhar_m:MCShekhar2280(&*)"@10.97.32.18:8080 strict ssl = false
npm config set https-proxy http://"hcltech\chandrashekhar_m:MCShekhar2280(&*)"@10.97.32.18:8080 strict ssl = false 

npm config delete http-proxy
npm config delete https-proxy


For setting path

IF EXIST D:\Users\chandrashekhar_m\AppData\Roaming\npm SET PATH=%PATH%;D:\Users\chandrashekhar_m\AppData\Roaming\npm
