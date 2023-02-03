// import type { ThemeScale } from "../create-theme-vars"
// import { createTransform } from "./create-transform"
// import { pipe } from "./pipe"
// import { logical, PropConfig, toConfig } from "./prop-config"
// import { transformFunctions as transforms } from "./transform-functions"
// import * as CSS from "csstype"
// import { createTransform } from "./create-transform"
// import { ThemeScale } from "../create-theme-vars"
// import type { CssTheme, Transform } from "./types"

import { isObject, mergeWith } from "lodash"
// import type { ThemeScale } from "../create-theme-vars"
// import type { Transform } from "./types"

// import { AnalyzeBreakpointsReturn } from "@chakra-ui/breakpoint-utils"

import * as CSS from "csstype"

// import { ThemeScale } from "../create-theme-vars"
// import type { CssTheme, Transform } from "./types"


// import { isObject } from "@chakra-ui/shared-utils"

//

// import { isObject } from "@chakra-ui/shared-utils"
// import { calc, Operand } from "./calc"
// import { cssVar } from "./css-var"
//
// import { isObject } from "@chakra-ui/shared-utils"
// import { Union } from "../utils"
//
// export type SemanticValue<
//     Conditions extends string,
//     Token extends string = string,
// > = Union<Token> | Partial<Record<"default" | Conditions, Union<Token>>>

// export type PlainToken = { isSemantic: false; value: string | number }
// export type SemanticToken = {
//     isSemantic: true
//     value: string | number | SemanticValue<string>
// }
//
// export type FlatToken = PlainToken | SemanticToken
// export type FlatTokens = Record<string, FlatToken>
//
// export type FlattenTokensParam = {
//     tokens?: object
//     semanticTokens?: object
// }

export function _flattenTokens<T extends FlattenTokensParam>({
                                                                tokens,
                                                                semanticTokens,
                                                            }: T) {
    const tokenEntries = Object.entries(flatten(tokens) ?? {}).map(
        ([token, value]) => {
            const enhancedToken = { isSemantic: false, value }
            return [token, enhancedToken] as [string, PlainToken]
        },
    )
    const semanticTokenEntries = Object.entries(
        flatten(semanticTokens, 1) ?? {},
    ).map(([token, value]) => {
        const enhancedToken = { isSemantic: true, value }
        return [token, enhancedToken] as [string, SemanticToken]
    })

    return Object.fromEntries([
        ...tokenEntries,
        ...semanticTokenEntries,
    ]) as FlatTokens
}

export function _flatten<Value = any>(
    target: Record<string, Value> | undefined | null,
    maxDepth = Infinity,
) {
    if ((!isObject(target) && !Array.isArray(target)) || !maxDepth) {
        return target
    }

    return Object.entries(target).reduce((result, [key, value]) => {
        if (isObject(value) || Array.isArray(value)) {
            Object.entries(flatten(value, maxDepth - 1)).forEach(
                ([childKey, childValue]) => {
                    // e.g. gray.500
                    result[`${key}.${childKey}`] = childValue
                },
            )
        } else {
            // e.g. transparent
            result[key] = value
        }

        return result
    }, {} as any)
}
export interface CreateThemeVarsOptions {
    cssVarPrefix?: string
}

export interface ThemeVars {
    cssVars: Record<string, any>
    cssMap: Record<string, any>
}

/**
 * Convert a token name to a css variable
 *
 * @example
 * tokenToCssVar('colors.red.500', 'chakra')
 * => {
 *   variable: '--chakra-colors-red-500',
 *   reference: 'var(--chakra-colors-red-500)'
 * }
 */
function _tokenToCssVar(token: string | number, prefix?: string) {
    return cssVar(String(token).replace(/\./g, "-"), undefined, prefix)
}

export function createThemeVars(
    flatTokens: FlatTokens,
    options: CreateThemeVarsOptions,
) {
    let cssVars: Record<string, any> = {}
    const cssMap: Record<string, any> = {}

    for (const [token, tokenValue] of Object.entries<FlatToken>(flatTokens)) {
        const { isSemantic, value } = tokenValue
        const { variable, reference } = tokenToCssVar(token, options?.cssVarPrefix)

        if (!isSemantic) {
            if (token.startsWith("space")) {
                const keys = token.split(".")
                const [firstKey, ...referenceKeys] = keys
                /** @example space.-4 */
                const negativeLookupKey = `${firstKey}.-${referenceKeys.join(".")}`
                const negativeValue = calc.negate(value as Operand)
                const negatedReference = calc.negate(reference)
                cssMap[negativeLookupKey] = {
                    value: negativeValue,
                    var: variable,
                    varRef: negatedReference,
                }
            }

            cssVars[variable] = value
            cssMap[token] = {
                value,
                var: variable,
                varRef: reference,
            }
            continue
        }

        const lookupToken = (maybeToken: string) => {
            const scale = String(token).split(".")[0]
            const withScale = [scale, maybeToken].join(".")
            /** @example flatTokens['space.4'] === '16px' */
            const resolvedTokenValue = flatTokens[withScale]
            if (!resolvedTokenValue) return maybeToken
            const { reference } = tokenToCssVar(withScale, options?.cssVarPrefix)
            return reference
        }

        const normalizedValue = isObject(value) ? value : { default: value }

        cssVars = mergeWith(
            cssVars,
            Object.entries(normalizedValue).reduce(
                (acc, [conditionAlias, conditionValue]) => {
                    const maybeReference = lookupToken(conditionValue)
                    if (conditionAlias === "default") {
                        acc[variable] = maybeReference
                        return acc
                    }

                    /** @example { _dark: "#fff" } => { '.chakra-ui-dark': "#fff" } */
                    const conditionSelector =
                        (pseudoSelectors as any)?.[conditionAlias] ?? conditionAlias
                    acc[conditionSelector] = { [variable]: maybeReference }

                    return acc
                },
                {} as any,
            ),
        )

        cssMap[token] = {
            value: reference,
            var: variable,
            varRef: reference,
        }
    }

    return {
        cssVars,
        cssMap,
    }
}



// export function isObject(value: any): value is Record<string, any> {
//     const type = typeof value
//     return (
//         value != null &&
//         (type === "object" || type === "function") &&
//         !Array.isArray(value)
//     )
// }


export const breakpoints = Object.freeze([
    "base",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
])

export function mapResponsive(prop: any, mapper: (val: any) => any) {
    if (Array.isArray(prop)) {
        return prop.map((item) => (item === null ? null : mapper(item)))
    }

    if (isObject(prop)) {
        return Object.keys(prop).reduce((result: Record<string, any>, key) => {
            result[key] = mapper(prop[key])
            return result
        }, {})
    }

    if (prop != null) {
        return mapper(prop)
    }

    return null
}

export function objectToArrayNotation(
    obj: Record<string, any>,
    bps = breakpoints,
) {
    const result = bps.map((br) => obj[br] ?? null)
    const lastItem = result[result.length - 1]
    while (lastItem === null) result.pop()
    return result
}

export function arrayToObjectNotation(values: any[], bps = breakpoints) {
    const result = {} as Record<string, any>
    values.forEach((value, index) => {
        const key = bps[index]
        if (value == null) return
        result[key] = value
    })
    return result
}

export function isResponsiveObjectLike(
    obj: Record<string, any>,
    bps = breakpoints,
) {
    const keys = Object.keys(obj)
    return keys.length > 0 && keys.every((key) => bps.includes(key))
}

/**
 * since breakpoints are defined as custom properties on an array, you may
 * `Object.keys(theme.breakpoints)` to retrieve both regular numeric indices
 * and custom breakpoints as string.
 *
 * This function returns true given a custom array property.
 */
export const isCustomBreakpoint = (v: string) => Number.isNaN(Number(v))


function getLastItem<T>(array: T[]): T | undefined {
    const length = array == null ? 0 : array.length
    return length ? array[length - 1] : undefined
}

function analyzeCSSValue(value: number | string) {
    const num = parseFloat(value.toString())
    const unit = value.toString().replace(String(num), "")
    return { unitless: !unit, value: num, unit }
}

export function px(value: number | string | null): string | null {
    if (value == null) return value as string | null
    const { unitless } = analyzeCSSValue(value)
    return unitless || typeof value === "number" ? `${value}px` : value
}

const sortByBreakpointValue = (a: any[], b: any[]) =>
    parseInt(a[1], 10) > parseInt(b[1], 10) ? 1 : -1

const sortBps = (breakpoints: Record<string, any>): Record<string, any> =>
    Object.fromEntries(Object.entries(breakpoints).sort(sortByBreakpointValue))

function normalize(breakpoints: Record<string, any>) {
    const sorted = sortBps(breakpoints)
    return Object.assign(Object.values(sorted), sorted) as string[]
}

function keys(breakpoints: Record<string, any>) {
    const value = Object.keys(sortBps(breakpoints))
    return new Set(value)
}

function _subtract(value: string) {
    if (!value) return value
    value = px(value) ?? value

    const OFFSET = -0.02

    return typeof value === "number"
        ? `${value + OFFSET}`
        : value.replace(/(\d+\.?\d*)/u, (m) => `${parseFloat(m) + OFFSET}`)
}

export function toMediaQueryString(min: string | null, max?: string) {
    const query = ["@media screen"]

    if (min) query.push("and", `(min-width: ${px(min)})`)
    if (max) query.push("and", `(max-width: ${px(max)})`)

    return query.join(" ")
}

export function analyzeBreakpoints(breakpoints: Record<string, any>) {
    if (!breakpoints) return null

    breakpoints.base = breakpoints.base ?? "0px"

    const normalized = normalize(breakpoints)

    const queries = Object.entries(breakpoints)
        .sort(sortByBreakpointValue)
        .map(([breakpoint, minW], index, entry) => {
            let [, maxW] = entry[index + 1] ?? []
            maxW = parseFloat(maxW) > 0 ? subtract(maxW) : undefined
            return {
                _minW: subtract(minW),
                breakpoint,
                minW,
                maxW,
                maxWQuery: toMediaQueryString(null, maxW),
                minWQuery: toMediaQueryString(minW),
                minMaxQuery: toMediaQueryString(minW, maxW),
            }
        })

    const _keys = keys(breakpoints)
    const _keysArr = Array.from(_keys.values())

    return {
        keys: _keys,
        normalized,
        isResponsive(test: Record<string, any>) {
            const keys = Object.keys(test)
            return keys.length > 0 && keys.every((key) => _keys.has(key))
        },
        asObject: sortBps(breakpoints),
        asArray: normalize(breakpoints),
        details: queries,
        media: [
            null,
            ...normalized.map((minW) => toMediaQueryString(minW)).slice(1),
        ],
        /**
         * Converts the object responsive syntax to array syntax
         *
         * @example
         * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
         */
        toArrayValue(test: Record<string, any>) {
            if (!isObject(test)) {
                throw new Error("toArrayValue: value must be an object")
            }
            const result = _keysArr.map((bp) => test[bp] ?? null)
            while (getLastItem(result) === null) {
                result.pop()
            }
            return result
        },
        /**
         * Converts the array responsive syntax to object syntax
         *
         * @example
         * toObjectValue([1, 2, 3]) // => { base: 1, sm: 2, md: 3 }
         */
        toObjectValue(test: any[]) {
            if (!Array.isArray(test)) {
                throw new Error("toObjectValue: value must be an array")
            }
            return test.reduce((acc, value, index) => {
                const key = _keysArr[index]
                if (key != null && value != null) acc[key] = value
                return acc
            }, {} as Record<string, any>)
        },
    }
}

export type AnalyzeBreakpointsReturn = ReturnType<typeof analyzeBreakpoints>

/**
 * Thank you @markdalgleish for this piece of art!
 */
// import { isObject } from "@chakra-ui/shared-utils"

export type Operand = string | number | { reference: string }
type Operator = "+" | "-" | "*" | "/"

function resolveReference(operand: Operand): string {
    if (isObject(operand) && operand?.reference) {
        return operand?.reference
    }
    return String(operand)
}

const toExpression = (operator: Operator, ...operands: Array<Operand>) =>
    operands.map(resolveReference).join(` ${operator} `).replace(/calc/g, "")

const add = (...operands: Array<Operand>) =>
    `calc(${toExpression("+", ...operands)})`

const subtract = (...operands: Array<Operand>) =>
    `calc(${toExpression("-", ...operands)})`

const multiply = (...operands: Array<Operand>) =>
    `calc(${toExpression("*", ...operands)})`

const divide = (...operands: Array<Operand>) =>
    `calc(${toExpression("/", ...operands)})`

const negate = (x: Operand) => {
    const value = resolveReference(x)

    if (value != null && !Number.isNaN(parseFloat(value))) {
        return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`
    }

    return multiply(value, -1)
}

interface CalcChain {
    add: (...operands: Array<Operand>) => CalcChain
    subtract: (...operands: Array<Operand>) => CalcChain
    multiply: (...operands: Array<Operand>) => CalcChain
    divide: (...operands: Array<Operand>) => CalcChain
    negate: () => CalcChain
    toString: () => string
}

export const calc = Object.assign(
    (x: Operand): CalcChain => ({
        add: (...operands) => calc(add(x, ...operands)),
        subtract: (...operands) => calc(subtract(x, ...operands)),
        multiply: (...operands) => calc(multiply(x, ...operands)),
        divide: (...operands) => calc(divide(x, ...operands)),
        negate: () => calc(negate(x)),
        toString: () => x.toString(),
    }),
    {
        add,
        subtract,
        multiply,
        divide,
        negate,
    },
)

function replaceWhiteSpace(value: string, replaceValue = "-") {
    return value.replace(/\s+/g, replaceValue)
}

function escape(value: string | number) {
    const valueStr = replaceWhiteSpace(value.toString())

    return escapeSymbol(escapeDot(valueStr))
}

function escapeDot(value: string) {
    if (value.includes("\\.")) return value
    const isDecimal = !Number.isInteger(parseFloat(value.toString()))
    return isDecimal ? value.replace(".", `\\.`) : value
}

function escapeSymbol(value: string) {
    return value.replace(/[!-,/:-@[-^`{-~]/g, "\\$&")
}

export function addPrefix(value: string, prefix = "") {
    return [prefix, value].filter(Boolean).join("-")
}

export function toVarReference(name: string, fallback?: string) {
    return `var(${name}${fallback ? `, ${fallback}` : ""})`
}

export function toVarDefinition(value: string, prefix = "") {
    return escape(`--${addPrefix(value, prefix)}`)
}

export function cssVar(name: string, fallback?: string, cssVarPrefix?: string) {
    const cssVariable = toVarDefinition(name, cssVarPrefix)
    return {
        variable: cssVariable,
        reference: toVarReference(cssVariable, fallback),
    }
}

// import { isObject } from "@chakra-ui/shared-utils"
// import { Union } from "../utils"

export type SemanticValue<
    Conditions extends string,
    Token extends string = string,
> = Union<Token> | Partial<Record<"default" | Conditions, Union<Token>>>

export type PlainToken = { isSemantic: false; value: string | number }
export type SemanticToken = {
    isSemantic: true
    value: string | number | SemanticValue<string>
}

export type FlatToken = PlainToken | SemanticToken
export type FlatTokens = Record<string, FlatToken>

export type FlattenTokensParam = {
    tokens?: object
    semanticTokens?: object
}

export function flattenTokens<T extends FlattenTokensParam>({
                                                                tokens,
                                                                semanticTokens,
                                                            }: T) {
    const tokenEntries = Object.entries(flatten(tokens) ?? {}).map(
        ([token, value]) => {
            const enhancedToken = { isSemantic: false, value }
            return [token, enhancedToken] as [string, PlainToken]
        },
    )
    const semanticTokenEntries = Object.entries(
        flatten(semanticTokens, 1) ?? {},
    ).map(([token, value]) => {
        const enhancedToken = { isSemantic: true, value }
        return [token, enhancedToken] as [string, SemanticToken]
    })

    return Object.fromEntries([
        ...tokenEntries,
        ...semanticTokenEntries,
    ]) as FlatTokens
}

export function flatten<Value = any>(
    target: Record<string, Value> | undefined | null,
    maxDepth = Infinity,
) {
    if ((!isObject(target) && !Array.isArray(target)) || !maxDepth) {
        return target
    }

    return Object.entries(target).reduce((result, [key, value]) => {
        if (isObject(value) || Array.isArray(value)) {
            Object.entries(flatten(value, maxDepth - 1)).forEach(
                ([childKey, childValue]) => {
                    // e.g. gray.500
                    result[`${key}.${childKey}`] = childValue
                },
            )
        } else {
            // e.g. transparent
            result[key] = value
        }

        return result
    }, {} as any)
}

// import { FlatToken, FlatTokens } from "./flatten-tokens"
type AnyFunction<T = any> = (...args: T[]) => any

const state = {
    hover: (str: string, post: string) =>
        `${str}:hover ${post}, ${str}[data-hover] ${post}`,
    focus: (str: string, post: string) =>
        `${str}:focus ${post}, ${str}[data-focus] ${post}`,
    focusVisible: (str: string, post: string) => `${str}:focus-visible ${post}`,
    focusWithin: (str: string, post: string) => `${str}:focus-within ${post}`,
    active: (str: string, post: string) =>
        `${str}:active ${post}, ${str}[data-active] ${post}`,
    disabled: (str: string, post: string) =>
        `${str}:disabled ${post}, ${str}[data-disabled] ${post}`,
    invalid: (str: string, post: string) =>
        `${str}:invalid ${post}, ${str}[data-invalid] ${post}`,
    checked: (str: string, post: string) =>
        `${str}:checked ${post}, ${str}[data-checked] ${post}`,
    indeterminate: (str: string, post: string) =>
        `${str}:indeterminate ${post}, ${str}[aria-checked=mixed] ${post}, ${str}[data-indeterminate] ${post}`,
    readOnly: (str: string, post: string) =>
        `${str}:read-only ${post}, ${str}[readonly] ${post}, ${str}[data-read-only] ${post}`,
    expanded: (str: string, post: string) =>
        `${str}:read-only ${post}, ${str}[aria-expanded=true] ${post}, ${str}[data-expanded] ${post}`,
    placeholderShown: (str: string, post: string) =>
        `${str}:placeholder-shown ${post}`,
}

const toGroup = (fn: AnyFunction) =>
    merge((v) => fn(v, "&"), "[role=group]", "[data-group]", ".group")

const toPeer = (fn: AnyFunction) =>
    merge((v) => fn(v, "~ &"), "[data-peer]", ".peer")

const merge = (fn: AnyFunction, ...selectors: string[]) =>
    selectors.map(fn).join(", ")

export const pseudoSelectors = {
    /**
     * Styles for CSS selector `&:hover`
     */
    _hover: "&:hover, &[data-hover]",
    /**
     * Styles for CSS Selector `&:active`
     */
    _active: "&:active, &[data-active]",
    /**
     * Styles for CSS selector `&:focus`
     *
     */
    _focus: "&:focus, &[data-focus]",
    /**
     * Styles for the highlighted state.
     */
    _highlighted: "&[data-highlighted]",
    /**
     * Styles to apply when a child of this element has received focus
     * - CSS Selector `&:focus-within`
     */
    _focusWithin: "&:focus-within",
    /**
     * Styles to apply when this element has received focus via tabbing
     * - CSS Selector `&:focus-visible`
     */
    _focusVisible: "&:focus-visible, &[data-focus-visible]",
    /**
     * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
     * - `&[aria-disabled=true]`
     * - `&:disabled`
     * - `&[data-disabled]`
     * - `&[disabled]`
     */
    _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
    /**
     * Styles for CSS Selector `&:readonly`
     */
    _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
    /**
     * Styles for CSS selector `&::before`
     *
     * NOTE:When using this, ensure the `content` is wrapped in a backtick.
     * @example
     * ```jsx
     * <Box _before={{content:`""` }}/>
     * ```
     */
    _before: "&::before",
    /**
     * Styles for CSS selector `&::after`
     *
     * NOTE:When using this, ensure the `content` is wrapped in a backtick.
     * @example
     * ```jsx
     * <Box _after={{content:`""` }}/>
     * ```
     */
    _after: "&::after",
    /**
     * Styles for CSS selector `&:empty`
     */
    _empty: "&:empty",
    /**
     * Styles to apply when the ARIA attribute `aria-expanded` is `true`
     * - CSS selector `&[aria-expanded=true]`
     */
    _expanded: "&[aria-expanded=true], &[data-expanded]",
    /**
     * Styles to apply when the ARIA attribute `aria-checked` is `true`
     * - CSS selector `&[aria-checked=true]`
     */
    _checked: "&[aria-checked=true], &[data-checked]",
    /**
     * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
     * - CSS selector `&[aria-grabbed=true]`
     */
    _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
    /**
     * Styles for CSS Selector `&[aria-pressed=true]`
     * Typically used to style the current "pressed" state of toggle buttons
     */
    _pressed: "&[aria-pressed=true], &[data-pressed]",
    /**
     * Styles to apply when the ARIA attribute `aria-invalid` is `true`
     * - CSS selector `&[aria-invalid=true]`
     */
    _invalid: "&[aria-invalid=true], &[data-invalid]",
    /**
     * Styles for the valid state
     * - CSS selector `&[data-valid], &[data-state=valid]`
     */
    _valid: "&[data-valid], &[data-state=valid]",
    /**
     * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
     * Useful for styling loading states
     */
    _loading: "&[data-loading], &[aria-busy=true]",
    /**
     * Styles to apply when the ARIA attribute `aria-selected` is `true`
     *
     * - CSS selector `&[aria-selected=true]`
     */
    _selected: "&[aria-selected=true], &[data-selected]",
    /**
     * Styles for CSS Selector `[hidden=true]`
     */
    _hidden: "&[hidden], &[data-hidden]",
    /**
     * Styles for CSS Selector `&:-webkit-autofill`
     */
    _autofill: "&:-webkit-autofill",
    /**
     * Styles for CSS Selector `&:nth-child(even)`
     */
    _even: "&:nth-of-type(even)",
    /**
     * Styles for CSS Selector `&:nth-child(odd)`
     */
    _odd: "&:nth-of-type(odd)",
    /**
     * Styles for CSS Selector `&:first-of-type`
     */
    _first: "&:first-of-type",
    /**
     * Styles for CSS Selector `&:last-of-type`
     */
    _last: "&:last-of-type",
    /**
     * Styles for CSS Selector `&:not(:first-of-type)`
     */
    _notFirst: "&:not(:first-of-type)",
    /**
     * Styles for CSS Selector `&:not(:last-of-type)`
     */
    _notLast: "&:not(:last-of-type)",
    /**
     * Styles for CSS Selector `&:visited`
     */
    _visited: "&:visited",
    /**
     * Used to style the active link in a navigation
     * Styles for CSS Selector `&[aria-current=page]`
     */
    _activeLink: "&[aria-current=page]",
    /**
     * Used to style the current step within a process
     * Styles for CSS Selector `&[aria-current=step]`
     */
    _activeStep: "&[aria-current=step]",
    /**
     * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
     * - CSS selector `&[aria-checked=mixed]`
     */
    _indeterminate:
        "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
    /**
     * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
     */
    _groupHover: toGroup(state.hover),
    /**
     * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
     */
    _peerHover: toPeer(state.hover),
    /**
     * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
     */
    _groupFocus: toGroup(state.focus),
    /**
     * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
     */
    _peerFocus: toPeer(state.focus),
    /**
     * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
     */
    _groupFocusVisible: toGroup(state.focusVisible),
    /**
     * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
     */
    _peerFocusVisible: toPeer(state.focusVisible),
    /**
     * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
     */
    _groupActive: toGroup(state.active),
    /**
     * Styles to apply when a sibling element with `.peer` or `data-peer` is active
     */
    _peerActive: toPeer(state.active),
    /**
     * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
     */
    _groupDisabled: toGroup(state.disabled),
    /**
     *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
     */
    _peerDisabled: toPeer(state.disabled),
    /**
     *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
     */
    _groupInvalid: toGroup(state.invalid),
    /**
     *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
     */
    _peerInvalid: toPeer(state.invalid),
    /**
     * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
     */
    _groupChecked: toGroup(state.checked),
    /**
     * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
     */
    _peerChecked: toPeer(state.checked),
    /**
     *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
     */
    _groupFocusWithin: toGroup(state.focusWithin),
    /**
     *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
     */
    _peerFocusWithin: toPeer(state.focusWithin),
    /**
     * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
     */
    _peerPlaceholderShown: toPeer(state.placeholderShown),
    /**
     * Styles for CSS Selector `&::placeholder`.
     */
    _placeholder: "&::placeholder",
    /**
     * Styles for CSS Selector `&:placeholder-shown`.
     */
    _placeholderShown: "&:placeholder-shown",
    /**
     * Styles for CSS Selector `&:fullscreen`.
     */
    _fullScreen: "&:fullscreen",
    /**
     * Styles for CSS Selector `&::selection`
     */
    _selection: "&::selection",
    /**
     * Styles for CSS Selector `[dir=rtl] &`
     * It is applied when a parent element or this element has `dir="rtl"`
     */
    _rtl: "[dir=rtl] &, &[dir=rtl]",
    /**
     * Styles for CSS Selector `[dir=ltr] &`
     * It is applied when a parent element or this element has `dir="ltr"`
     */
    _ltr: "[dir=ltr] &, &[dir=ltr]",
    /**
     * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
     * It is used when the user has requested the system use a light or dark color theme.
     */
    _mediaDark: "@media (prefers-color-scheme: dark)",
    /**
     * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
     * It is used when the user has requested the system to reduce the amount of animations.
     */
    _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
    /**
     * Styles for when `data-theme` is applied to any parent of
     * this component or element.
     */
    _dark:
        ".chakra-ui-dark &:not([data-theme])," +
        "[data-theme=dark] &:not([data-theme])," +
        "&[data-theme=dark]",
    /**
     * Styles for when `data-theme` is applied to any parent of
     * this component or element.
     */
    _light:
        ".chakra-ui-light &:not([data-theme])," +
        "[data-theme=light] &:not([data-theme])," +
        "&[data-theme=light]",
}

export type Pseudos = typeof pseudoSelectors

export const pseudoPropNames = Object.keys(
    pseudoSelectors,
) as (keyof typeof pseudoSelectors)[]


export interface CreateThemeVarsOptions {
    cssVarPrefix?: string
}

export interface ThemeVars {
    cssVars: Record<string, any>
    cssMap: Record<string, any>
}

/**
 * Convert a token name to a css variable
 *
 * @example
 * tokenToCssVar('colors.red.500', 'chakra')
 * => {
 *   variable: '--chakra-colors-red-500',
 *   reference: 'var(--chakra-colors-red-500)'
 * }
 */
function tokenToCssVar(token: string | number, prefix?: string) {
    return cssVar(String(token).replace(/\./g, "-"), undefined, prefix)
}

// export function createThemeVars(
//     flatTokens: FlatTokens,
//     options: CreateThemeVarsOptions,
// ) {
//     let cssVars: Record<string, any> = {}
//     const cssMap: Record<string, any> = {}
//
//     for (const [token, tokenValue] of Object.entries<FlatToken>(flatTokens)) {
//         const { isSemantic, value } = tokenValue
//         const { variable, reference } = tokenToCssVar(token, options?.cssVarPrefix)
//
//         if (!isSemantic) {
//             if (token.startsWith("space")) {
//                 const keys = token.split(".")
//                 const [firstKey, ...referenceKeys] = keys
//                 /** @example space.-4 */
//                 const negativeLookupKey = `${firstKey}.-${referenceKeys.join(".")}`
//                 const negativeValue = calc.negate(value as Operand)
//                 const negatedReference = calc.negate(reference)
//                 cssMap[negativeLookupKey] = {
//                     value: negativeValue,
//                     var: variable,
//                     varRef: negatedReference,
//                 }
//             }
//
//             cssVars[variable] = value
//             cssMap[token] = {
//                 value,
//                 var: variable,
//                 varRef: reference,
//             }
//             continue
//         }
//
//         const lookupToken = (maybeToken: string) => {
//             const scale = String(token).split(".")[0]
//             const withScale = [scale, maybeToken].join(".")
//             /** @example flatTokens['space.4'] === '16px' */
//             const resolvedTokenValue = flatTokens[withScale]
//             if (!resolvedTokenValue) return maybeToken
//             const { reference } = tokenToCssVar(withScale, options?.cssVarPrefix)
//             return reference
//         }
//
//         const normalizedValue = isObject(value) ? value : { default: value }
//
//         cssVars = mergeWith(
//             cssVars,
//             Object.entries(normalizedValue).reduce(
//                 (acc, [conditionAlias, conditionValue]) => {
//                     const maybeReference = lookupToken(conditionValue)
//                     if (conditionAlias === "default") {
//                         acc[variable] = maybeReference
//                         return acc
//                     }
//
//                     /** @example { _dark: "#fff" } => { '.chakra-ui-dark': "#fff" } */
//                     const conditionSelector =
//                         (pseudoSelectors as any)?.[conditionAlias] ?? conditionAlias
//                     acc[conditionSelector] = { [variable]: maybeReference }
//
//                     return acc
//                 },
//                 {} as any,
//             ),
//         )
//
//         cssMap[token] = {
//             value: reference,
//             var: variable,
//             varRef: reference,
//         }
//     }
//
//     return {
//         cssVars,
//         cssMap,
//     }
// }





type CSSProp = keyof CSS.Properties | (string & {})
type MaybeArray<T> = T | T[]
type MaybeThemeFunction<T> = T | ((theme: CssTheme) => T)
type StringUnion<T> = T | (string & {})

export interface PropConfig {
    /**
     * This is useful for props that need to leverage CSS variables
     * Static styles to append to the computed styles.
     *
     * It does not get replicated if value is responsive or styles are nested.
     */
    static?: Record<string, any>
    /**
     * The theme scale this maps to
     */
    scale?: ThemeScale
    /**
     * Css property or Css variable the prop maps to
     */
    property?: MaybeThemeFunction<MaybeArray<StringUnion<CSSProp>>>
    /**
     * Function to transform the value passed
     */
    transform?: Transform
    /**
     * Useful for `layerStyle`, tex`tStyles and `apply` where their
     * transform function returns theme aware styles
     */
    processResult?: boolean
}

export type Config = Record<string, PropConfig | true>

export function toConfig(scale: ThemeScale, transform?: Transform) {
    return <T extends CSSProp>(property: T | T[]) => {
        const result: PropConfig = { property, scale }
        result.transform = createTransform({
            scale,
            transform,
        })
        return result
    }
}

interface Opts {
    scale?: ThemeScale
    property: { ltr: MaybeArray<CSSProp>; rtl: MaybeArray<CSSProp> }
    transform?: Transform
}

const getRtl =
    ({ rtl, ltr }: Opts["property"]) =>
        (theme: Record<string, any>) =>
            theme.direction === "rtl" ? rtl : ltr

export function logical(options: Opts): PropConfig {
    const { property, scale, transform } = options
    return {
        scale,
        property: getRtl(property),
        transform: scale
            ? createTransform({
                scale,
                compose: transform,
            })
            : transform,
    }
}



export type ResponsiveArray<T> = Array<T | null>

export type ResponsiveObject<T> = Partial<
    Record<ThemeTypings["breakpoints"] | string, T>
>

export type ResponsiveValue<T> = T | ResponsiveArray<T> | ResponsiveObject<T>

export type Length = string | 0 | number

export type Union<T> = T | (string & {})

export type Token<
    CSSType,
    ThemeKey = unknown,
> = ThemeKey extends keyof ThemeTypings
    ? ResponsiveValue<CSSType | ThemeTypings[ThemeKey]>
    : ResponsiveValue<CSSType>

export type CSSMap = Record<
    string,
    { value: string; var: string; varRef: string }
>

export type Transform = (
    value: any,
    theme: CssTheme,
    styles?: Record<string, any>,
) => any

export type WithCSSVar<T> = T & {
    __cssVars: Record<string, any>
    __cssMap: CSSMap
    __breakpoints: AnalyzeBreakpointsReturn
}

export type CssTheme = WithCSSVar<{
    breakpoints: Record<string, any>
    direction?: "ltr" | "rtl"
    [key: string]: any
}>

interface CreateTransformOptions {
    scale: ThemeScale
    compose?: Transform
    transform?: Transform
}

const isImportant = (value: string) => /!(important)?$/.test(value)

const withoutImportant = (value: string | number) =>
    typeof value === "string" ? value.replace(/!(important)?$/, "").trim() : value

export const tokenToCSSVar =
    (scale: ThemeScale, value: any) => (theme: Record<string, any>) => {
        const valueStr = String(value)

        const important = isImportant(valueStr)
        const valueWithoutImportant = withoutImportant(valueStr)

        const key = scale
            ? `${scale}.${valueWithoutImportant}`
            : valueWithoutImportant

        let transformed =
            isObject(theme.__cssMap) && key in theme.__cssMap
                ? theme.__cssMap[key].varRef
                : value

        transformed = withoutImportant(transformed)

        return important ? `${transformed} !important` : transformed
    }

export function createTransform(options: CreateTransformOptions) {
    const { scale, transform, compose } = options

    const fn: Transform = (value, theme) => {
        const _value = tokenToCSSVar(scale, value)(theme)
        let result = transform?.(_value, theme) ?? _value
        if (compose) {
            result = compose(result, theme)
        }
        return result
    }

    return fn
}

/**
 * The CSS transform order following the upcoming spec from CSSWG
 * translate => rotate => scale => skew
 * @see https://drafts.csswg.org/css-transforms-2/#ctm
 * @see https://www.stefanjudis.com/blog/order-in-css-transformation-transform-functions-vs-individual-transforms/
 */
const transformTemplate = [
    "rotate(var(--chakra-rotate, 0))",
    "scaleX(var(--chakra-scale-x, 1))",
    "scaleY(var(--chakra-scale-y, 1))",
    "skewX(var(--chakra-skew-x, 0))",
    "skewY(var(--chakra-skew-y, 0))",
]

export function getTransformTemplate() {
    return [
        "translateX(var(--chakra-translate-x, 0))",
        "translateY(var(--chakra-translate-y, 0))",
        ...transformTemplate,
    ].join(" ")
}

export function getTransformGpuTemplate() {
    return [
        "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
        ...transformTemplate,
    ].join(" ")
}

export const filterTemplate = {
    "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
    filter: [
        "var(--chakra-blur)",
        "var(--chakra-brightness)",
        "var(--chakra-contrast)",
        "var(--chakra-grayscale)",
        "var(--chakra-hue-rotate)",
        "var(--chakra-invert)",
        "var(--chakra-saturate)",
        "var(--chakra-sepia)",
        "var(--chakra-drop-shadow)",
    ].join(" "),
}

export const backdropFilterTemplate = {
    backdropFilter: [
        "var(--chakra-backdrop-blur)",
        "var(--chakra-backdrop-brightness)",
        "var(--chakra-backdrop-contrast)",
        "var(--chakra-backdrop-grayscale)",
        "var(--chakra-backdrop-hue-rotate)",
        "var(--chakra-backdrop-invert)",
        "var(--chakra-backdrop-opacity)",
        "var(--chakra-backdrop-saturate)",
        "var(--chakra-backdrop-sepia)",
    ].join(" "),
    "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
}

export function getRingTemplate(value: any) {
    return {
        "--chakra-ring-offset-shadow": `var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)`,
        "--chakra-ring-shadow": `var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)`,
        "--chakra-ring-width": value,
        boxShadow: [
            `var(--chakra-ring-offset-shadow)`,
            `var(--chakra-ring-shadow)`,
            `var(--chakra-shadow, 0 0 #0000)`,
        ].join(", "),
    }
}

export const flexDirectionTemplate = {
    "row-reverse": {
        space: "--chakra-space-x-reverse",
        divide: "--chakra-divide-x-reverse",
    },
    "column-reverse": {
        space: "--chakra-space-y-reverse",
        divide: "--chakra-divide-y-reverse",
    },
}

const owlSelector = "& > :not(style) ~ :not(style)"

export const spaceXTemplate = {
    [owlSelector]: {
        marginInlineStart:
            "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
        marginInlineEnd:
            "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))",
    },
}

export const spaceYTemplate = {
    [owlSelector]: {
        marginTop:
            "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
        marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))",
    },
}

// import { gradientTransform, globalSet, isCSSFunction } from "./parse-gradient"
// import { Transform } from "./types"


const directionMap = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
}

const valueSet = new Set(Object.values(directionMap))

export const globalSet = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
])

const trimSpace = (str: string) => str.trim()

export function parseGradient(
    value: string | null | undefined,
    theme: Record<string, any>,
) {
    if (value == null || globalSet.has(value)) return value
    const regex = /(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g
    const { type, values } = regex.exec(value)?.groups ?? {}

    if (!type || !values) return value

    const _type = type.includes("-gradient") ? type : `${type}-gradient`
    const [maybeDirection, ...stops] = values
        .split(",")
        .map(trimSpace)
        .filter(Boolean)

    if (stops?.length === 0) return value

    const direction =
        maybeDirection in directionMap
            ? (directionMap as any)[maybeDirection]
            : maybeDirection

    stops.unshift(direction)

    const _values = stops.map((stop) => {
        // if stop is valid shorthand direction, return it
        if (valueSet.has(stop)) return stop

        const firstStop = stop.indexOf(" ")

        // color stop could be `red.200 20%` based on css gradient spec
        const [_color, _stop] =
            firstStop !== -1
                ? [stop.substr(0, firstStop), stop.substr(firstStop + 1)]
                : [stop]

        const _stopOrFunc = isCSSFunction(_stop) ? _stop : _stop && _stop.split(" ")

        // else, get and transform the color token or css value
        const key = `colors.${_color}`
        const color = key in theme.__cssMap ? theme.__cssMap[key].varRef : _color
        return _stopOrFunc
            ? [
                color,
                ...(Array.isArray(_stopOrFunc) ? _stopOrFunc : [_stopOrFunc]),
            ].join(" ")
            : color
    })

    return `${_type}(${_values.join(", ")})`
}

export const isCSSFunction = (value: unknown) => {
    return typeof value === "string" && value.includes("(") && value.includes(")")
}

export const gradientTransform: Transform = (value, theme) =>
    parseGradient(value, theme ?? {})
function isCssVar(value: string): boolean {
    return /^var\(--.+\)$/.test(value)
}

// const analyzeCSSValue = (value: number | string) => {
//     const num = parseFloat(value.toString())
//     const unit = value.toString().replace(String(num), "")
//     return { unitless: !unit, value: num, unit }
// }

const wrap = (str: string) => (value: any) => `${str}(${value})`

export const transformFunctions = {
    filter(value: any) {
        return value !== "auto" ? value : filterTemplate
    },
    backdropFilter(value: any) {
        return value !== "auto" ? value : backdropFilterTemplate
    },
    ring(value: string) {
        return getRingTemplate(transformFunctions.px(value))
    },
    bgClip(value: string) {
        return value === "text"
            ? { color: "transparent", backgroundClip: "text" }
            : { backgroundClip: value }
    },
    transform(value: any) {
        if (value === "auto") return getTransformTemplate()
        if (value === "auto-gpu") return getTransformGpuTemplate()
        return value
    },
    vh(value: number | string) {
        return value === "$100vh" ? "var(--chakra-vh)" : value
    },
    px(value: number | string) {
        if (value == null) return value
        const { unitless } = analyzeCSSValue(value)
        return unitless || typeof value === "number" ? `${value}px` : value
    },
    fraction(value: any) {
        return !(typeof value === "number") || value > 1 ? value : `${value * 100}%`
    },
    float(value: any, theme: Record<string, any>) {
        const map = { left: "right", right: "left" } as any
        return theme.direction === "rtl" ? map[value] : value
    },
    degree(value: any) {
        if (isCssVar(value) || value == null) return value
        const unitless = typeof value === "string" && !value.endsWith("deg")
        return typeof value === "number" || unitless ? `${value}deg` : value
    },
    gradient: gradientTransform,
    blur: wrap("blur"),
    opacity: wrap("opacity"),
    brightness: wrap("brightness"),
    contrast: wrap("contrast"),
    dropShadow: wrap("drop-shadow"),
    grayscale: wrap("grayscale"),
    hueRotate: wrap("hue-rotate"),
    invert: wrap("invert"),
    saturate: wrap("saturate"),
    sepia: wrap("sepia"),
    bgImage(value: any) {
        if (value == null) return value
        const prevent = isCSSFunction(value) || globalSet.has(value)
        return !prevent ? `url(${value})` : value
    },
    outline(value: any) {
        const isNoneOrZero = String(value) === "0" || String(value) === "none"
        return value !== null && isNoneOrZero
            ? { outline: "2px solid transparent", outlineOffset: "2px" }
            : { outline: value }
    },
    flexDirection(value: any) {
        const { space, divide } = (flexDirectionTemplate as any)[value] ?? {}
        const result: Record<string, any> = { flexDirection: value }
        if (space) result[space] = 1
        if (divide) result[divide] = 1
        return result
    },
}


export const transforms =  transformFunctions
//
// export function toConfig(scale: ThemeScale, transform?: Transform) {
//     return <T extends CSSProp>(property: T | T[]) => {
//         const result: PropConfig = { property, scale }
//         result.transform = createTransform({
//             scale,
//             transform,
//         })
//         return result
//     }
// }
//
// interface Opts {
//     scale?: ThemeScale
//     property: { ltr: MaybeArray<CSSProp>; rtl: MaybeArray<CSSProp> }
//     transform?: Transform
// }
//
// const getRtl =
//     ({ rtl, ltr }: Opts["property"]) =>
//         (theme: Record<string, any>) =>
//             theme.direction === "rtl" ? rtl : ltr
//
// export function logical(options: Opts): PropConfig {
//     const { property, scale, transform } = options
//     return {
//         scale,
//         property: getRtl(property),
//         transform: scale
//             ? createTransform({
//                 scale,
//                 compose: transform,
//             })
//             : transform,
//     }
// }
export const pipe =
    <R>(...fns: Array<(a: R) => R>) =>
        (v: R) =>
            fns.reduce((a, b) => b(a), v)

// export { transforms }

// export * from "./types"

export const t = {
    borderWidths: toConfig("borderWidths"),
    borderStyles: toConfig("borderStyles"),
    colors: toConfig("colors"),
    borders: toConfig("borders"),
    radii: toConfig("radii", transforms.px),
    space: toConfig("space", pipe(transforms.vh, transforms.px)),
    spaceT: toConfig("space", pipe(transforms.vh, transforms.px)),
    degreeT(property: PropConfig["property"]) {
        return { property, transform: transforms.degree }
    },
    prop(
        property: PropConfig["property"],
        scale?: ThemeScale,
        transform?: PropConfig["transform"],
    ) {
        return {
            property,
            scale,
            ...(scale && {
                transform: createTransform({ scale, transform }),
            }),
        }
    },
    propT(property: PropConfig["property"], transform?: PropConfig["transform"]) {
        return { property, transform }
    },
    sizes: toConfig("sizes", pipe(transforms.vh, transforms.px)),
    sizesT: toConfig("sizes", pipe(transforms.vh, transforms.fraction)),
    shadows: toConfig("shadows"),
    logical,
    blur: toConfig("blur", transforms.blur),
}


/****************** ------------ *****************/
