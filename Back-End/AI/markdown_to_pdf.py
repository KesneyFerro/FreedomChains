import pypandoc
import datetime

def convert_to_pdf(markdown_content):
    current_date_time = datetime.datetime.now()
    formatted_date_time = current_date_time.strftime("%Y_%m_%d %H_%M_%S")
    print("Formatted date and time:", formatted_date_time)

    output_file = "../Reports/" + f"Detainee_report_{formatted_date_time}.pdf"
    pypandoc.convert_text(markdown_content, "pdf", format="md", outputfile=output_file, extra_args=['-V', 'graphviz'], encoding='utf-8')
