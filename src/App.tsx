import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/index";
import Modal from 'react-modal'
import { NewTransactionModal } from './components/NewTransactionModal'

import { GlobalStyle } from "./styles/global";
Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal () {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal () {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen = { isNewTransactionModalOpen }
        onRequestClose = { handleCloseNewTransactionModal }
      />
      <GlobalStyle />
    </>
  );
}

