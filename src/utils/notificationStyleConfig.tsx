import { StatusMessage } from '../types/statusMessage.enum.ts';
import { NotificationStyleConfigType } from '../types/notificationStyleConfig.type.ts';
import { icons } from "./icons.tsx";

export const notificationStyleConfig: Record<StatusMessage, NotificationStyleConfigType> = {
  [StatusMessage.BOOK_ADDED]: {
    color: 'text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200',
    icon: (
      icons.successTick
    ),
  },
  [StatusMessage.BOOK_ADD_FAILED]: {
    color: 'text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200',
    icon: (
      icons.failCross
    ),
  },
  [StatusMessage.BOOK_DELETED]: {
    color: 'text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200',
    icon: (
      icons.deleteBin
    ),
  },
  [StatusMessage.BOOK_DELETE_FAILED]: {
    color: 'text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200',
    icon: (
      icons.failCross
    ),
  },
  [StatusMessage.BOOK_EDITED]: {
    color: 'text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200',
    icon: (
      icons.successTick
    ),
  },
  [StatusMessage.BOOK_EDIT_FAILED]: {
    color: 'text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200',
    icon: (
      icons.failCross
    ),
  },
};