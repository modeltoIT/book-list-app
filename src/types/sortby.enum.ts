import { Status } from './status.enum.ts';

export enum SortBy {
  'all' = 'all',
  active = Status.active,
  deactivated = Status.deactivated,
}