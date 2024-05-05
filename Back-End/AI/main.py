from ai_requests import ask_to_ai
from markdown_to_pdf import convert_to_pdf

# Generate the prison guard comments about the detainee
def generate_guard_comments():
  prompt = """Baseado no contexto apresentado, gere 6 JSON's no seguinte modelo, sendo 3 deles sendo negativos e 3 deles sendo positivos, retorne o JSON no seguinte modelo:
  {
    "comentario": "comentário passado",
    "data_comentario": "data do comentario no modelo dd/mm/yyyy",
    "indices_bom_comportamento": [
        "indice de bom comportamento 1",
        "indice de bom comportamento 2",
        "indice de bom comportamento 3"
    ],
    "indices_mau_comportamento": [
        "indice de mau comportamento 1",
        "indice de mau comportamento 2",
        "indice de mau comportamento 3"
    ],
    "atividades_ressocializacao": {
        "leitura": {
            "livros_lidos": "Total de livros lidos",
            "trecho": "Trecho do comentário que comprove que o detento leu tal quantidade de livros"
        },
        "estudo": {
            "horas_estudo": "Total de horas de frequência escolar",
            "trecho": "Trecho do comentário que comprove que o detento frequentou certa quantidade de horas de frequência escolar"
        },
        "trabalho": {
            "dias_trabalhados": "Total de dias em que o detento trabalhou",
            "trecho": "Trecho do comentário que comprove que o detento trabalhou certa quantidade de dias"
        }
    }
}"""

  comments = ask_to_ai(prompt, context_type = "comentario")
  print(comments)
  return comments


def generate_detainee_report(comments):
  # Generate the detainee report based on the prison guard comments
  report = ask_to_ai(context_type = "relatorio", prompt = str(comments))
  return report


guard_comments = generate_guard_comments()
report = generate_detainee_report(guard_comments)

relatorio1 = """### 1 - Lista de comportamentos ruins, com a data do comentário referente

| Comportamento Ruim                                      | Data do Comentário |
|----------------------------------------------------------|--------------------|
| Envolvimento em uma briga com outro detento              | 18/10/2023         |
| Não participou de atividades de ressocialização          | 18/10/2023         |
| Descumpriu as normas do presídio                         | 18/10/2023         |
| Comportamento agressivo                                  | 22/10/2023         |
| Falta de colaboração com os guardas                      | 22/10/2023         |
| Recusou-se a trabalhar na jardinagem                     | 22/10/2023         |
| Negligenciou responsabilidades educacionais              | 28/10/2023         |
| Tentativa de contrabando de itens não autorizados        | 28/10/2023         |
| Desrespeito às regras do presídio                        | 28/10/2023         |

### 2 - Lista de recorrências de comportamentos ruins

| Comportamento Ruim                      | Frequência |
|-----------------------------------------|------------|
| Descumpriu as normas do presídio        | 2          |
| Desrespeito às regras do presídio       | 2          |

### 3 - Lista de comportamentos bons, com a data do comentário referente

| Comportamento Bom                                     | Data do Comentário |
|-------------------------------------------------------|--------------------|
| Leu 5 livros em um mês                                | 15/10/2023         |
| Escreveu relatórios detalhados para cada livro        | 15/10/2023         |
| Trabalhou todos os dias úteis do mês na oficina       | 15/10/2023         |
| Leu 4 novos livros                                    | 20/10/2023         |
| Completou 36 horas de estudo em carpintaria           | 20/10/2023         |
| Manteve envolvimento constante nas atividades         | 20/10/2023         |
| Participou ativamente das aulas do ensino médio       | 25/10/2023         |
| Trabalhou diligentemente na lavanderia                | 25/10/2023         |
| Demonstrou respeito e cooperação contínuos            | 25/10/2023         |

### 4 - Lista de recorrências de comportamentos bons

| Comportamento Bom                        | Frequência |
|------------------------------------------|------------|
| Trabalho constante e diligente           | 2          |
| Participação ativa nas atividades        | 2          |

### 5 - Ações de ressocialização

- **Leitura:**
  - Total de livros lidos: 9

- **Estudo:**
  - Total de horas de estudo: 96 horas (36 horas em carpintaria, 60 horas ensino médio)

- **Trabalho:**
  - Total de dias trabalhados: 44 (22 dias na oficina de lavanderia, 22 dias em outro trabalho)"""

relatorio2 = """#### 1 - Lista de comportamentos ruins, com a data do comentário referente

| Data       | Comportamento Ruim                                   |
|------------|-------------------------------------------------------|
| 15/09/2023 | Envolveu-se em brigas                                 |
| 15/09/2023 | Desrespeito aos funcionários                          |
| 15/09/2023 | Isolamento e falta de participação nas atividades     |
| 25/09/2023 | Comportamento agressivo                               |
| 25/09/2023 | Confrontos físicos e verbais                          |
| 25/09/2023 | Desinteresse nas atividades de ressocialização        |
| 20/09/2023 | Isolamento e recusa em participar das atividades      |
| 20/09/2023 | Comportamento não cooperativo                         |
| 20/09/2023 | Recusa em seguir orientações                          |

#### 2 - Lista de recorrências de comportamentos ruins

| Comportamento Ruim                            | Quantidade |
|-----------------------------------------------|------------|
| Isolamento e falta de participação nas atividades     | 3          |
| Comportamento agressivo                      | 2          |
| Recusa em seguir orientações                 | 2          |
| Desinteresse nas atividades de ressocialização | 2 |

#### 3 - Lista de comportamentos bons, com a data do comentário referente

| Data       | Comportamento Bom                                    |
|------------|------------------------------------------------------|
| 23/09/2023 | Leitura e relatório de 3 livros                      |
| 23/09/2023 | Frequência escolar de 18 horas em curso profissionalizante  |
| 23/09/2023 | Participação ativa no trabalho por 10 dias           |
| 30/09/2023 | Leitura de 5 livros                                  |
| 30/09/2023 | Participação em 36 horas de aulas                    |
| 30/09/2023 | Trabalho diligente por 20 dias                       |
| 01/10/2023 | Dedicação nos estudos do curso superior              |
| 01/10/2023 | Trabalho consistente na biblioteca                   |
| 01/10/2023 | Conclusão da leitura de 4 livros                     |

#### 4 - Lista de recorrências de comportamentos bons

| Comportamento Bom                             | Quantidade |
|-----------------------------------------------|------------|
| Leitura e conclusão de livros                 | 3          |
| Participação ativa no trabalho                | 3          |
| Dedicação e frequência em aulas               | 3          |

#### 5 - Ações de ressocialização

- **Leitura**: Total de 12 livros lidos em diferentes ocasiões
- **Estudo**: Total de 94 horas de estudo acumuladas em cursos de carpintaria, ensino médio e curso superior
- **Trabalho**: Total de 45 dias trabalhados em diferentes áreas, como manutenção da prisão e biblioteca"""

ultimo_relatorio = """### Relatório de Comportamentos e Ações de Ressocialização de Detentos

#### 1 - Lista de Comportamentos Ruins, com a Data do Comentário Referente

| Comportamento Ruim                                             | Data do Comentário |
|---------------------------------------------------------------|-------------------|
| Recusa em participar das atividades de leitura e estudo       | 10/03/2023        |
| Comportamento agressivo para com outros detentos e funcionários| 10/03/2023        |
| Recusa em trabalhar na oficina                                | 10/03/2023        |
| Não participação em atividades de ressocialização             | 22/03/2023        |
| Desentendimentos frequentes com outros presos                 | 22/03/2023        |
| Envolvimento em uma briga                                     | 22/03/2023        |
| Desobediência às ordens de agentes penitenciários             | 18/03/2023        |
| Ausência de interesse em atividades educativas ou de trabalho | 18/03/2023        |

#### 2 - Lista de Recorrências de Comportamentos Ruins

| Comportamento Ruim                                         | Recorrência |
|------------------------------------------------------------|-------------|
| Recusa em participar das atividades de leitura e estudo    | 2           |
| Recusa em trabalhar na oficina                             | 2           |
| Desobediência às ordens de agentes penitenciários          | 2           |
| Ausência de interesse em atividades educativas ou de trabalho | 2       |

#### 3 - Lista de Comportamentos Bons, com a Data do Comentário Referente

| Comportamento Bom                                      | Data do Comentário |
|-------------------------------------------------------|-------------------|
| Leitura de 5 livros e participação em discussões      | 20/03/2023        |
| Completo 60 horas de cursos, desempenho acima da média| 20/03/2023        |
| Trabalho diligente na oficina da prisão               | 20/03/2023        |
| Leitura de 3 livros, comprometido com o aprendizado   | 15/03/2023        |
| Cumprimento de 30 horas de estudos                    | 15/03/2023        |
| Ajuda na manutenção das áreas comuns                  | 15/03/2023        |
| Leitura de 2 livros                                   | 28/03/2023        |
| Assiduidade em aulas de educação profissionalizante   | 28/03/2023        |
| Trabalho na biblioteca da instituição                 | 28/03/2023        |

#### 4 - Lista de Recorrências de Comportamentos Bons

| Comportamento Bom                                   | Recorrência |
|-----------------------------------------------------|-------------|
| Leitura e participação em discussões                | 2           |
| Cumprimento de horas de estudo                      | 2           |
| Trabalho diligente e ajuda nas áreas da instituição | 2           |

#### 5 - Ações de Ressocialização

- **Leituras Completadas:** 10 livros
- **Horas de Estudo:** 114 horas
- **Dias Trabalhados:** 71 dias

Este relatório mostra uma visão detalhada das atitudes dos detentos ao longo do tempo, indicando tanto os aspectos positivos quanto os negativos de suas condutas durante o mês em análise. É crucial destacar tanto os bons comportamentos que promovem a ressocialização quanto os maus comportamentos que requerem atenção e ação corretiva."""

# Generate final report
def generate_final_report(relatorio_cadastrado, ultimo_relatorio):
  prompt = "Você receberá dois relatórios, o último relatório disponível no sistema e um relatório que acabou de ser cadastrado, quero que você pegue esses dois relatórios e mescle seus dados, junte as tabelas, caso os dados sejam iguais ou semelhantes junte em um e some as frequências. Preciso que você me retorne um relatório nos mesmos moldes, mas fique ciente que este é um relatório que resume todos os dados do detento."

  final_report = ask_to_ai(context_type="relatorio", prompt=str('ÚLTIMO RELATÓRIO CADASTRADO: \n' + relatorio_cadastrado + '\n\n\n RELATÓRIO CADASTRADO:' + ultimo_relatorio))

  return final_report

final_report = generate_final_report(relatorio1, ultimo_relatorio)

# Take the report in markdown and convert to an PDF file
# The created PDF's are saved in the Reports folder
convert_to_pdf(final_report)
