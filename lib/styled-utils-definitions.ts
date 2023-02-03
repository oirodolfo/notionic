import * as CSS from "csstype"
import type { Config } from "@/lib/styled-utils"
import { t, Token, transforms,  Length, createTransform, spaceXTemplate, spaceYTemplate } from "@/lib/styled-utils"

export const background: Config = {
    background: t.colors("background"),
    backgroundColor: t.colors("backgroundColor"),
    backgroundImage: t.propT("backgroundImage", transforms.bgImage),
    backgroundSize: true,
    backgroundPosition: true,
    backgroundRepeat: true,
    backgroundAttachment: true,
    backgroundClip: { transform: transforms.bgClip },
    bgSize: t.prop("backgroundSize"),
    bgPosition: t.prop("backgroundPosition"),
    bg: t.colors("background"),
    bgColor: t.colors("backgroundColor"),
    bgPos: t.prop("backgroundPosition"),
    bgRepeat: t.prop("backgroundRepeat"),
    bgAttachment: t.prop("backgroundAttachment"),
    bgGradient: t.propT("backgroundImage", transforms.gradient),
    bgClip: { transform: transforms.bgClip },
}

Object.assign(background, {
    bgImage: background.backgroundImage,
    bgImg: background.backgroundImage,
})

export interface BackgroundProps {
    /**
     * The CSS `background` property
     */
    bg?: Token<CSS.Property.Color, "colors">
    /**
     * The CSS `background-clip` property
     */
    bgClip?: Token<CSS.Property.BackgroundClip | "text">
    /**
     * The CSS `background-clip` property
     */
    backgroundClip?: Token<CSS.Property.BackgroundClip | "text">
    /**
     * The CSS `background` property
     */
    background?: Token<CSS.Property.Color, "colors">
    /**
     * The CSS `background-color` property
     */
    bgColor?: Token<CSS.Property.Color, "colors">
    /**
     * The CSS `background-color` property
     */
    backgroundColor?: Token<CSS.Property.Color, "colors">
    /**
     * The CSS `background-image` property
     */
    backgroundImage?: Token<CSS.Property.BackgroundImage>
    /**
     * The background-gradient shorthand
     */
    bgGradient?: Token<CSS.Property.BackgroundImage>
    /**
     * The CSS `background-size` property
     */
    backgroundSize?: Token<CSS.Property.BackgroundSize | number>
    /**
     * The CSS `background-position` property
     */
    bgPos?: Token<CSS.Property.BackgroundPosition | number>
    /**
     * The CSS `background-position` property
     */
    backgroundPosition?: Token<CSS.Property.BackgroundPosition | number>
    /**
     * The CSS `background-image` property
     */
    bgImage?: Token<CSS.Property.BackgroundImage>
    /**
     * The CSS `background-image` property
     */
    bgImg?: Token<CSS.Property.BackgroundImage>
    /**
     * The CSS `background-repeat` property
     */
    bgRepeat?: Token<CSS.Property.BackgroundRepeat>
    /**
     * The CSS `background-repeat` property
     */
    backgroundRepeat?: Token<CSS.Property.BackgroundRepeat>
    /**
     * The CSS `background-size` property
     */
    bgSize?: Token<CSS.Property.BackgroundSize | number>
    /**
     * The CSS `background-attachment` property
     */
    bgAttachment?: Token<CSS.Property.BackgroundAttachment>
    /**
     * The CSS `background-attachment` property
     */
    backgroundAttachment?: Token<CSS.Property.BackgroundAttachment>
    /**
     * The CSS `background-position` property
     */
    bgPosition?: Token<CSS.Property.BackgroundPosition | number>
}


// import * as CSS from "csstype"
// import {  } from "../utils/create-transform"
// import { Config } from "../utils/prop-config"

export const flexbox: Config = {
    alignItems: true,
    alignContent: true,
    justifyItems: true,
    justifyContent: true,
    flexWrap: true,
    flexDirection: { transform: transforms.flexDirection },
    experimental_spaceX: {
        static: spaceXTemplate,
        transform: createTransform({
            scale: "space",
            transform: (value) =>
                value !== null ? { "--chakra-space-x": value } : null,
        }),
    },
    experimental_spaceY: {
        static: spaceYTemplate,
        transform: createTransform({
            scale: "space",
            transform: (value) =>
                value != null ? { "--chakra-space-y": value } : null,
        }),
    },
    flex: true,
    flexFlow: true,
    flexGrow: true,
    flexShrink: true,
    flexBasis: t.sizes("flexBasis"),
    justifySelf: true,
    alignSelf: true,
    order: true,
    placeItems: true,
    placeContent: true,
    placeSelf: true,
    gap: t.space("gap"),
    rowGap: t.space("rowGap"),
    columnGap: t.space("columnGap"),
}

Object.assign(flexbox, {
    flexDir: flexbox.flexDirection,
})

export interface FlexboxProps {
    /**
     * The CSS `align-items` property.
     *
     * It defines the `align-self` value on all direct children as a group.
     *
     * - In Flexbox, it controls the alignment of items on the Cross Axis.
     * - In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/align-items)
     */
    alignItems?: Token<CSS.Property.AlignItems>
    /**
     * The CSS `align-content` property.
     *
     * It defines the distribution of space between and around
     * content items along a flexbox cross-axis or a grid's block axis.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/align-content)
     */
    alignContent?: Token<CSS.Property.AlignContent>
    /**
     * The CSS `justify-items` property.
     *
     * It defines the default `justify-self` for all items of the box,
     * giving them all a default way of justifying each box
     * along the appropriate axis.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/justify-items)
     */
    justifyItems?: Token<CSS.Property.JustifyItems>
    /**
     * The CSS `justify-content` property.
     *
     * It defines how the browser distributes space between and around content items
     * along the main-axis of a flex container, and the inline axis of a grid container.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/justify-content)
     */
    justifyContent?: Token<CSS.Property.JustifyContent>
    /**
     * The CSS `flex-wrap` property.
     *
     * It defines whether flex items are forced onto one line or
     * can wrap onto multiple lines. If wrapping is allowed,
     * it sets the direction that lines are stacked.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-wrap)
     */
    flexWrap?: Token<CSS.Property.FlexWrap>
    /**
     * The CSS `flex-flow` property.
     *
     * It is a shorthand property for `flex-direction` and `flex-wrap`.
     * It specifies the direction of a flex container, as well as its wrapping behavior.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-flow)
     */
    flexFlow?: Token<CSS.Property.FlexFlow>
    /**
     * The CSS `flex-basis` property.
     *
     * It defines the initial main size of a flex item.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-basis)
     */
    flexBasis?: Token<CSS.Property.FlexBasis<Length>>
    /**
     * The CSS `flex-direction` property.
     *
     * It defines how flex items are placed in the flex container
     * defining the main axis and the direction (normal or reversed).
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-direction)
     */
    flexDirection?: Token<CSS.Property.FlexDirection>
    /**
     * The CSS `flex-direction` property.
     *
     * It defines how flex items are placed in the flex container
     * defining the main axis and the direction (normal or reversed).
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-direction)
     */
    flexDir?: Token<CSS.Property.FlexDirection>
    /**
     * The CSS `flex` property.
     *
     * It defines how a flex item will grow or shrink
     * to fit the space available in its flex container.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex)
     */
    flex?: Token<CSS.Property.Flex<Length>>
    /**
     * The CSS `gap` property.
     *
     * It defines the gap between items in both flex and
     * grid contexts.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/gap)
     */
    gap?: Token<CSS.Property.Gap<Length>, "space">
    /**
     * The CSS `row-gap` property.
     *
     * It sets the size of the gap (gutter) between an element's grid rows.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/row-gap)
     */
    rowGap?: Token<CSS.Property.RowGap<Length>, "space">
    /**
     * The CSS `column-gap` property.
     *
     * It sets the size of the gap (gutter) between an element's columns.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/column-gap)
     */
    columnGap?: Token<CSS.Property.ColumnGap<Length>, "space">
    /**
     * The CSS `justify-self` property.
     *
     * It defines the way a box is justified inside its
     * alignment container along the appropriate axis.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-flow)
     */
    justifySelf?: Token<CSS.Property.JustifySelf>
    /**
     * The CSS `align-self` property.
     *
     * It works like `align-items`, but applies only to a
     * single flexbox item, instead of all of them.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/align-self)
     */
    alignSelf?: Token<CSS.Property.AlignSelf>
    /**
     * The CSS `order` property.
     *
     * It defines the order to lay out an item in a flex or grid container.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/order)
     */
    order?: Token<CSS.Property.Order>
    /**
     * The CSS `flex-grow` property.
     *
     * It defines how much a flexbox item should grow
     * if there's space available.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-grow)
     */
    flexGrow?: Token<CSS.Property.FlexGrow | (string & number)>
    /**
     * The CSS `flex-shrink` property.
     *
     * It defines how much a flexbox item should shrink
     * if there's not enough space available.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-shrink)
     */
    flexShrink?: Token<CSS.Property.FlexShrink | (string & number)>
    /**
     * The CSS `place-items` property.
     *
     * It allows you to align items along both the block and
     * inline directions at once (i.e. the align-items and justify-items properties)
     * in a relevant layout system such as `Grid` or `Flex`.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/place-items)
     */
    placeItems?: Token<CSS.Property.PlaceItems>
    /**
     * The CSS `place-content` property.
     *
     * It allows you to align content along both the block and
     * inline directions at once (i.e. the align-content and justify-content properties)
     * in a relevant layout system such as Grid or Flexbox.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/place-content)
     */
    placeContent?: Token<CSS.Property.PlaceContent>
    /**
     * The CSS `place-self` property.
     *
     * It allows you to align an individual item in both the block and
     * inline directions at once (i.e. the align-self and justify-self properties)
     * in a relevant layout system such as Grid or Flexbox.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/place-self)
     */
    placeSelf?: Token<CSS.Property.PlaceSelf>
    /**
     * Controls the horizontal space between elements
     */
    experimental_spaceX?: Token<CSS.Property.Margin | number, "space">
    /**
     * Controls the vertical space between elements
     */
    experimental_spaceY?: Token<CSS.Property.Margin | number, "space">
}


////////////////


export const grid: Config = {
    gridGap: t.space("gridGap"),
    gridColumnGap: t.space("gridColumnGap"),
    gridRowGap: t.space("gridRowGap"),
    gridColumn: true,
    gridRow: true,
    gridAutoFlow: true,
    gridAutoColumns: true,
    gridColumnStart: true,
    gridColumnEnd: true,
    gridRowStart: true,
    gridRowEnd: true,
    gridAutoRows: true,
    gridTemplate: true,
    gridTemplateColumns: true,
    gridTemplateRows: true,
    gridTemplateAreas: true,
    gridArea: true,
}

export interface GridProps {
    /**
     * The CSS `grid-gap` property.
     *
     * It defines the gaps (gutters) between rows and columns
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap)
     */
    gridGap?: Token<CSS.Property.GridGap | number, "space">
    /**
     * The CSS `grid-column-gap` property.
     *
     * It defines the size of the gap (gutter) between an element's columns.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
     */
    gridColumnGap?: Token<CSS.Property.GridColumnGap | number, "space">
    /**
     * The CSS `grid-row-gap` property.
     *
     * It defines the size of the gap (gutter) between an element's grid rows.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)
     */
    gridRowGap?: Token<CSS.Property.GridRowGap | number, "space">
    /**
     * The CSS `grid-column` property.
     *
     * It specifies a grid item’s start position within the grid column by
     * contributing a line, a span, or nothing (automatic) to its grid placement
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start)
     */
    gridColumnStart?: Token<CSS.Property.GridColumnStart>
    /**
     * The CSS `grid-row-start` property
     *
     * It specifies a grid item’s start position within the grid row by
     * contributing a line, a span, or nothing (automatic) to its grid placement,
     * thereby specifying the `inline-start` edge of its grid area.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start)
     */
    gridRowStart?: Token<CSS.Property.GridRowStart>
    /**
     * The CSS `grid-row-end` property
     *
     * It specifies a grid item’s end position within the grid row by
     * contributing a line, a span, or nothing (automatic) to its grid placement,
     * thereby specifying the `inline-end` edge of its grid area.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end)
     */
    gridRowEnd?: Token<CSS.Property.GridRowEnd>
    /**
     * The CSS `grid-template` property.
     *
     * It is a shorthand property for defining grid columns, rows, and areas.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template)
     */
    gridTemplate?: Token<CSS.Property.GridTemplate>
    /**
     * The CSS `grid-column` property
     *
     * It specifies a grid item’s end position within the grid column by
     * contributing a line, a span, or nothing (automatic) to its grid placement,
     * thereby specifying the block-end edge of its grid area.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end)
     */
    gridColumnEnd?: Token<CSS.Property.GridColumnEnd>
    /**
     * The CSS `grid-column` property.
     *
     * It specifies a grid item's size and location within a grid column
     * by contributing a line, a span, or nothing (automatic) to its grid placement,
     * thereby specifying the `inline-start` and `inline-end` edge of its grid area.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)
     */
    gridColumn?: Token<CSS.Property.GridColumn>
    /**
     * The CSS `grid-row` property
     *
     * It specifies a grid item’s size and location within the grid row
     * by contributing a line, a span, or nothing (automatic) to its grid placement,
     * thereby specifying the `inline-start` and `inline-end` edge of its grid area.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
     */
    gridRow?: Token<CSS.Property.GridRow>
    /**
     * The CSS `grid-auto-flow` property
     *
     * It controls how the auto-placement algorithm works,
     * specifying exactly how auto-placed items get flowed into the grid.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
     */
    gridAutoFlow?: Token<CSS.Property.GridAutoFlow>
    /**
     * The CSS `grid-auto-columns` property.
     *
     * It specifies the size of an implicitly-created grid column track or pattern of tracks.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)
     */
    gridAutoColumns?: Token<CSS.Property.GridAutoColumns>
    /**
     * The CSS `grid-auto-rows` property.
     *
     * It specifies the size of an implicitly-created grid row track or pattern of tracks.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
     */
    gridAutoRows?: Token<CSS.Property.GridAutoRows>
    /**
     * The CSS `grid-template-columns` property
     *
     * It defines the line names and track sizing functions of the grid columns.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
     */
    gridTemplateColumns?: Token<CSS.Property.GridTemplateColumns>
    /**
     * The CSS `grid-template-rows` property.
     *
     * It defines the line names and track sizing functions of the grid rows.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)
     */
    gridTemplateRows?: Token<CSS.Property.GridTemplateRows>
    /**
     * The CSS `grid-template-areas` property.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
     */
    gridTemplateAreas?: Token<CSS.Property.GridTemplateAreas>
    /**
     * The CSS `grid-areas` property.
     *
     * It specifies a grid item’s size and location within a grid by
     * contributing a line, a span, or nothing (automatic)
     * to its grid placement, thereby specifying the edges of its grid area.
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)
     */
    gridArea?: Token<CSS.Property.GridArea>
}
