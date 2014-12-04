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
nb1.notes.create!(title: "Grandma's broiled chicken recipe", body: "Preheat oven to
  Broil/Grill and line broiler pan with aluminum foil.
Place chicken on pan. In a small bowl combine the butter, garlic, parsley, 
rosemary and thyme and mix together, then evenly spread a dollop of mixture on 
each chicken breast.
Broil in preheated oven, turning and frequently coating with remaining 
herb/butter mixture, for about 15 minutes or until chicken juices run clear.")
