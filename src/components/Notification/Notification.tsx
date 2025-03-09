import { useEffect, useState } from 'react';
import { useBooksContext } from '../../hooks/useBookContext.ts';
import { notificationStyleConfig } from '../../utils/notificationStyleConfig.tsx';
import { NotificationStyleConfigType } from '../../types/notificationStyleConfig.type.ts';
import { StatusMessage } from '../../types/statusMessage.enum.ts';

export const Notification = () => {
  const { statusMessage, setStatusMessage } = useBooksContext();
  const [showNotification, setShowNotification] = useState(false);
  const styleConfig: NotificationStyleConfigType | null = statusMessage ? notificationStyleConfig[statusMessage as StatusMessage] : null;

  useEffect(() => {
    if (statusMessage) {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      setTimeout(() => setStatusMessage(null), 3500);

      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  return (styleConfig && (
      <div
        className={ `pointer-events-none fixed right-4 bottom-[10vh] flex items-center w-[228px] max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-md dark:text-gray-400 dark:bg-gray-800 transition-all duration-500 ease-in-out transform 
        ${ showNotification ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-4' }` }
        role="alert"
      >
        <div
          className={ `inline-flex items-center justify-center shrink-0 w-8 h-8 ${ styleConfig.color }` }>
          {styleConfig.icon}
        </div>
        <div className="ms-3 text-sm font-normal">{ statusMessage }</div>
      </div>
    )
  );
};