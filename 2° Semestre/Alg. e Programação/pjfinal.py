menu = """
    MENU PRINCIPAL
1. Cadastrar Veículo.
2. Consultar Veículo por Placa.
3. Calcular Preço Total da Frota (Aluguel por 1 Dia).
4. Veículo mais Novo com Aluguel abaixo de um Valor.
5. Sair.
"""
frota = {
    "BRA2F19": {"modelo": "Honda Civic", "ano": 2023, "tarifa": 399.80},
    "GRE1903": {"modelo": "Ford Fiesta", "ano": 2015, "tarifa": 179.45},
    "SCI1909": {"modelo": "Volkswagen Gol", "ano": 1998, "tarifa": 98.90},
}

while True:
    try:
        try:
            opcao = int(input(f"Escolha a opção desejada (insira apenas números):{menu}"))
        except ValueError:
            raise ValueError("Insira apenas números.")

        if opcao == 1:
            modelo = input("Insira o nome do veículo para cadastro: ").strip().title()
            if modelo == "" or modelo.isdigit():
                raise ValueError("Modelo inválido, deve conter letras.")

            placa = input("Insira a placa do veículo para cadastro: ").strip().upper()
            if not placa.isalnum() or placa.isdigit():
                raise ValueError("Placa inválida! A placa deve conter letras e números.")
            if placa in frota:
                raise ValueError("Já existe um veículo cadastrado com essa placa.")

            ano = input("Insira o ano do veículo para cadastro (insira apenas números): ").strip()
            if len(ano) != 4 or not ano.isdigit():
                raise ValueError("Ano inválido! Digite somente quatro números.")

            try:
                tarifa = float(input("Insira o valor do aluguel por dia (insira apenas números): ").replace(",", "."))
            except ValueError:
                raise ValueError("Insira apenas números.")
            if tarifa <= 0:
                raise ValueError("A tarifa deve ser maior que zero.")

            frota[placa] = {"modelo": modelo, "ano": int(ano), "tarifa": tarifa}
            print(f"Veículo cadastrado com sucesso!\nModelo: {modelo}\nAno: {ano}\nPlaca: {placa}\nTarifa: R$ {tarifa:.2f}")

        elif opcao == 2:
            placa = input("Digite a placa que deseja consultar: ").strip().upper()
            if placa not in frota:
                raise ValueError("Veículo não encontrado.")
            veiculo = frota[placa]
            print(f"Placa: {placa}\nModelo: {veiculo['modelo']}\nAno: {veiculo['ano']}\nTarifa: R$ {veiculo['tarifa']:.2f}")

        elif opcao == 3:
            total = 0
            for placa, dados in frota.items():
                total += dados["tarifa"]
            print(f"Preço total da frota para 1 dia de aluguel: R$ {total:.2f}")

        elif opcao == 4:
            try:
                limite = float(input("Digite o valor máximo do aluguel (insira apenas números): ").replace(",", "."))
            except ValueError:
                raise ValueError("Insira apenas números.")
            mais_novo = None
            for placa, dados in frota.items():
                if dados["tarifa"] < limite:
                    if mais_novo is None or dados["ano"] > frota[mais_novo]["ano"]:
                        mais_novo = placa
            if mais_novo is None:
                print("Nenhum veículo com aluguel abaixo desse valor.")
            else:
                veiculo = frota[mais_novo]
                print(f"Mais novo: {veiculo['modelo']} ({veiculo['ano']}), placa {mais_novo}, R$ {veiculo['tarifa']:.2f}")

        elif opcao == 5:
            print("OK, Saindo...")
            break

        else:
            raise ValueError("Opção inválida.")

    except ValueError as erro:
        print("Erro:", erro)