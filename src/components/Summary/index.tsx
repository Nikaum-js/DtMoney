import { Container } from "./style";

import entradaImg from '../../assets/income.svg'
import saidaImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary () {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradaImg} alt="entrada" />
        </header>
        <strong>R$ 3.500,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={saidaImg} alt="saida" />
        </header>
        <strong>-R$ 1.500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$ 2.000,00</strong>
      </div>
    </Container>
  );
}