// import { inc, prerelease } from 'semver'

import type { WriterOptions } from 'conventional-changelog-core'
import { writeJSONSync } from 'fs-extra'

// type AngularContext = Context & {

// }

// type OrganiseCommits = ( context: Context[] ) => ReturnType<WriterOptions['finalizeContext']>
type OrganiseCommits = WriterOptions['finalizeContext']

let counter = 1
const organiseCommits: OrganiseCommits = ( context ) => {
  writeJSONSync( `context-${counter++}.json`, context )
  // const [ { version: latestVersion } ] = context
  // const startNextGroupingAt = context.find( ( {} ) )

  // context[0].
  console.log( 'call' )
  return context
}

export default organiseCommits
