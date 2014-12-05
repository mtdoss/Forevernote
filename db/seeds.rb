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

nb2 = guest_user.notebooks.create!(title: "Quotes")
nb2.notes.create!(title: "Kurt Vonnegut Quotes", body: "1) True terror is to wake up one morning and discover that your hgh school class is running the country

2) I tell you, we are here on Earth to fart around, and don't let anybody tell you different

3) I urge you to pleast notice when you are happy, and exclaim or murmur or think at some point, 'If this isn't nice, I don't know what is'

4) We few, we happy few, we band of brothers -- joined in the serious business of keeping our food, shelter, clothing and loved ones from combining with oxygen

5) Hello, babies. Welcome to Earth. It's hot in the summer and cold in the winter. It's round and wet and crowded. At the outside, babies, you've got about a hunded years here. There's only one rule I konw of, babies -- God damn it, you've got to be kind")

nb2.notes.create!(title: "Random Inspirational Quotes", body: "I hated every minute of training, but I said, 'Don't quite. Suffer now and live the rest of your life as a champion' - Muhammad Ali

Everyone here has the sense that right now is one of those moments when we are influencing the future - Steve Jobs

Whether you think you can, or you think you can't - you're right  - Henry Ford")

nb2.notes.create!(title: "Random quotes that I like", body: "Adults are just outdated children - Dr Seuss

Like all real heroes, Charley had a fatal flaw. He refused to believe that he had gonorrhea, whereas the truth was that he did - God Bless you, Mr. Rosewater

'You're a gentleman,' they used to say to him. 'You shouldn't have gone murdering people with a hatchet; that's no occupation for a gentleman' - Crime and Punishment

No man is an island, entire of itself. Every man is a piece of the continent, a part of the main. If a clod be washed away by the sea, Europe is the less for it; as well as if a promotory were, as well as if a manor of thy friend's or of thine own were. Any man's death diminishes me, because I am involved in mankind. And therefore never send to know for whom the bell tolls; it tolls for thee. - John Donne

Death is but crossing the world, as Friends do the seas; they live in one another still. For they must needs be present, that love and live in that which is omnipresent. In this divine glass, they see face to face; and their converse is free, as well as pure. This is the comfort of Friends, that though they may be said to die, yet their Friendship and society are, in the best sense, ever present, because immortal. - William Penn")

nb3 = guest_user.notebooks.create!(title: "Favorite movies, books, shows")
nb3.notes.create!(title: "Shows", body: "Archer

  Arrested Development

  Doctor Who

  Battlestar Galactica

  Scrubs

  Parks and Rec")

nb3.notes.create!(title: "Books", body: "Crime and Punishment

  Brothers Karamazov

  Anything by Kurt Vonnegut

  Lord of the Rings

  Harry Potter

  Anna Karenina")


nb3.notes.create!(title: "Movies", body: "Interstellar was awesome!

  American Beauty

  Grand Budapest Hotel

  Moonrise Kingdom

  The Batman Trilogy (except the last one wasn't that good)

  Pan's Labyrinth")


