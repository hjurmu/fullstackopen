# Part 0

## Exercise 0.4 New note

![ecercise 0.4 sequence diagram] (Exercise0.4_NewNote.png "Exercise 0.4")

```title Exercise 0.4 New Note

note over browser: 
Browser sends a POST request, 
new note is contained in the request body
end note

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note

note over server: 
Server saves the new note and returns 
instructions to redirect to reload the page
end note

server-->browser: Status code 302 URL redirect to path /exampleapp/notes

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes

server-->browser: Status code 200 OK, HTML code

note over browser:
Browser parses HTML code and makes 
request to CSS and JS files defined in HTML-file
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css

server-->browser: Status code 200 OK, main.css

browser->server: https://studies.cs.helsinki.fi/exampleapp/main.js

server-->browser: Status code 200 OK, main.js

note over browser:
Browser executes JS code containing
instructions to request /data.json
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
note over server: 
Server returns list of notes in JSON-format
end note
server-->browser: Status Code 200 OK, data.json

browser->server: HTTP GET https://studies.cs.helsinki.fi/favicon.ico
server-->browser: Status Code 200 OK, favicon.ico

note over browser:
Browser executes the event handler
that parses data and renders page
end note
```

## Exercise 0.5 Single page app

![ecercise 0.5 sequence diagram] (Exercise0.5SinglePageApp.png "Exercise 0.5")

```
title Exercise 0.5 Single Page App

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->browser: Status Code 200 OK, HTML code

note over browser:
Browser parses HTML code and makes 
request to CSS and JS files defined in HTML-file
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: Status Code 200 OK, main.css

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->browser: Status Code 200 OK, spa.js

note over browser:
Browser executes JS code containing
instructions to request /data.json
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
note over server: 
Server returns list of notes in JSON-format
end note
server-->browser: Status Code 200 OK, data.json

browser-> server: HTTP GET https://studies.cs.helsinki.fi/favicon.ico
server-->browser: Status Code 200 OK, favicon.ico

note over browser:
Browser executes the event handler
that parses data and renders page
end note
```

## Exercise 0.6 New note

![ecercise 0.6 sequence diagram] (Exercise0.6_NewNoteSPA.png "Exercise 0.6")

```
title Exercise 0.6 New Note (SPA)

note over browser:
Browser executes the event handler 
on form submit
end note

note over browser
The event handler prevents default form handling,
parses a new note to JSON format, 
pushes it to the notes list, rerenders the page 
and sends the new note to server
end note

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

note over server:
Server receives new note content and 
timestamp in JSON-format, 
parses the data and stores new note
end note

server-->browser: Status Code 201 Created
```