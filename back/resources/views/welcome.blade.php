<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="icon" href="{{asset("assets/icon/favicon.ico")}}" type="image/x-icon">

    <title>Family Safe Talk</title>

    <style>
        *{
            margin: 0;
            padding: 0;
        }
        body {
            height: 100%;
            background: linear-gradient(to bottom right, #4751dd, #f34a83);
        }
        .content{
            margin-inline: 10%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        img{
            max-width: 600px;
            width: initial;
            min-width: 300px;
        }
        #logo{
            display: flex;
            justify-content: center;
        }
        p {
            text-indent: 20px;
            text-align: justify;
            color: white;
            font-family: "Times New Roman", Times, serif;
            font-size: 25px;
        }
        #obs{
            font-weight: bold;
            display: flex;
            justify-content: center;
            text-align: justify;
            color: white;
            font-family: "Times New Roman", Times, serif;
            font-size: 25px;
            height: 100%;
            align-items: center
        }
        .bold{
            font-weight: bold;
        }

        @media (max-width: 600px) {
            body {
                background: linear-gradient(to right, #4751dd, #f34a83);
                margin-bottom: 40px;
            }
            p{
                font-size: 17px;
            }
            #obs{
                font-size: 19px;
                height: 100px;
            }
        }
    </style>
</head>
<body>
    <div class="content">
        <div id="logo">
            <img src="{{asset('assets/image/FamilySafeTalk.png')}}" alt="">
        </div>
        <div>
            <p>
                <span class="bold">FamilySafeTalk</span> é um aplicativo especialmente projetado para atender ao público infantil, destaca-se como uma solução centrada em segurança e controle parental. O cerne do projeto é proporcionar aos responsáveis uma plataforma virtual na qual seus filhos possam interagir de maneira segura, minimizando os riscos de abusos ou aliciamento, ao mesmo tempo em que implementamos medidas proativas para detectar e prevenir possíveis diálogos suspeitos.
                Diferenciando as funcionalidades entre crianças e responsáveis, o aplicativo estará acessível 24 horas por dia, 7 dias  A interna semana, permitindo um monitoramento contínuo.
            </p>
            <p>
                A interface destinada às crianças contará com recursos básicos de chat, enquanto os responsáveis serão notificados instantaneamente em situações de perigo, proporcionando a capacidade de gerenciar remotamente as configurações de segurança.
                A acessibilidade é uma prioridade, com o acesso gratuito ao aplicativo, e o custo de desenvolvimento será cuidadosamente calculado para garantir eficiência, segurança robusta e escalabilidade, refletindo no compromisso com a segurança online e o bem-estar das crianças que utilizam o app.
            </p>
        </div>
        <div id="obs">
            EM DESENVOLVIMENTO
        </div>
    </div>
</body>
</html>
