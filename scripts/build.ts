import * as log from './_utils/log';

console.log(log.info('Starting build process'));

/**
 * // This is an example script to build a package inside the `packages` folder.
 *
 * import execa from 'execa';
 * import { copySync, removeSync } from 'fs-extra';
 *
 * const stdio = 'inherit';
 *
 * removeSync('./dist');
 * removeSync('./packages/core/dist');
 *
 * const { stderr: buildCoreErr, exitCode: buildCoreExitCode } =
 * execa.commandSync(
 *   'cd ./packages/core && yarn build',
 *   {
 *     stdio,
 *   },
 * );
 *
 * if (buildCoreErr) {
 *   console.error(buildCoreErr);
 *   process.exit(buildCoreExitCode);
 * }
 *
 * copySync('./packages/core/dist', './dist');
 */

console.error(
  log.error(
    new Error('No build script has been implemented yet.'),
    'Failed to build packages',
  ),
);

process.exit(2);
