from AI.ai_requests import ask_to_ai

prompt = "Baseado no contexto apresentado, gere um comentário positivo de um agente penitenciário. Tente variar na quantidade de cada atividade de ressocialização e pense em diferentes períodos de tempo. Além de que seria bom variar na modalidade de escrita. Tente pensar em períodos de tempo de até um mês"

response = ask_to_ai(prompt)
print(response)
