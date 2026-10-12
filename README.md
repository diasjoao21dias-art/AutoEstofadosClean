# Auto Estofados Clean — site premium

Site institucional responsivo, com prioridade para celular, animações leves, menu mobile, cards de serviços, seção de resultados, perguntas frequentes e chamadas para orçamento via WhatsApp.

## Como publicar no Render (Static Site)
1. Crie um repositório no GitHub e envie os arquivos desta pasta.
2. No Render, escolha **New + → Static Site** e conecte o repositório.
3. Build Command: deixe vazio.
4. Publish Directory: `.` (ponto).
5. Clique em **Create Static Site**.

## Antes de publicar
- Confira o telefone em `script.js`, na constante `WHATSAPP_NUMBER`. Está configurado com o número comercial informado anteriormente; altere se o cliente usar outro.
- Troque as fotos ilustrativas por fotos reais da empresa para dar mais confiança e mostrar resultados verdadeiros.
- Confirme cidade/região atendida, depoimentos e serviços específicos antes de adicionar essas informações.
- O comparativo antes/depois atual é demonstrativo e não deve ser apresentado como resultado real de um serviço executado.

## Arquivos
- `index.html`: estrutura e conteúdo
- `style.css`: visual responsivo, efeitos e animações
- `script.js`: menu mobile, animações ao rolar e links do WhatsApp
