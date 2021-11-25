import * as log from './_utils/log';

log.info('Starting build process');

/**
 * // This is an example script to build a package inside the `packages` folder.
 *
 * import {execa} from 'execa';
 * import { copySync, removeSync } from 'fs-extra';
 *
 * const commandOpts = { stdio: 'inherit', shell: true };
 *
 * removeSync('./dist');
 * removeSync('./packages/core/dist');
 *
 * const { stderr: buildCoreErr, exitCode: buildCoreExitCode } =
 * execa.commandSync('cd ./packages/core && yarn build', commandOpts);
 *
 * if (buildCoreErr) {
 *   console.error(buildCoreErr);
 *   process.exit(buildCoreExitCode);
 * }
 *
 * copySync('./packages/core/dist', './dist');
 */

log.error(
  new Error('No build script has been implemented yet.'),
  'Failed to build packages',
);

process.exit(2);
