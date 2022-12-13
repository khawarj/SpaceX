import { useState, createContext } from "react";

const intialState = {
  missions: null,
  // eslint-disable-next-line
  setMissionsData: ({}) => {},
};


type UseModalResult = ReturnType<typeof useModal>;

export const useModal = () => {
  const [missions, setMissionsData] = useState<any>(intialState.missions);
  return {
    missions,
    setMissionsData
  };
};
export const ModalContext = createContext<UseModalResult>(intialState);


export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ModalContext.Provider value={useModal()}>
      {children}
    </ModalContext.Provider>
  );
};
