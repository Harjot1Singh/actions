
import { createWriteStream } from 'fs'

import angularChangelog from 'conventional-changelog-angular'
import conventionalChangelog from 'conventional-changelog'
import { info, setFailed } from '@actions/core'
import simpleGit from 'simple-git'

// import finalizeContext from './organise-commits'

const CHANGELOG_PATH = 'CHANGELOG.md'

const generateChangelog = async () => {
  const config = await angularChangelog

  // config.writerOpts?.transform()
  return new Promise( ( resolve, reject ) => {
    const writeStream = createWriteStream( CHANGELOG_PATH )

    conventionalChangelog(
      { releaseCount: 0, outputUnreleased: true, config },
      undefined,
      undefined,
      undefined,
      {
        transform: ( commit, context ) => {
          const angularCommit = config.writerOpts.transform( commit, context )

          console.log( angularCommit?.version )

          return angularCommit
        },
      },
    )
      .pipe( writeStream )
      .on( 'error', reject )
      .on( 'close', resolve )
  } )
}

const run = async () => {
  info( `Generating ${CHANGELOG_PATH}` )
  await generateChangelog()

  info( `Committing ${CHANGELOG_PATH}` )
  const git = simpleGit()
  await git.add( CHANGELOG_PATH )
  await git.commit( `docs: update ${CHANGELOG_PATH}` )
}

if ( require.main === module ) {
  run().catch( ( error: Error ) => setFailed( `Action failed with error ${error.toString()}` ) )
}

export default run
