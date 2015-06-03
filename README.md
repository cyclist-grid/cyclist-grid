# Raster

Raster is a simple typography and grid framework written in Sass.

* It replaces the default sizes for header level elements (i.e., `H1`-`H6`) based on the [traditional point scale](http://markboulton.co.uk/journal/five-simple-steps-to-better-typography-part-4).
* The header font sizes are not fixed. Instead they are defined as ratios from `12px` body type. If the body type size is less than or over `12px`, the sizes of the headers maintain their proportional size relative to the body type size.
* Text is [aligned to the baseline grid](http://24ways.org/2006/compose-to-a-vertical-rhythm):
	* Headers are given a `line-height` that's a multiple of the [leading](http://en.wikipedia.org/wiki/Leading).
	* All block level elements are given a `top-margin` of `0` and a `bottom-margin` equal to the leading.

## How to use?

* Just as a css file
* Recompile with a new leading
* Use the exposed `$leading` Sass variable


## Usage

The `font-size` property must be specified higher in the hierarchy than the `line-height` (this is because Raster relies on `rem` unit which is relative to the `font-size` on the root `html` element).

You can set the optional `$font-size` variable, and Raster will take care of setting the `font-size` on the `html` element for you. Or you can simply sent the `font-size` on the `html` tag in CSS yourself.

You can think of Raster having two "modes". 

And just live with the fact that some ratios 

Raster requires Sass.

1. Import the `raster.scss` file from the `dist` folder into your own `scss` file. E.g., `@import "[path to raster]/dist/raster";`
2. Optionally, override the default `$font-size` and `$line-height` settings before the import line. For example:

		$font-size: 15px;
		$line-height: 20px;
		@import "[path to raster]/dist/raster";

Alternatively, a pre-compiled default CSS file is also included in the `dist` folder.

## Caveats

* Raster is only tested in WebKit derivative browsers: Chrome and Safari.
* Due to the imprecisions of CSS math, `font-size` and `line-height` combinations that result in a decimal number leading will not align properly to the baseline grid. For example, a `font-size` of `16px` and `line-height` of `120%` results in a decimal leading of `19.2` (i.e., `1.2 * 16 = 19.2`). The browsers handling of the decimal number results (perhaps browsers could handle this better, but it's also an inevitable result of rendering fractions to whole number pixel positions.)

	There are essentially three work-arounds for this problem:
	
	1. Specify a `line-height` in pixels. (probably a `$font-size` too)
	2. Make sure your `font-size` and `line-height` combination result in a whole number leading: (e.g., a `$font-size`  `12px × 1.25 = 15px`)
	3. Just don't worry about slight drift caused by the off by one errors in rendering to the baseline grid.

The easiest way around this is to set both the `font-size` and `line-height` in pixels.

## Typography

### Typographic Hierarchy

[Traditional typography defines](http://markboulton.co.uk/journal/five-simple-steps-to-better-typography-part-4) the following font sizes:

* `6pt`: nonpareil
* `7pt`: minion
* `8pt`: brevier or small text
* `9pt`: bourgeois or galliard
* `10pt`: long primer or garamond
* `11pt`: small pica or philosophy
* `12pt`: pica
* `14pt`: english or augustin
* `18pt`: great primer
* `21pt`: double small pica or double pica
* `24pt`: double pica or two-line pica
* `36pt`: double great primer or 2-line great primer

Using those values as is in CSS is simple, but then only a few appropriate font sizes are available for body text (e.g., perhaps `10pt` to `18pt` or "long primer" to "great primer").

Raster's solution is to instead treat the traditional font sizes as *ratios* of these traditional sizes in order to define header sizes based on a body font size. Raster uses the `12pt` pica as to define the hierarchical font sizes as ratios as follows:

* "double great primer": 36 / 12
* "double pica": 24 / 12
* "double small pica": 21 / 12
* "great primer": 18 / 12
* "english": 14 / 12
* "pica": 12 / 12

It then maps these ratios to HTML header tags:

* `H1`: double great primer
* `H2`: double pica
* `H3`: double small pica
* `H4`: great primer
* `H5`: english
* `H6`: pica

Since the header sizes are defined as ratios to the body size, this means that any header will remain in proportion regardless of which body size is defined. The header font sizes are calculated as follows: `[body size] * [ratio]`. E.g., if the body font size is `15px`, then the `H1` header font size will be `15 * (36 / 12) = 45px`.

### Vertical Rhythm

A [vertical rhythm](http://24ways.org/2006/compose-to-a-vertical-rhythm) is making sure the spacing of elements consistently aligns to the baseline grid.

Raster aligns elements to the baseline grid using the following rules:

* All default margins and padding are set to zero by the CSS reset.
* The line height is used as the leading.
* All block level elements are given a bottom margin equal to the leading. (The exception to this is hierarchical sublists, which have a bottom margin of zero. I.e., a list within a list does not have a bottom margin)
* Headers are fitted to the closest matching line height that's a multiple of the leading. E.g., if the calculated header height is `21px` and the leading is `17px`, then the line height of the header will be `34px`. (This is in addition to having a bottom margin since headers are block level elements.)

## Implementation Notes

* Only pixels can be used to set the `$font-size` and `$line-height` variables. This is because that ratio of one to the other is used in various calculations, so it's necessary for their implementation to be simple and consistent.

## Resources

* [Compose to a Vertical Rhythm ◆ 24 ways](http://24ways.org/2006/compose-to-a-vertical-rhythm)
* [Five simple steps to better typography - Part 4 | Journal | The Personal Disquiet of Mark Boulton](http://markboulton.co.uk/journal/five-simple-steps-to-better-typography-part-4)
* [Thinking with Type | Contents](http://www.thinkingwithtype.com/contents/grid/)