# Workoutrack
A MERN-stack fitness tracker app.
### App Functions and building process
A user-friendly MERN-stack application that enables individuals to easily track and manage their daily workout routines. 

Features include tracking resistance exercises, viewing of workout history, and ability to edit and delete exercises.

I am inspired by the homework we did in class "Todos" where we follow the CRUD process to build the Application.

Since we are building a Mern fullstack Application we will need to set up both our front end and back end. In my case i put them both together 
thinking it would be easier but... definitely wasn't.

Using Vs Code in this project, we begin by installing all our dependencies in our backend such as express mongoose... 

We will Defines a Schema which will represents the properties of a collection in MongoDB and then Compile a model from the schema.

We CREATE a new exercise with name, reps and weight. In case of an error, send back status code 400 in case of an error.

A better approach will be to examine the error and send an error status code corresponding to the error.

Obviously every excercise that we create will have it's own id. We will use that id to update or delete the excercice if needed.
 
Now that we got our backend together we switch to the front end where we will start by using create-react-app, delete some of the files we are not intending on using and add new components for our projects. 

We will style using Css, make sure all our components are rendering on our localhost before attaching our backend api to our frontend.

All in all, this app was the most difficult project I've done just yet! But, doing this helped me understand a lot on how backend works. Even though i feel like  i have long way to go, everything makes a little bit more sense.

### Technologies Used
###### JAVASCRIPT
###### HTML
###### CSS
###### EXPRESS
###### REACT
###### MONGODB
###### RENDER

### Live site

I have used render to deploy my app. You can have live access to the application through this link here:

https://workoutrack-app.onrender.com
