from fastapi import FastAPI
from fastapi.responses import FileResponse
from LLM.AI import generate_guard_comments, generate_detainee_report
from LLM.markdown_to_pdf import convert_to_pdf
from pydantic import BaseModel
import os

class MyData(BaseModel):
    id_detento: str
    historico: list

app = FastAPI()

@app.post("/historico/json")
async def get_historico_json(data: MyData):
    # data:
    # - id_detento
    # - histórico de comentários
    relatorio_json = generate_guard_comments(data)
    return relatorio_json

@app.post("/historico/pdf")
async def get_historico_pdf(data: MyData):
    relatorio_json = await get_historico_json(data)
    detainee_report = generate_detainee_report(relatorio_json)

    id_detento = data.id_detento
    historico = data.historico

    ultimo_comentario = historico[-1]
    comportamento = ultimo_comentario["comportamento"]
    data = str(ultimo_comentario["data"]).replace("/", "-")

    file_name = f"DetaineeReport_{id_detento}_{comportamento}_{data}.pdf"
    await convert_to_pdf(detainee_report, file_name)

    os.rename("./" + file_name, "./Reports/" + file_name)

    file_path = f"./Reports/{file_name}"
    return FileResponse(file_path)
