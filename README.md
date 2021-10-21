# Backend | Javascript Test SalesHandy 

## File Structure
    >api
     >controller
        report.js 
        user_entry.js 
        user_info.js
     >model 
        users.js
     >routes
        _route.js

## API EndPoint
    ### user-info [https://coviduserreg.herokuapp.com/api/user-info]
      Get all users vacation information

    ### user-entry (task 1) [https://coviduserreg.herokuapp.com/api/user-entry]
      Create new user vaccine information
        parameter
            Adher number

    ### report (task 2) [https://coviduserreg.herokuapp.com/api/report]
        get report of vaccination on a given time and state in JSON format 
        parameter
            state      name of states [ex : west bengal]
            startdate  starting date [YYYY-MM-DD]  [ex 2020-01-01]
            enddate    ending date [YYYY-MM-DD]  [ex 2025-01-01]
            grouped    options [Daily  Weekly  Monthly  Yearly]  [ex Yearly]


## Base Url 
    localy : http://localhost:9002
    online : https://coviduserreg.herokuapp.com/

## Postman link
    https://www.getpostman.com/collections/441507e016b8f057054c