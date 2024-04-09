import { deepmerge } from 'deepmerge-ts'
import * as wdioConf from './wdio.conf.js'

wdioConf.config.capabilities[0]['goog:chromeOptions'].args.push('--window-size=1280,900')

export const config = deepmerge(wdioConf.config, {
    deprecationWarnings: true,
}, { clone: false })