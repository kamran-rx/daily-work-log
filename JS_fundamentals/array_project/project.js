
//       project

let wishlist = ["Ghost of tushima" , "Gta V", "Red dead redemption2" , " FC26","Assasins Creed 3"]

let ownedgames= ["FC24", "Call OF duty", "Age of empires"]

let installedgames = ["Takken3" , "Spiderman"]

let recentlyplayed = ["Batman"]

// Buy A Game 

let buyed_games = [wishlist.pop(),wishlist.pop()];

// Now these Games  are added to Owned Games from wishlist

 ownedgames = ownedgames.concat(buyed_games);
console.log(ownedgames);

// Now as you owned the games you can install them

// if user want to install the last game 

installedgames.push(ownedgames.pop())
console.log(installedgames)

// if user want to install a specific game then
  
   // first find index of game he want to install
let game_index = ownedgames.indexOf("Call OF duty")
console.log(game_index) // 1

installedgames.push(... ownedgames.splice(1,1))

console.log(installedgames)

// now if a user played a game then

let p_game_index = installedgames.indexOf("Takken3")
console.log(p_game_index) //  index = 0

recentlyplayed = recentlyplayed.concat(installedgames.splice(p_game_index,1))

console.log(recentlyplayed)
