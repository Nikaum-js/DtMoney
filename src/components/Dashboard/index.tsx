import { Summary } from '../Summary/index';
import { TransactionsTable } from '../TransactionsTable';
import './style';
import { Container } from './style';

export function Dashboard () {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}