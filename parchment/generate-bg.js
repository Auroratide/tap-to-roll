import * as path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * Converts the svg into a png for the sake of rendering performance.
 * Since the svg calculates a turbulence map, any change in screen size
 * or zoom causes a recalc, which slows down the page. Using a png
 * is much better and doesn't sacrifice the look.
 * 
 * This only needs to be run each time a new image is desired, not per-build.
 */
sharp(path.join(__dirname, 'parchment.svg'))
    .png()
    .toFile(path.join('src', 'parchment.png'))
    .then((info) => console.log(info))
    .catch((err) => {
        console.error(err)
        throw err
    })
