<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Sobre
A aplicação se trata de um microservice de envio de emails desenvolvido em NestJS.

## Como executar
1º passo - Altere o arquivo presente no repositório chamado `.env.example` para `.env` e coloque todos os valores das variáveis de ambiente requisitada logo após o sinal de igualdade, sem aspas:

```bash
# O URL de conexão com a instância do RabbitMQ
RMQ_URL=

# O nome da fila em que o microservice ficará ouvindo as mensagens
QUEUE_NAME=

# O protocolo de transferência SMTP do serviço de email que será usado. Por exemplo, caso seja o gmail, o valor será `smtp.gmail.com`
SMTP_HOST=

# A porta do SMTP que será usado. Por exemplo, caso seja gmail, o valor será `587`
SMTP_PORT=

# O endereço de email do usuário remetente dos emails que serão enviados
MAILDEV_INCOMING_USER=

# A chave de acesso da conta de email rementente utilizada (gerada no site do serviço de email usado, na parte de segurança da conta)
MAILDEV_INCOMING_PASS=
```

2º passo - Com o terminal aberto na raiz do projeto, execute o comando `npm install` para que todas as dependências sejam baixadas. <br><br>
3º passo - No mesmo terminal, execute `npm run start:dev`para que o projeto seja executado em modos de desenvolvimento.

## Como usar
Faça o envio das mensagens para a fila do RabbitMQ (descrita no .env) usando o pattern: `{ cmd: 'send_email' }`
