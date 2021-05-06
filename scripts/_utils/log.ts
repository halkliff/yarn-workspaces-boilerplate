import chalk from 'chalk';
import dayjs from 'dayjs';

export const logDate = (date = new Date()) =>
  chalk`{cyan [ ${dayjs(date).format('YYYY-MM-DD HH:mm')} ]}`;

export const error = (error: Error, message?: string) =>
  console.error(
    `${logDate(new Date())} ${chalk.red.bold('[ ERROR ]:')} ${chalk.redBright(
      message ?? error.message,
    )}${error.stack ? '\n' + chalk.redBright(error.stack) : ''}`,
  );

export const info = (info: string) =>
  console.info(
    `${logDate(new Date())} ${chalk.grey.bold('[ INFO ]:')} ${info}`,
  );

export const warning = (warning: string) =>
  console.warn(
    `${logDate(new Date())} ${chalk.yellow.bold(
      '[ WARNING ]:',
    )} ${chalk.yellowBright(warning)}`,
  );