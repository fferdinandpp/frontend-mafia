import React, { ReactNode } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

export type AlertType = "success" | "error" | "warning" | "info";

interface AlertProps {
  type?: AlertType;
  message: string | ReactNode;
  title?: string;
  onClose?: () => void;
}

const alertStyles: Record<AlertType, string> = {
  success: "bg-green-100 text-green-700 border-green-500",
  error: "bg-red-100 text-red-700 border-red-500",
  warning: "bg-yellow-100 text-yellow-700 border-yellow-500",
  info: "bg-blue-100 text-blue-700 border-blue-500",
};

const alertIcons: Record<AlertType, React.ReactNode> = {
  success: <AiOutlineCheckCircle className="w-5 h-5 text-green-600" />,
  error: <AiOutlineCloseCircle className="w-5 h-5 text-red-600" />,
  warning: <AiOutlineWarning className="w-5 h-5 text-yellow-600" />,
  info: <AiOutlineInfoCircle className="w-5 h-5 text-blue-600" />,
};

const Alert: React.FC<AlertProps> = ({
  type = "info",
  message,
  title,
  onClose,
}) => {
  return (
    <div
      className={`transform transition-all duration-300 ease-in-out
    flex items-start gap-3 p-4 border rounded-xl shadow-lg w-[350px] ${alertStyles[type]}`}
    >
      <div className="mt-0.5">{alertIcons[type]}</div>
      <div className="flex-1">
        {title && <h4 className="font-bold mb-1">{title}</h4>}
        <div className="text-sm">{message}</div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-2 text-xl font-bold cursor-pointer"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
