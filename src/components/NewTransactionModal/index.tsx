import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './style';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'

import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction(
      {
        title,
        amount,
        category,
        type,
      })

      setCategory('')
      setAmount(0)
      setTitle('')
      setType('deposite')
      onRequestClose()
  }

  return (
    
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
          <button 
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
          >
          <img src={closeImg} alt="close" />
          </button>

          <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>

            <input
              placeholder="Título"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />

            <input
              type="number"
              placeholder="Valor"
              value={amount}
              onChange={event => setAmount(Number(event.target.value))}
            />

            <TransactionTypeContainer>
                <RadioBox
                type="button"
                isActive={type === 'deposite'}
                // className={ type === 'deposit' ? 'active' : ''}
                onClick={() => { setType('deposite'); }}
                activeColor="green"
                >
                <img src={incomeImg} alt="entrada" />
                <span>Entrada</span>
                </RadioBox>
                <RadioBox
                type="button"
                isActive={type === 'withdraw'}
                onClick={() => { setType('withdraw'); }}
                activeColor="red"
                >
                <img src={outcomeImg} alt="saída" />
                <span>Saída</span>
                </RadioBox>
            </TransactionTypeContainer>

            <input
              placeholder="Categoria"
              value={category}
              onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">
              Cadastrar
            </button>
          </Container>
        </Modal>
  );
}