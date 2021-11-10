import { Component, ChangeDetectionStrategy } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-comitted-expenditure',
  templateUrl: './comitted-expenditure.component.html',
  styleUrls: ['./comitted-expenditure.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComittedExpenditureComponent {

    instructions = `
    # Empenhos

    ## Tipo: ComittedExpenditure

    O tipo ComittedExpenditure possui diferentes propriedades para representação de informações referentes aos empenhos de despesa, por meio do qual realiza-se reserva de valores monetários autorizados para atender um fim específico que cria para o município uma obrigação de pagamento pendente. A seguir estão os nomes de todas as propriedades definidas pelo tipo:

    | PROPRIEDADE | TIPO ESPERADO | DESCRIÇÃO |
    | --------- |--------- | --------- |
    | budgetaryUnitName | text | Campo texto contendo o nome da unidade orçamentária |
    | budgetaryUnitID | text | Campo texto contendo o código da unidade orçamentária |
    | identificationNumber | text | Campo texto contendo o CPF ou CNPJ do favorecido do empenho |
    | creditorName | text | Campo texto contendo o nome do favorecido do empenho |
    | comittedExpenditureHistory | text | Campo texto contendo a descrição do histórico do empenho |

    Esse é um exemplo em HTML utilizando table

    \`\`\`html
    <table itemscope itemtype="Unipt.org/ComittedExpenditure">
        <!-- Cabeçalho da tabela  -->
        <tr>
            <th itemprop="budgetaryUnitName">Nome da unidade orçamentária</th>
            <th itemprop="budgetaryUnitID">Código da unidade orçamentária</th>
            <th itemprop="identificationNumber">CPF/CNPJ do Credor</th>
            <th itemprop="creditorName">Nome do Credor</th>
            <th itemprop="comittedExpenditureHistory">Histórico de Empenho</th>
        </tr>
        <!-- Dados referentes a certa linha da tabela  -->
        <tr>
            <td itemprop="budgetaryUnitName">SECRETARIA DE FAZENDA</td>
            <td itemprop="budgetaryUnitID">2030</td>
            <td itemprop="identificationNumber">18.357.637/0001-03</td>
            <td itemprop="creditorName">PALMEIRA, MELO & GOMES ADVOGADOS ASSOCIADOS</td>
            <td itemprop="comittedExpenditureHistory">
            VALOR QUE SE EMPENHA REFERENTE A CONTRATAÇÃO DO ESCRITORIO DE ADVOCACIA
            ESPECIALIZADO PARA ACOMPANHAMENTO DE MEDIDAS ADMINISTRATIVAS E JUDICIAIS E
            RECEBIMENTO, PELO MUNICIPIO DE BAYEUX/PB, DE VALORES QUE LHE SAO DEVIDOS PELA
            AGENCIA NACIONAL DE PETRÓLEO - ANP, A TÍTULO DE ROYALTIES EM FUNÇÃO DA EXISTÊNCIA EM
            SEU TERRITÓRIO, DE ESTAÇÃO TERRESTRE DE EMBARQUE E DESEMBARQUE DE GÁS NATURAL ,
            NO MÊS DE SETEMBRO/2021.
            </td>
        </tr>
    </table>
    \`\`\`

    Esse é um exemplo em HTML utilizando div

    \`\`\`html
    <div itemscope itemtype="Unipt.org/ComittedExpenditure">
        <!-- Cabeçalho da tabela  -->
        <div>
            <div itemprop="budgetaryUnitName">Nome da unidade orçamentária</div>
            <div itemprop="budgetaryUnitID">Código da unidade orçamentária</div>
            <div itemprop="identificationNumber">CPF/CNPJ do Credor</div>
            <div itemprop="creditorName">Nome do Credor</div>
            <div itemprop="comittedExpenditureHistory">Histórico de Empenho</div>
        </div>
        <!-- Dados referentes a certa linha da tabela  -->
        <div>
            <div itemprop="budgetaryUnitName">SECRETARIA DE FAZENDA</div>
            <div itemprop="budgetaryUnitID">2030</div>
            <div itemprop="identificationNumber">18.357.637/0001-03</div>
            <div itemprop="creditorName">PALMEIRA, MELO & GOMES ADVOGADOS ASSOCIADOS</div>
            <div itemprop="comittedExpenditureHistory">
            VALOR QUE SE EMPENHA REFERENTE A CONTRATAÇÃO DO ESCRITORIO DE ADVOCACIA
            ESPECIALIZADO PARA ACOMPANHAMENTO DE MEDIDAS ADMINISTRATIVAS E JUDICIAIS E
            RECEBIMENTO, PELO MUNICIPIO DE BAYEUX/PB, DE VALORES QUE LHE SAO DEVIDOS PELA
            AGENCIA NACIONAL DE PETRÓLEO - ANP, A TÍTULO DE ROYALTIES EM FUNÇÃO DA EXISTÊNCIA EM
            SEU TERRITÓRIO, DE ESTAÇÃO TERRESTRE DE EMBARQUE E DESEMBARQUE DE GÁS NATURAL ,
            NO MÊS DE SETEMBRO/2021.
            </div>
        </div>
    </div>
    \`\`\`
    `
    
}
