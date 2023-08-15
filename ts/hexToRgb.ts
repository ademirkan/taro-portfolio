export default function hexToRgb(hex: string): [number, number, number] {
    // Ensure the hex value is 6 characters long and without the '#' prefix
    let sanitizedHex = hex.charAt(0) === "#" ? hex.slice(1) : hex;

    // Handle shorthand HEX values (e.g., "#03F" to "#0033FF")
    if (sanitizedHex.length === 3) {
        sanitizedHex = sanitizedHex
            .split("")
            .map((char) => char + char)
            .join("");
    }

    // Extract the red, green, and blue components of the color
    const bigint = parseInt(sanitizedHex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b];
}
