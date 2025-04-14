## steps i am following for Frontend:-
1) created a repository in github named MYFOODAPP
2) created 2 branches:-
    i) backend
    ii) Frontend
3) created header component in Frontend    
4) style the header component
5) List Foods
    1. create food model
    2. create data.ts
        a) add sample foods
    3. Add images to assets
    4. create food service
    5. create home component
        a) add ts
        b) add html
        c) add css
6) Search
    1) add method to food service
    2) add search route
    3) show search result in home component
    4) generate search component
        a) Add to home component
        b) add ts
        c) add html
        d) add css
7) Tag Bars
    1) Create Tag model
    2) Add sample tag to data.ts
    3) food services
        a) add get all tags method
        b) add get all foods by tag method
    4) add tags route
    5) show tags result in home
    6) generate tags component
        a) add to home component
        b) add html
        c) add ts
        d) add css            
8) Food Page
    1) Add method to food service
    2) generate food page component
        a) Add Route
        b) Add ts
        c) Add html
        d) add css
9) Cart Page
    1) create cartItem Model
    2) create cart Model
    3) generate cart service
    4) add to cart button in food page
    5) generate cart page component
        a) add route
        b) add ts
        c) add html
        d) add css        
10) Not Found
    1) generate component
        a) add ts
        b) add html
        c) add css
    2) add to pages
        a) Home Page
        b) Food Page
        c) Cart Page         

## steps i am following for Backend:-        
1) Connect To Backend
    1) Create backend Folder
    2) npm init
    3) npm install typescript
    4) Create tsconfig.json
    5) Create .gitignore
    6) Copy data.ts to backend/src
    7) npm install express cors
    8) Create server.ts
        a) install @types
        b) add Apis
    9) npm install nodemon ts-node --save-dev
    10) Add urs.ts to Frontend
    11) Add HttpClient module
    12) Update food service  

## steps for Login:-
1) Login Page
    1) Generate Component
        a) add to routes
        b) add ts 
        c) add html
            i) Import Reactive Forms Module
        d) ass css
    2) Add Login Api
        a) Use json
        b) Add jsonwebtoken
        c) test using Postman        
    3) Generate User Service
        a) Generate User Model
        b) Add User Subject
        c) add Login Method
            a) Add User Urls
            b) Generate IUserLogin interface
            c) add ngx-toastr
                a) Import Module
                b) Import BrowserAnimationModule
                c) Add styles in angular.json
            d) Add to Header
        d) Add to Local Storage methods
        e) Add Logout Method
            a) Add to Header           

## database connectivity
db_pass=M76NSdNIUqZ7CwMG
1) Connect Login API to MONGODB ATLAS
    1) Moving APIs into routers
    2) Create MongoDB Atlas
    3) Create .env file
    4) Install
        a) mongoose
        b) dotenv
        c) bcryptjs
        d) express-async-handler
    5) Connect to MongoDB Atlas
    6) Use MongoDB instead of data.ts in apis       

## Register User
1) Add Register api
2) Add Register service method
3) Add Register link
4) Add Register Conponent

## loading component
1) Add Image
2) Add Component
3) Add Service
4) Add Interceptor

## checkout page
1) Create Order Model
2) Create Checkout page Component
    a) add to router
3) Add User to user service
4) Add Cart to Cart service    
5) Create Order Item List Component
6) Adding Map To The Checkout Page
    1) Add Leaflet npm package
        a) Add @types/leaflet
        b) Add Css to angular.json
    2) Add AddressLatLng to Order Model
    3) Create Map component
        a) Add to checkout page
        b) Add TS
            a)Change app-map selector to map
        c) Add Html
        d) Add CSS
    4) Add Auth Guard
7) Save Order
    1) Add Order Model
    2) Add Order Status Enum
    3) Add Auth Middleware
    4) Add Order Router
        a) Add Create API
    5) Add Order Urls to url.ts
    6) Add Order Service
        a) Add create Method
    8) Add Auth Interceptor    
