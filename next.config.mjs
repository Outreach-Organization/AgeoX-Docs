// next.config.mjs
import path from 'path'
import withMarkdoc from '@markdoc/next.js'
import withSearch from './src/markdoc/search.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ THIS IS THE FIX

  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],

  webpack(config) {
    config.resolve.alias['@'] = path.resolve(process.cwd(), 'src')
    return config
  },
}

export default withSearch(
  withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig),
)
