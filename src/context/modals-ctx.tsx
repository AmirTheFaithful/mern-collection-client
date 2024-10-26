import {
  Context,
  FC,
  ReactElement,
  ReactNode,
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

// Every modal window type
type ModalStateType = [boolean, Dispatch<SetStateAction<boolean>>];

interface ModalStates {
  commentsModal: ModalStateType;
  // To be builded later
}

export let ModalsContext: Context<ModalStates>;

export const ModalsContextProvider: FC<{ children: ReactNode }> = ({
  children,
}): ReactElement => {
  const modalStates: ModalStates = {
    commentsModal: useState<boolean>(false),
  };
  const TemporaryModalsContext: Context<ModalStates> =
    createContext<ModalStates>(modalStates);

  ModalsContext = TemporaryModalsContext;

  return (
    <ModalsContext.Provider value={modalStates}>
      {children}
    </ModalsContext.Provider>
  );
};
