export default function getAbsolutePosition(element: HTMLElement) {
    let rect = element.getBoundingClientRect();
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
        right: rect.right + scrollLeft,
        bottom: rect.bottom + scrollTop,
        width: rect.width,
        height: rect.height,
    };
}
