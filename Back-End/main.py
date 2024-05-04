from AI.ai_requests import ask_to_ai


prompt = "Baseado no contexto apresentado, gere 6 comentários de um agente penitenciário, sendo 3 comentários positivos e 3 comentários negativos. O comentário pode ser positivo ou negativo, nunca os dois ao mesmo tempo. Tente variar na quantidade de cada atividade de ressocialização e pense em diferentes períodos de tempo. Além de que seria bom variar na modalidade de escrita. Tente pensar em períodos de tempo de até um mês"


# Generate the prison guard comments about the detainee
comments = ask_to_ai(prompt, context_type = "comentario")

print("\n\n" + ("=-=" * 30) + "\n\n")

# Generate the detainee report based on the prison guard comments
relatorio = ask_to_ai(context_type = "relatorio", prompt = str(comments))
