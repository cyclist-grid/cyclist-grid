# HTML Template

A replacement for the old template, the main features are:

- HTML5
- Less CSS to Sass (Sass was essentially chosen because I didn't like how Less is now Node.js and Node has a jangly install package.)
- Proportional typographical hierarchy. Set a base font size, and the template will set headers to their correct proportional sizes automatically.
- A more traditional typographic grid, the old system would use a square to define both horizontal and vertical grid measurements, in essence enforcing an equal unit and leading. The new system uses the leading as the vertical grid spacing size, and the unit as the horizontal grid spacing size. Traditionally the unit is 1 em and the leading is >1 em.