# Grid

Work in progress replacement for my [HTML Less Template](https://github.com/robenkleene/HTML-LESS-Template). The main features are:

- HTML5
- Switched from Less CSS to Sass as a CSS preprocessor, essentially only because I didn't like the looks of the [node.js](http://nodejs.org/) installer required by Less CSS now.
- Easy typographical hierarchy, this is now done by just setting a base font size and having the corresponding [traditional header proportions](http://retinart.net/typography/typographicscale/) font sizes be set based on that font size.
- A more traditional typographic grid, the old grid used a square (equal vertical and horizontal spacing), this enforced an equal unit and leading. The new system uses leading vertically and the unit horizontally for the grid sizes. The unit is traditionally 1 em and the leading >1 em.
- An HTML5 Canvas-based grid analysis system.