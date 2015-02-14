<h1><a href="forevernote.mtdoss.com">Forevernote</a></h1>
Check out the site <a href="forevernote.mtdoss.com">here!</a>

This is an application modeled after Evernote. It is almost entirely a one-page
application, built using Backbone.js. Here are some notable features:

* Custom CSS used to style the site so it looks just like Evernote

* Consumes a RESTful Rails API

* Uses JSON JBuilder to return Rails models for Backbone use

* Created a custom <a href="https://github.com/mtdoss/Forevernote/blob/master/app/assets/javascripts/utils/composite_view.js">Backbone Composite View class</a> to enable subviews throughout
the application. For example, each note preview is a subview of the notebook
to which it belongs; each note show page is a subview of the note preview

* Notes are automatically saved as they are typed. I throttled the submit
function to avoid excess network requests; you can see the code for that
<a href="https://github.com/mtdoss/Forevernote/blob/master/app/assets/javascripts/views/notes/new.js#L29">here</a>

* Custom user authentication so that users can only view their own notes/notebooks.
I <a href="https://github.com/mtdoss/Forevernote/blob/master/app/models/user.rb#L21">overrode the User#password= method</a> to store BCrypt hashes instead of storing plain passwords in the database.

<h1>TO DO:</h1>

* Tags are not yet implemented

* Search is not yet implemented

* Add some user-friendly functionality like the ability to star notes

* Add the ability to password-protect individual notebooks

