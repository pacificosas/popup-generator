export function css(element, styles) {
    for (var property in styles)
        element.style[property] = styles[property];
}
