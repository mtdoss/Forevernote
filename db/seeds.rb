# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest_user = User.create!(email: "guest@forevernote.com", password: "star_wars")
guest_user.notebooks.create!(title: "Recipes")
nb1 = guest_user.notebooks.first
nb1.notes.create!(title: "Grandma's broiled chicken recipe", body: "Preheat oven to 350
 
Broil/Grill and line broiler pan with aluminum foil.

Place chicken on pan. In a small bowl combine the butter, garlic, parsley, 
rosemary and thyme and mix together, then evenly spread a dollop of mixture on 
each chicken breast.

Broil in preheated oven, turning and frequently coating with remaining 
herb/butter mixture, for about 15 minutes or until chicken juices run clear.")

nb1.notes.create!(title: "Stuffing Recipe", body: "Preheat oven to 350 degree F (175 degree C). Spread the white and whole wheat bread cubes in a single layer on a large baking sheet. Bake for 5 to 7 minutes in the preheated oven, or until evenly toasted. Transfer toasted bread cubes to a large bowl.

In a large skillet, cook the sausage and onions over medium heat, stirring and breaking up the lumps until evenly browned. Add the celery, sage, rosemary, and thyme; cook, stirring, for 2 minutes to blend flavors.

Pour sausage mixture over bread in bowl. Mix in chopped apple, dried cranberries, parsley, and liver. Drizzle with turkey stock and melted butter, and mix lightly. Allow stuffing to cool completely before loosely stuffing a turkey.")

nb1.notes.create!(title: "Cranberry Sauce", body: "In a medium sized saucepan over medium heat, dissolve the sugar in the orange juice. Stir in the cranberries and cook until the cranberries start to pop (about 10 minutes). Remove from heat and place sauce in a bowl. Cranberry sauce will thicken as it cools.")

nb1.notes.create!(title: "Butternut Squash", body: "Preheat an oven to 425 degrees F (220 degrees C).

Toss the squash, onion, olive oil, 1/2 cup Italian bread crumbs, thyme, and blue cheese in a large mixing bowl. Season with salt and pepper. Pour the mixture into a large baking dish. Sprinkle 1/4 cup bread crumbs over the squash.

Bake in the preheated oven until lightly browned on top, 35 to 40 minutes.")
