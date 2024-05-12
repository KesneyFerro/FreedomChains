from fastapi import FastAPI, Response
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from LLM.AI import generate_guard_comments, generate_detainee_report
from LLM.html_to_pdf import generate_pdf_from_html
from pydantic import BaseModel
import os

class MyData(BaseModel):
    id_detento: str
    historico: list

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/historico/json")
async def get_historico_json(data: MyData):
    relatorio_json = generate_guard_comments(data)
    return relatorio_json

@app.post("/historico/pdf")
async def get_historico_pdf(data: MyData):
    relatorio_json = await get_historico_json(data)
    html_detainee_report = generate_detainee_report(relatorio_json)

<<<<<<< Updated upstream
    id_detento = data.id_detento
    historico = data.historico
    
    folder_path = f"./Reports/{id_detento}/"
    pdf_file = ""

    for item in os.listdir(folder_path):
        if item.lower().endswith('.pdf'):
            pdf_file = item

    return FileResponse("./Reports/" + id_detento + "/" + pdf_file)

    # ultimo_comentario = historico[-1]
    # comportamento = ultimo_comentario["comportamento"]
    # data = str(ultimo_comentario["data"]).replace("/", "-")

    # file_name = f"DetaineeReport_{id_detento}_{comportamento}_{data}.pdf"
    # await convert_to_pdf(detainee_report, file_name)

    # os.rename("./" + file_name, "./Reports/" + file_name)

    # file_path = f"./Reports/{file_name}"
    # return FileResponse(file_path)
=======
    pdf_bytes = generate_pdf_from_html(html_detainee_report)

    return Response(content=pdf_bytes, media_type="application/pdf")
>>>>>>> Stashed changes
