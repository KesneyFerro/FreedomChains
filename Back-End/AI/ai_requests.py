from openai import OpenAI
from dotenv import dotenv_values

# Load the enviroment variables
enviroment = dotenv_values(".env")

# Function that creates requests to chat gpt, passing the prompt
def ask_to_ai(prompt):

    context = """
Você vai receber um comentário de um agente penitenciário, informando ações positivas de um detento, você deve elencar os índices de bom comportamento, e as seguintes participações em atividades de ressocialização:

Atividade 1: Leitura de livros e criação de relatórios
Remição de pena: Cada obra lida corresponderá à remição de quatro dias de pena, limitando-se, no prazo de 12 meses, a até 12 obras efetivamente lidas e avaliadas, assegurando-se a possibilidade de remir até 48 dias a cada período de 12 meses.

Atividade 2: Estudos
Remição de pena: 1 dia de pena a cada 12 horas de frequência escolar (atividade de ensino fundamental, médio, inclusive profissionalizante, ou superior, ou ainda de requalificação profissional) divididas, no mínimo, em três dias

Atividade 3: Trabalho
Remição de pena: 1 dia de sua pena a cada três dias trabalhados (mínimo de seis e máximo de oito horas trabalhadas por dia)

Preciso que você me retorne um JSON com suas respostas, separados da seguinte maneira:

{
    "comentario": "comentário passado",
    "indices": [
        "indice de bom comportamento 1",
        "indice de bom comportamento 2",
        "indice de bom comportamento 3"
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
}

Por favor, me retorne única e exclusivamente o JSON, e mais nada.
"""
    

    client = OpenAI(
        api_key = enviroment["API_KEY"],
        base_url = "https://api.openai.com/v1",
        default_headers={
            "Authorization": f"Bearer {enviroment["API_KEY"]}"
        }
    )

    chat = client.chat.completions.create(
        messages = [
            {
                "role": "system",
                "content": context,
            },
            {
                "role": "user",
                "content": prompt,
            }
        ],
        model="gpt-4-turbo"
    )

    return chat.choices[0].message.content
