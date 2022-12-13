import React, { useEffect, useState } from "react";

interface IModal {
  children?: React.ReactNode;
  header?: React.ReactElement | string | null;
  open: boolean;
  onModalClose?: () => void;
}

const Modal = ({ children, header, open = false, onModalClose }: IModal) => {
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    if (modal) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modal]);

  useEffect(() => {
    setModal(open);
  }, [open]);

  if (!modal) {
    return null;
  }

  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed flex justify-center items-center bg-slate-700 bg-opacity-40 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div className="realtive w-full max-w-4xl">
        {/* Modal content */}
        <div className="bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
            {header ? (
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {header}
              </h3>
            ) : null}
            <button
              onClick={(e) => {
                e.preventDefault();
                setModal(false);
                onModalClose && onModalClose();
              }}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-6 space-y-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
