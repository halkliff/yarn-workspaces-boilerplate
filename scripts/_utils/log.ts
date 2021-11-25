/* eslint-disable no-console */
import chalk from 'chalk';
import dayjs from 'dayjs';

export const logDate = (date = new Date()) =>
  chalk`{cyan [ ${dayjs(date).format('YYYY-MM-DD HH:mm')} ]}`;

export const error = (err: Error, message?: string) =>
  console.error(
    `${logDate(new Date())} ${chalk.red.bold('[ ERROR ]:')} ${chalk.redBright(
      message ?? err.message,
    )}${err.stack ? `\n${chalk.redBright(err.stack)}` : ''}`,
  );

export const info = (message: string) =>
  console.info(
    `${logDate(new Date())} ${chalk.grey.bold('[ INFO ]:')} ${message}`,
  );

export const warning = (message: string) =>
  console.warn(
    `${logDate(new Date())} ${chalk.yellow.bold(
      '[ WARNING ]:',
    )} ${chalk.yellowBright(message)}`,
  );
