# Raster

A work-in-progress replacement for my [HTML Less Template](https://github.com/robenkleene/HTML-LESS-Template). The main features are:

- **Moved from XHTML to HTML5**
- **Switched from [LESS](http://lesscss.org/) to [Sass](http://sass-lang.com/)**: CSS preprocessing is now done with Sass, for no other reason than I didn't like the looks of the [node.js](http://nodejs.org/) installer LESS now requires.
- **Automatic typographical hierarchy**: Now [traditional header font proportions](http://retinart.net/typography/typographicscale/) are set based on the body font size.
- **A more traditional typographic grid**: The old grid used a square (equal vertically and horizontally), which enforced equal [unit and leading]([Thinking with Type | Contents](http://www.thinkingwithtype.com/contents/grid/). The new grid uses the leading vertically and the unit horizontally. Traditionally the unit is 1 em and the leading 1< em.
- **An HTML5 Canvas-based grid analysis system**

Use the [template](Template) to get started