from markdown_pdf import MarkdownPdf

pdf = MarkdownPdf(toc_level = 2)

pdf.meta["title"] = "Relatório do detento X"
pdf.save("relatorio_detento_x_dd_mm_yyy.pdf")