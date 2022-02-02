# Tap to Roll

**[Tap to Roll](https://auroratide.github.io/tap-to-roll/)** is a simple online dice rolling utility, perfect for your Dungeons and Dragons or other roleplaying game!

_"But Timothy,"_ I hear you ask, _"what makes this different from every other dice thingy out there?"_ Great question!

Well, most dice apps I've tried generally let you specify how many dice you want to roll and also how many sides the dice should have. **Tap to Roll**... doesn't do that.

_"But Timothy! That means your app does less??"_

Nope! It does just as much, but _instead_ of explicitly telling the app how many dice to roll, you just tap the die that many times, and the app adds everything for you.

Need to roll 8d6 of fireball damage? Just tap the **d6** die eight times! As it turns out, this is generally more convenient as it results in less clicks. You don't need to bring up a keyboard to type in a number; you don't need to tap the Up button for number of sides 20 times to get a 20-sided die. Literally just **Tap to Roll**!

## Features

* Supports all the standard dice (d4, d6, d8, d10, d12, d20, and d100)
* Also supports a coin flip (d2)
* Automatically adds successive rolls
* Provides a Min and Max, perfect if you're rolling for advantage or disadvantage in DnD
* Shows individual roll results
* Automatically clears previous results if it's been a while; in other words, it detects when you want a new set of rolls without needing to hit "Clear" (though the clear button is there if needed)

## Limitations

* Currently only adds, so no subtraction
* Does not add modifiers; sorry, but _some_ mental math is healthy I guess!
* _Only_ supports the standard dice, so no d7's or stuff like that

## Technology

Built as a React app, mostly to keep my React skills sharp.

* [Parcel](https://parceljs.org/) for (mostly) painless configuration and build
* [React](https://reactjs.org/) for frontend, for practice
* [CSS Modules](https://github.com/css-modules/css-modules) for scoped CSS
  * I generally prefer this over CSS-in-JS because it's more faithful to the native web
* [Typescript](https://www.typescriptlang.org/) for static typing
* [Jest](https://jestjs.io/) for testing, since it basically goes hand-in-hand with React
* [Testing Library](https://testing-library.com/), since I agree with most of its testing philosophy

## Credits

Fonts are remakes of the fonts used in the Dungeons and Dragons handbook. They are open source:

* [Solbera DnD Fonts](https://github.com/jonathonf/solbera-dnd-fonts) (CC-BY-SA-4.0)
