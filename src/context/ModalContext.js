import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  const openScheduleModal = () => setIsScheduleModalOpen(true);
  const closeScheduleModal = () => setIsScheduleModalOpen(false);

  const value = {
    isQuoteModalOpen,
    openQuoteModal,
    closeQuoteModal,
    onQuoteModalChange: setIsQuoteModalOpen,
    isScheduleModalOpen,
    openScheduleModal,
    closeScheduleModal,
    onScheduleModalChange: setIsScheduleModalOpen,
  };

  return React.createElement(ModalContext.Provider, { value: value }, children);
};