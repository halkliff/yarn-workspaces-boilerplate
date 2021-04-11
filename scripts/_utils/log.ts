import chalk from 'chalk';
import dayjs from 'dayjs';

export const logDate = (date = new Date()) =>
  chalk`{grey [ ${dayjs(date).format('YYYY-MM-DD HH:mm')} ]}`;

export const error = (error: Error, message?: string) =>
  `${logDate(new Date())} ${chalk.red.bold('[ ERROR ]:')} ${chalk.redBright(
    message ?? error.message,
  )}${error.stack ? '\n' + chalk.redBright(error.stack) : ''}`;

export const info = (info: string) =>
  `${logDate(new Date())} ${chalk.gray.bold('[ INFO ]:')} ${chalk.gray(info)}`;

export const warning = (warning: string) =>
  `${logDate(new Date())} ${chalk.yellow.bold(
    '[ WARNING ]:',
  )} ${chalk.yellowBright(warning)}`;
