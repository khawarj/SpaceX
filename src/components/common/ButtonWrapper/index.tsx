import React from "react";

interface IButton extends React.PropsWithChildren {
  isLoading: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string
}
const ButtonWrapper = ({
  isLoading,
  onClick,
  disabled = false,
  children,
  className=""
}: IButton) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      onClick={onClick}
      className={`w-52 flex justify-evenly items-center text-white right-2.5 bottom-2.5 bg-blue-700 disabled:opacity-25
       hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
        text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${className}`}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default ButtonWrapper;
