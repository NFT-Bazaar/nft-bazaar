import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReceiveNotification } from '../scripts/firebase';

function NotificationToast({ toUser }) {
  const handleNotificationReceived = (value:any) => {
    // function1()
	// function2()
    toast.info(`You received an offer from : ${value.fromuser}`);
  };

  return (
    <div>
      {/* Other components */}
      <ReceiveNotification toUser={toUser} onNotificationReceived={handleNotificationReceived} />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default NotificationToast;
