import { Component, ChangeDetectionStrategy } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-extra-budget-expenditure',
  templateUrl: './extra-budget-expenditure.component.html',
  styleUrls: ['./extra-budget-expenditure.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtraBudgetExpenditureComponent {

    instructions = `
    # Despesa Extraorçamentária

    ## Tipo: ExtraBudgetExpenditure
    
    O tipo ExtraBudgetExpenditure possui diferentes propriedades para representação de informações referentes às despesas extraorçamentárias, despesas que não precisam de autorização legislativa para serem realizadas, ou seja, que não integram o orçamento público. Também estão aqui inseridas as propriedades referentes aos empenhos dessas despesas, por meio do qual realiza-se reserva de valores monetários autorizados para atender um fim específico que cria para o município uma obrigação de pagamento pendente. A seguir estão os nomes das propriedades definidas pelo tipo:
    
    | PROPRIEDADE | TIPO ESPERADO | DESCRIÇÃO |
    | ------ | ------ | ------ |
    | paymentAmount | number:float | Campo monetário contendo o valor pago da despesa extraorçamentária |
    | managementUnitName | text | Campo texto contendo o nome da unidade gestora |
    | managementUnitID | text | Campo texto contendo o código da unidade gestora |
    | extraBudgetExpenditureFunction | text | Campo texto contendo a descrição da função/finalidade da despesa extraorçamentária |
    | extraBudgetExpenditureSubfunction | text | Campo texto contendo a descrição da subfunção da despesa extraorçamentária |
    | extraBudgetExpenditureProgram | text | Campo texto contendo o programa da despesa extraorçamentária |
    | extraBudgetExpenditureAction | text | Campo texto contendo a ação da despesa extraorçamentária |
    | economicCategory | text | Campo referente à classificação da categoria econômica da despesa extraorçamentária |
    | extraBudgetNature| text | Campo referente à classificação da natureza da despesa extraorçamentária |
    | extraBudgetExpenditureModality | text | Campo texto contendo a modalidade da despesa extraorçamentária |
    | extraBudgetExpenditureElement | text |  Campo texto contendo o elemento da despesa extraorçamentária |
    | extraBudgetExpenditureID | text |  Campo texto contendo o código adotado da despesa extraorçamentária |
    | extraBudgetExpenditureNomenclature | text |  Campo texto contendo a nomenclatura utilizada da despesa extraorçamentária |
    | moveDate | date |  Data de movimentação da despesa extraorçamentária |
    | extraBudgetExpenditureDescription | text |  Campo texto contendo a descrição da despesa extraorçamentária |
    | comittedExpenditureID | text | Campo referente ao número da nota de empenho da despesa extraorçamentária licitada |
    | comittedExpenditureDate | date | Campo texto referente a data do empenho da despesa extraorçamentária licitada (formato DD/MM/YYYY)|
    | creditorName | text | Campo texto contendo o nome do favorecido |
    | identificationNumber | text | Campo texto contendo o CPF ou CNPJ do favorecido |
    | bidID | text | Campo texto referente ao número de ordem da licitação da despesa extraorçamentária licitada |
    | bidModality | text | Campo texto contendo o nome da modalidade de licitação da despesa extraorçamentária licitada |
    | comittedValue | number:float | Campo referente ao valor empenhado da despesa extraorçamentária licitada |
    | comittedExpenditureHistory | text | Campo texto contendo a descrição do histórico do empenho |
    
    Esse é um exemplo em HTML utilizando table
    \`\`\`html
    <table itemscope itemtype="Unipt.org/ExtraBudgetExpenditure">
        <caption>Descrição</caption>
        <!-- Cabeçalho da tabela  -->
        <tr>
            <th itemprop="managementUnitName">Nome da unidade gestora</th>
            <th itemprop="managementUnitID">Código da unidade gestora</th>
            <th itemprop="creditorName">Favorecido</th>
            <th itemprop="identificationNumber">CPF/CNPJ do Favorecido</th>
            <th itemprop="comittedValue">Valor Empenhado</th>
            <th itemprop="paymentAmount">Valor Pago</th>
            <th itemprop="comittedExpenditureID">Código do Empenho</th>
            <th itemprop="comittedExpenditureDate">Data do Empenho</th>
            <th itemprop="bidID">Número da licitação</th>
            <th itemprop="bidModality">Modalidade da Licitação</th>
            <th itemprop="budgetExpenditureFunction">Função</th>
            <th itemprop="budgetExpenditureSubfunction">Subfunção</th>
            <th itemprop="budgetExpenditureProgram">Programa</th>
            <th itemprop="budgetExpenditureAction">Ação</th>
            <th itemprop="economicCategory">Categoria Econômica</th>
            <th itemprop="budgetNature">Grupo de Natureza da Despesa</th>
            <th itemprop="budgetExpenditureModality">Modalidade da Despesa</th>
            <th itemprop="budgetExpenditureElement">Elemento da Despesa</th>
            <th itemprop="comittedExpenditureHistory">Histórico do Empenho</th>
    
            <th itemprop="extraBudgetExpenditureID">Código Adotado</th>
            <th itemprop="extraBudgetExpenditureNomenclature">Nomenclatura Utilizada</th>
            <th itemprop="moveDate">Data de Movimentação</th>
            <th itemprop="extraBudgetExpenditureDescription">Descrição</th>
        </tr>
        <!-- Dados referentes a certa linha da tabela  -->
        <tr>
            <td itemprop="managementUnitName">Fundação Cultural de João Pessoa</td>
            <td itemprop="managementUnitID">XXXX</td>
            <td itemprop="creditorName">01402285000150 - DENTAL GOLD ASSISTENCIA ODONTOLOGICA LTDA</td>
            <td itemprop="identificationNumber">01.402.285/0001-50</td>
            <td itemprop="comittedValue">59.63</td>
            <td itemprop="paymentAmount">59.63</td>
            <td itemprop="comittedExpenditureID">0018030/2021</td>
            <td itemprop="comittedExpenditureDate">19/02/2021</td>
            <td itemprop="bidID">XXXX</td>
            <td itemprop="bidModality">XXXX</td>
            <td itemprop="budgetExpenditureFunction">XXXX</td>
            <td itemprop="budgetExpenditureSubfunction">XXXX</td>
            <td itemprop="budgetExpenditureProgram">XXXX</td>
            <td itemprop="budgetExpenditureAction">XXXX</td>
            <td itemprop="economicCategory">XXXX</td>
            <td itemprop="budgetNature">XXXX</td>
            <td itemprop="budgetExpenditureModality">XXXX</td>
            <td itemprop="budgetExpenditureElement">XXXX</td>
            <td itemprop="comittedExpenditureHistory">VALOR REFERENTE A PAGAMENTO DE RETENÇÕES FEITAS DURANTE O MES DE JANEIRO 2021 - PP DE DENTAL GOLD</td>
    
            <td itemprop="extraBudgetExpenditureID">218810199</td>
            <td itemprop="extraBudgetExpenditureNomenclature">XXXX</td>
            <td itemprop="moveDate">19/02/2021</td>
            <td itemprop="extraBudgetExpenditureDescription">120 - Dental Gold</td>
        </tr>
    </table>
    \`\`\`
    
    Esse é um exemplo em HTML utilizando div
    
    \`\`\`html
    <div itemscope itemtype="Unipt.org/ExtraBudgetExpenditure">
      <!-- Cabeçalho da tabela  -->
      <div>
          <div itemprop="managementUnitName">Nome da unidade gestora</div>
          <div itemprop="managementUnitID">Código da unidade gestora</div>
          <div itemprop="identificationNumber">CNPJ</div>
          <div itemprop="extraBudgetExpenditureID">Código da despesa extraorçamentária</div>
          <div itemprop="extraBudgetExpenditureDate">Data da movimentação</div>
          <div itemprop="extraBudgetExpenditureDescription">Descrição da despesa extraorçamentária</div>
          <div itemprop="extraBudgetExpenditureHistory">Histórico da despesa extraorçamentária</div>
          <div itemprop="realizedAmount">Descrição da despesa extraorçamentária</div>
      </div>
      <!-- Dados referentes a certa linha da tabela  -->
      <div>
        <div itemprop="managementUnitName">PREFEITURA MUNICIPAL DE BAYEUX</div>
        <div itemprop="managementUnitID">2030</div>
        <div itemprop="identificationNumber">08.924.581/0001-60</div>
        <div itemprop="extraBudgetExpenditureID">218810108</div>
        <div itemprop="extraBudgetExpenditureDate">21/09/2021</div>
        <div itemprop="extraBudgetExpenditureDescription">CONSIGNACAO INSS</div>
        <div itemprop="extraBudgetExpenditureHistory">VALOR REFERENTE AO INSS DOS SERVIDORES RETIDO EM FONTE, RELATIVO AO MES DE AGOSTO DE 2021. (EMPENHO: 0003702) (EMPENHO: 0003542)</div>
        <div itemprop="realizedAmount">R$ 179,23</div>
    </div>
    \`\`\`
    `

}
