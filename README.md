Check out the site <a href="forevernote.herokuapp.com">here!</a>

This is an application modeled after Evernote. It is almost entirely a one-page
application, built using Backbone.js. Here are some notable features:

* Custom CSS used to style the site so it looks just like Evernote

* Consumes a RESTful Rails API

* Notes are automatically saved as they are typed. I throttled the submit
function to avoid excess network requests; you can see the code for that
<a href="https://github.com/mtdoss/Forevernote/blob/master/app/assets/javascripts/views/notes/new.js#L29">here</a>

* 
