try:
    frase = input("Digite uma frase: ").lower().strip()

    if frase == "":
        raise ValueError("A entrada não pode ser vazia.")

    limpo = ""
    for c in frase:
        if c.isalnum():
            limpo += c

    if limpo == "":
        raise ValueError("A entrada não possui dados válidos.")

    if limpo == limpo[::-1]:
        print(True)
    else:
        print(False)

except ValueError as e:
    print("Erro: Insira somente letras e espaços.")