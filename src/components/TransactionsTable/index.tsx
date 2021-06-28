import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions').then(response => console.log(response.data))
  }, [])


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposite">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="widthdraw">-R$ 1.200,00</td>
            <td>Casa</td>
            <td>05/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}