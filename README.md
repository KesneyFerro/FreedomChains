# Freedom Chains

🧪 Uma atualização para a fila de espera de doação de orgãos. Visualize de forma transparente, segura e anônima a sua posição na fila de espera de doação de órgãos, além dos critérios de classificação para o seu posicionamento.

⚙️ Solução desenvolvida usando NextJS, RainbowKit, Hardhat, ReactJs, Typescript, Scroll

## Índice

- 🌐 [Cenário Geral](#cenarioGeral): Uma perspectiva do cenário geral do sistema carcerário no Brasil.
- 🎯 [Nossa Ideia](#nossaIdeia): A partir da perspectiva geral, como a Freedom Chains pretender garantir um processo penal justo e humanitário. 
- 📈 [Análise de Mercado](#analiseDeMercado): Entendendo a extensão do mercado e como podemos, por meio das necessidades desse mercado gerar impacto social.
- 👁️ [Onde olhar no código](#ondeOlharNoCodigo): Um guia de inspeção focado em orientar o revisor para cada uma das *bounties*.
- 😎 [Nossa Equipe](#nossaEquipe): Conheça os nossos membros.

</br>
<a name="cenarioGeral"></a>

## Cenário Geral

No panorama global, o transplante de órgãos é uma área complexa e crucial da medicina, salvando vidas e melhorando a qualidade de vida de milhões de pessoas em todo o mundo. No entanto, o acesso a transplantes muitas vezes é limitado por uma série de fatores, incluindo a disponibilidade de órgãos, sistemas de listagem e distribuição, e a capacidade de infraestrutura médica.

No Brasil, o Sistema Nacional de Transplantes (SNT) é o órgão do Ministério da Saúde que desempenha o papel fundamental de coordenação e regulação dos transplantes de órgãos brasileiros. O SNT é responsável por garantir que os órgãos sejam alocados de forma justa e eficiente, levando em consideração [critérios médicos](https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prc0004_03_10_2017.html), éticos e legais. Este sistema visa garantir que os órgãos sejam distribuídos de acordo com a gravidade do caso e a compatibilidade entre doador e receptor.

Na atualidade, mais de [68,2 mil pacientes estão na lista de espera](https://brasil61.com/n/mais-de-66-mil-brasileiros-na-fila-a-espera-de-um-transplante-bras239634) (2023) aguardando por um órgão compatível. Visto que essa lista é dinâmica e varia de acordo com a oferta de órgãos e a gravidade das condições de saúde dos pacientes, ela apresenta um avanço gradual, de maneira que o tempo de espera vaira consideravelmente de acordo com a região e a especificidade do órgão necessário.

Um dos maiores desafios enfrentados pelos pacientes e suas famílias durante esse processo é a incerteza. Como exemplificado pelo relato dado à SALVO pela Simone, mãe da Élida, "o processo de espera por um órgão pode ser angustiante e emocionalmente desgastante". A falta de informações precisas sobre a posição na lista e o tempo de espera pode gerar ansiedade e insegurança. Além disso, a necessidade de depender da generosidade de outra família em um momento de perda torna o processo ainda mais delicado. Ainda no relato de Simone, ela evidencia que "não é divulgado a lista pra gente, mas o médico, como foi ele que solicitou a córnea, ele sabe", de modo que, denota-se uma característica alarmante do SNF: privação de acesso a informação.

Assim, a falta de transparência na divulgação das posições na lista de espera também pode ser um ponto de preocupação. Como mencionado por Simone, o desconhecimento sobre a posição na lista pode causar confusão e frustração, especialmente quando há uma percepção de que o sistema não está funcionando de maneira justa. Isso porque, em uma análise crítica, quando observa-se [casos como o de Fausto Silva (Faustão)](https://oglobo.globo.com/saude/medicina/noticia/2023/08/28/faustao-furou-a-fila-do-transplante-entenda-por-que-apresentador-recebeu-o-orgao-tao-rapido.ghtml), percebe-se que não existem mecanismos de verificação desse sistema, de forma que cabe ao paciente, em situação de angústia, apenas confiar que não haverão corrupções no sistema.
</br>
<a name="nossaIdeia"></a>

## Nossa Ideia

### O Problema

Tendo em vista o contexto geral do sistema carcerário brasileiro, percebe-se que esse enfrenta uma série de desafios que impactam diretamente a vida dos indivíduos em situação de cárcere, muitas vezes resultando em prolongamentos injustificados de suas penas. Estes desafios incluem:

1. **Preconceito**: A população carcerária enfrenta uma significativa estigmatização e discriminação por parte da sociedade em geral, o que pode influenciar negativamente as decisões judiciais e a execução das penas. O preconceito pode levar a tratamentos desiguais perante a lei, prejudicando a busca pela justiça e respeito aos direitos humanos.

2. **Corrupção**: A corrupção dentro do sistema judiciário e carcerário pode distorcer os processos legais, resultando em decisões injustas e favorecendo determinados indivíduos em detrimento de outros. A corrupção pode estar presente desde a fase inicial do processo até a execução das penas, comprometendo a eficácia e a integridade do sistema.

3. **Justiça no julgamento**: A lentidão e a falta de transparência nos processos judiciais muitas vezes resultam em prisões preventivas prolongadas e na demora para a concessão de alvarás de soltura. A morosidade do sistema judiciário pode levar à prisão de indivíduos que, posteriormente, são considerados inocentes ou que têm suas penas superiores ao necessário, violando o princípio da presunção de inocência e da proporcionalidade das penas.

4. **Facilidade no acompanhamento familiar da situação do preso**: A dificuldade de acesso e comunicação entre os presos e seus familiares torna ainda mais desafiador o processo de acompanhamento da situação dos detentos. A falta de canais eficientes de comunicação pode gerar angústia e incerteza entre os familiares, dificultando a assistência e o apoio necessários durante o período de encarceramento.

Em síntese, os desafios apresentados no sistema carcerário brasileiro evidenciam a necessidade urgente de reformas estruturais que garantam a eficácia do sistema judiciário, o respeito aos direitos humanos e a promoção da ressocialização dos detentos. A superação desses obstáculos requer não apenas medidas legislativas e políticas, mas também uma mudança de modelo que valorize a justiça, a transparência e o respeito à dignidade de todas as pessoas, independentemente de sua condição de encarceradas.

### Solução



<a name="analiseDeMercado"></a>
## Análise de Mercado

### Análise SWOT

A análise SWOT é uma ferramenta estratégica utilizada para avaliar os pontos fortes (Strengths), pontos fracos (Weaknesses), oportunidades (Opportunities) e ameaças (Threats) de uma empresa, projeto ou situação específica. Ela serve para fornecer uma visão abrangente do ambiente interno e externo de uma organização, permitindo identificar áreas de melhoria, vantagens competitivas, potenciais riscos e oportunidades de crescimento. A análise SWOT é importante porque ajuda na formulação de estratégias mais eficazes, na tomada de decisões informadas e no desenvolvimento de planos de ação que aproveitem os pontos fortes da organização e minimizem suas fraquezas, ao mesmo tempo em que buscam aproveitar as oportunidades e mitigar as ameaças do ambiente externo. Dado essa importância, segue a análise SWOT da Freedom Chains na Figura 1:

<p align="center"> Figura 1: Análise SWOT</p>
<br>

![imagem swot](/assetsDocs/AnaliseSWOT.png)
<p align="center"> Fonte: Material produzido pelos Autores (2024)</p>
<br>

Descrição da análise SWOT:

*Strengths* (Pontos Fortes):
- Transparência: Com o uso de *blockchain* a imutabilidade das respostas confere total transparência sobre os processos. Ademais, ao buscar mostrar para o público geral os métodos utilizados, mesmo que no *front-end*, é possível conferir mais um *layer* de transparência no formato de letramento geral.
- Confiabilidade: Ao oferecer uma visão clara e precisa sobre a fila de espera de órgãos é possível trazer mais confiança nesse processo e assegurar ao usuário que o processo é feito de maneira ponderada e segura.
  
*Weaknesses* (Pontos Fracos):
- Custos operacionais: Sendo uma iniciativa de fim puramente social os custos apresentam um ponto fraco visto que requer-se um investimento governamental para a manutenção da solução
- A complexidade de implementação: Por ser um projeto em larga escala o SALVO pode encontrar dificuldades de instauração geral, visto que o SNT opera em bases de larga escala.

*Opportunities* (Oportunidades):
- Atual déficit do mercado em transparência:
- Incerteza das pessoas no modelo atual: Em consoância, pautado na premissa que o modelo atual causa uma dor relacionada à incerteza do usuário acerca de sua posição na lista e do funcionamento dela, surge uma oportunidade ao SALVO de garantir maior confiabilidade com seus pontos fortes que cobrem essa lacuna

*Threats* (Ameaças):
- Dificuldade de Implementação geral: Enquanto a SALVO apresenta pontos fortes e oportunidades inegavelmente únicas no setor, com a tartativa do atual orgão público acerca de inovações em sistemas de alto impacto existe o risco de a solução não ser implementada em todas as instâncias do SNT de maneira a impactar a efetividade.

Considerando a análise SWOT apresentada para o SALVO, é evidente que a solução possui pontos fortes significativos, como transparência e confiabilidade, que podem resolver deficiências no sistema atual de fila de espera de órgãos. No entanto, há desafios a serem superados, como custos operacionais elevados e complexidade de implementação em larga escala.

A oportunidade de preencher a lacuna existente no mercado em termos de transparência e a incerteza das pessoas em relação ao modelo atual são aspectos que o SALVO pode aproveitar para se destacar. No entanto, as ameaças, como a dificuldade de implementação em todas as instâncias do Sistema Nacional de Transplantes (SNT), representam um risco para a eficácia da solução.

Conclui-se, portanto, que embora o SALVO apresente um grande potencial para melhorar o sistema de fila de espera de órgãos, é crucial abordar os pontos fracos e ameaças identificados na análise SWOT para garantir uma implementação bem-sucedida e maximizar seu impacto positivo. Isso destaca a importância da análise SWOT como uma ferramenta valiosa para orientar o desenvolvimento e a execução de estratégias eficazes em projetos e iniciativas.

### Canvas de Proposta de Valor

O Canvas de Proposta de Valor é uma ferramenta visual que descreve e analisa a proposta de valor de um produto ou serviço para um determinado público-alvo. Ele consiste em um quadro dividido em blocos que ajudam a identificar e compreender os elementos essenciais da proposta de valor, tais como os problemas que o produto ou serviço resolve, os benefícios oferecidos, os diferenciais competitivos, entre outros.

Essa ferramenta serve para ajudar empreendedores, empresas e equipes de projeto a definir, analisar e iterar sobre sua proposta de valor, garantindo que ela seja clara, relevante e atraente para os clientes.

A importância do Canvas de Proposta de Valor reside no fato de que uma proposta de valor bem definida é fundamental para o sucesso de um negócio. Ela ajuda a diferenciar o produto ou serviço no mercado, a atrair e reter clientes, a identificar oportunidades de inovação e a alinhar as estratégias de marketing e desenvolvimento de produtos. Ao utilizar o canvas, as empresas podem entender melhor as necessidades e desejos dos clientes e, assim, criar ofertas que realmente agreguem valor e se destaquem da concorrência. No caso da SALVO, a Figura 2 ilustra nossa proposta de valor:

<p align="center"> Figura 2: Canva de Proposta de Valor</p>
<br>

![imagem Canvas de Valor](/assetsDocs/CanvasdeValor.png)

<p align="center"> Fonte: Material produzido pelos Autores (2024)</p>
<br>

Descrição da proposta:

Perfil do cliente
+ Dores:
1. Insegurança da população acerca dos seus processos
2. Complexidade na comunicação e coordenação entre hospitais, centros de transplante e pacientes.
+ Ganhos:
1. Satisfação e sentimento de pertencimento por parte da população
2. Eficiência na gestão das listas de espera, reduzindo o tempo de espera dos pacientes.
3. Transparência e clareza no processo de alocação de órgãos, aumentando a confiança do público.
+ Tarefas do Cliente:
1. Manutenção constante da segurança dos dados populacionais
2. Gerenciar eficientemente as listas de espera para doação de órgãos.

Proposta de valor
+ Criadores de Ganho: 
1. Maior eficiência operacional para o Ministério da Saúde na gestão das listas de espera.
2. Aumento da satisfação dos pacientes devido a uma comunicação mais transparente e a uma alocação mais justa de órgãos.
+ Aliviadores de Dores:
1. Implementação de algoritmos e critérios de priorização objetivos e consistentes, garantindo uma alocação mais justa e eficiente dos órgãos disponíveis.
2. Capacidade de identificar rapidamente pacientes elegíveis para transplante com base em critérios específicos, maximizando as chances de sucesso dos procedimentos.
+ Produtos & Serviços: 
1. Software que possibilita a automatização
2. Plataforma online para gerenciamento centralizado de listas de espera em relação ao transplante de órgãos
3. Ferramentas de comunicação integradas para facilitar a interação entre hospitais, centros de transplante e pacientes.

<a name="ondeOlharNoCodigo"></a>
## Onde Olhar no Código

### Scroll

Contrato: 0xaF26145d3c11c81fbC950806cbe86F725D783c9b<br/>
Link do contrato no [Scroll Etherscan](https://sepolia.scrollscan.dev/address/0xaF26145d3c11c81fbC950806cbe86F725D783c9b)

Participamos das categorias:
- Non-Financial Track:
- General Track:

No nosso código implementamos Scroll em:

### BuidlGuidl

Participamos da categoria principal 

No nosso código implementamos Scaffold-ETH em:

<a name="nossaEquipe"></a>
## Nossa Equipe

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/gustavo-dacosta/">
        <img src="https://media.licdn.com/dms/image/D4D03AQEafql2JkG4iQ/profile-displayphoto-shrink_800_800/0/1696874768177?e=1717027200&v=beta&t=P4DVd2c779eDlf2AKCTZ3A_lJkFjQ_S3QcDw8SQNrtY" width="100px;" alt="Daniel Augusto profile image"/><br>
        <sub>
          <b>Gustavo Gonçalves</b>
        </sub>
      </a>
    </td>
  <td align="center"> 
      <a href="https://www.linkedin.com/in/joaolimamarinho/">
        <img src="https://media.licdn.com/dms/image/D4D03AQEpKXL2hfWX_w/profile-displayphoto-shrink_800_800/0/1694720169840?e=1720051200&v=beta&t=1hXPRJ2VDCtSkZWCIGdyN-scDbceuA6oQpLurCELA4Q" width="100px;" alt="João Lima profile image"/><br>
        <sub>
          <b>João Lima</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/kesneylucas/">
        <img src="https://media.licdn.com/dms/image/D4D03AQEw5ZsuniNLwQ/profile-displayphoto-shrink_800_800/0/1692393475145?e=1717027200&v=beta&t=UjFlZa4k_PZgxiWy27XckXoRSyBckwNrhPFJVVCj7NE" width="100px;" alt="Kesney Lucas profile image"/><br>
        <sub>
          <b>Kesney Lucas</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/thiagovolcati">
        <img src="https://media.licdn.com/dms/image/D4D03AQFHwAts5UCcaQ/profile-displayphoto-shrink_800_800/0/1707242861857?e=1720051200&v=beta&t=NQy5ublXd2usTpfIKcOqh1OTB5yKx1zHrOdrL0zVncI" width="100px;" alt="Kesney Lucas profile image"/><br>
        <sub>
          <b>Thiago Volcati</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
