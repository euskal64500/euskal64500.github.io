/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import wrapWithProvider from './wrap-with-provider'
import './src/css/custom-prism-solarizedlight.css'
import 'katex/dist/katex.min.css'

const wrapRootElement = wrapWithProvider

export default wrapRootElement
