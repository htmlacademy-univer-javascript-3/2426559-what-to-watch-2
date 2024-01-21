import { SECOND_COUNT } from 'src/constants';

export function getRunTime(minutes: number) {
  const hours = Math.floor(minutes / SECOND_COUNT);
  if (!hours) {
    return `${ minutes } m`;
  }
  return `${ hours }h ${ minutes % SECOND_COUNT } m`;
}
