import Typography from 'typography'
import { GoogleFont } from 'react-typography'
import CodePlugin from 'typography-plugin-code'

const options = {
  googleFonts: [
    {
      name: 'Open Sans',
      styles: [
        '400'
      ]
    }
  ],
  headerFontFamily: ['Open Sans', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  baseFontSize: '18px',
  baseLineHeight: 1.65,
  scale: 2.25,
  plugins: [
    new CodePlugin(),
  ],
}


const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
