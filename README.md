# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

# Products JSON API
mongodb, mongoose, express

## Let's deploy this API to the "cloud" aka MongoDB Atlas and Heroku

![](https://miro.medium.com/max/1320/1*owg5RPtazedwH8fxpZF_vg.png)
> Image from [heroku.com](https://www.heroku.com)

For larger apps that you plan on scaling, MongoDB recommends you use MongoDB Atlas. In this next step we are going to learn how to deploy our app to Heroku and create a production-ready MongoDB database using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). 

[MongoDB Atlas](https://www.mongodb.com/cloud/atlas) manages our database beautifully - things like scaling the database as it grows, backups, and many more features are all handled by [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

First step is to signup to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) here: https://www.mongodb.com/cloud/atlas

> Then click the green button "Build a Cluster"

<p align="center">
  <img src="https://i.imgur.com/KcgbFXc.png" width="80%"/>
</p>

##

> Select the **free** tier

<p align="center">
  <img src="https://i.imgur.com/vAgMBoM.png" width="60%"/>
</p>

##

> Select AWS, the N. Virginia free tier, and click the green "Create Cluster" button

<p align="center">
  <img src="https://i.imgur.com/ylkZwtl.png" width="60%"/>
</p>

##

> Grab a cup of coffee ☕ it will take a few minutes for MongoDB Atlas to create your databases in the cloud

<p align="center">
  <img src="https://i.imgur.com/yVn9eLy.png" width="80%"/>
</p>

##

> Click the "CONNECT" button

<p align="center">
  <img src="https://i.imgur.com/OfroaVP.png" width="80%"/>
</p>

##

> You should see a modal pop up. Click "Add a Different IP Address" button

> Then enter 0.0.0.0/0 for the IP Address input (this will allow all IP Addresses to access the database)

> Click the green "Add IP Address" button

> Now let's secure the database. Create a username/password (remember the password, you will need it later)

> Click the "Create MongoDB User" button

> Next, click the "Choose a connection method" button in the lower right of the modal

<p align="center">
  <img src="https://i.imgur.com/hv860VE.png" width="60%"/>
</p>

##

> Click "Connect Your Application"

<p align="center">
  <img src="https://i.imgur.com/40KJqQt.png" width="60%"/>
</p>

##

> Select the "Connection String Only" tab

> Copy the connection string

<p align="center">
  <img src="https://i.imgur.com/vZnBMKN.png" width="60%"/>
</p>

##

Let's deploy our app to [heroku](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

Now we're ready to deploy to Heroku and specify our MongoDB Atlas URI connection string to tell Heroku where our database lives.

> Make sure you're on the `master` branch!

1. `heroku create your-heroku-app-name`
2. `heroku config:set PROD_MONGODB="<INSERT YOUR MONGODB URI CONNECTION STRING HERE>"`
    - replace the word test in your connection string with the name of your a database: wishlistDatabase
3. `git push heroku master`
4. `heroku run node seed/products.js`

> Having issues? Debug with the Heroku command `heroku logs --tail` to see what's happening on the Heroku server.

Test the endpoints :)

> https://your-heroku-app-name.herokuapp.com/products

**Excellent!**

> ✊ **Fist to Five**

## Feedback

> [Take a minute to give us feedback on this lesson so we can improve it!](https://forms.gle/vgUoXbzxPWf4oPCX6)
