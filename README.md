![image](https://user-images.githubusercontent.com/56343426/182027521-c15c166a-5a73-49f7-bccf-ebe3a320d9f9.png)

Hello! So the REST API demo app is finished and deployed to Netlify. This is making a client-side for the API. I've used as an inspiration and source as well an example of an API with a client-side: 

Source: pokeapi.co

## Prerequisites needed:

Basic knowledge in HTML, jQuery and Ajax.

## Step 1: index.html and styling 
I used Bootstrap and custom CSS for styling. And I created a index.js to connect the user interface to our API so that we can interact with our API from the browser. 

## Step 2: index.js 
This script will be in charge of fetching data from the API and displaying it to our page. I wanted our dropdown menu to display information dynamically, so it will be displayed a div element with the name of the menu item when it is clicked on. 
I used jQuery because of Bootstrap. 

![image](https://user-images.githubusercontent.com/56343426/182028285-90bc1907-4875-4ade-9689-b34eedcf104b.png)

Now it's a step further by calling function based on the menu item clicked. So I added conditional statements below previous code like this:

![image](https://user-images.githubusercontent.com/56343426/182028434-03f9e2f7-e250-4e1b-b176-51e5bf2d5d3e.png)

So now, if the user clicks "Get All Repo", we will call the getAll() function. 

## Step 3: Fetch data from database to client 
### getAll 
In order to retrieve data from our API, we can simply use getJSON(url) and provide our own url which is the API's endpoint. So, let's create the getAll function in jQuery. 

![image](https://user-images.githubusercontent.com/56343426/182028637-f7e69b69-3733-428d-b695-8b9163a8b3c7.png)

In this function, we use getJSON to fetch data from our API deployed at https://api.github.com/organizations with the route /organizations. After the data is fetched, a callback function will parse and format the JSON and append it to the display div as a pre (preformatted) element. 

![image](https://user-images.githubusercontent.com/56343426/182028840-b7e4d9b4-a3ae-453e-99e6-85a89c967dfd.png)

## Conclusion
It's important to understand how API endpoint works as well know what each of functions need to do. Next steps for further improvements to this app would be focused more on other methods, for example on getAll, getOne and postOne. For example like this:

| Routes                 | HTTP Methods  | Description |
| -------------          |:-------------:| -----:|
| /organization          | GET           | Displays all repo |
| /organization          | POST          | Creates a new repo |
| /organization          | DELETE        | Deletes all repo |
| /organization/:login   | GET           | Displays a specific repo, given its login |
| /organization/:login   | POST          | Adds a comment to a specific repo, given its login |
| /organization/:login   | DELETE        | Deletes a specific repo, given its login |

👉 Deployed at: https://organizationrepo.netlify.app/ 
Please let me know if you find any bugs or errors at tia.lapinjoki14@gmail.com 

