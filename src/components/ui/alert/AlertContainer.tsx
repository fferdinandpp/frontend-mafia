"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Alert, { AlertType } from "./Alert";

interface ActiveAlert {
  id: number;
  message: string | ReactNode;
  title?: string;
  type: AlertType;
}

let idCounter = 0;

export const alertService: {
  add: (type: AlertType, message: string | ReactNode, title?: string) => void;
} = {
  add: () => {},
};

const AlertContainer = () => {
  const [alerts, setAlerts] = useState<ActiveAlert[]>([]);

  useEffect(() => {
    alertService.add = (type, message, title) => {
      const id = idCounter++;
      setAlerts((prev) => [...prev, { id, message, title, type }]);

      setTimeout(() => {
        setAlerts((prev) => prev.filter((a) => a.id !== id));
      }, 5000); // hilang otomatis
    };
  }, []);

  const removeAlert = (id: number) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="fixed top-5  justify-center items-center right-0 left-0 z-[9999] flex flex-col space-y-3">
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          type={alert.type}
          message={alert.message}
          title={alert.title}
          onClose={() => removeAlert(alert.id)}
        />
      ))}
    </div>
  );
};

export default AlertContainer;
