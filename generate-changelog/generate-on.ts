// import { inc, prerelease } from 'semver'

import type { WriterOptions } from 'conventional-changelog-core'
// import { writeJSONSync } from 'fs-extra'

// type AngularContext = Context & {

// }

// type OrganiseCommits = ( context: Context[] ) => ReturnType<WriterOptions['finalizeContext']>
type GenerateOn = WriterOptions['generateOn']

const counter = 1
const generateOn: GenerateOn = ( commit, commits, context ) => {
  // writeJSONSync( `commit-${counter++}.json`, commit )
  // writeJSONSync( `commits-${counter++}.json`, commits )
  // const [ { version: latestVersion } ] = context
  // const startNextGroupingAt = context.find( ( {} ) )

  // context[0].
  console.log( context )
  console.log( 'call' )
  return commit
}

export default generateOn
