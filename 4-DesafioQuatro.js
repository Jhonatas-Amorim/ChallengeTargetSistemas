/*
4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

R --> Não consegui chegar a um resultado satisfatorio SOZINHO, a principio segui a lógica abaixo.

Ligaria 2 dos 3 três interruptores, e iria em qualquer sala, caso a luz estivesse apagada eu já saberia que aquela sala pertence ao interruptor que esta desligado, voltaria a sala dos interruptores e desligaria qualquer um dos dois interruptores que estavam ligados e iria pra qualquer uma das outras duas salas para confirmar se a luz esta desligada ou não para definir se pertence ao interruptor que esta ligado ou desligado.

Entretanto, caso a luz estivesse acessa na primeira verificação eu não conseguiria confirmar a qual sala pertencia os interruptores com apenas mais uma chance.

Após isso busquei ajuda na lógica para o CHATGPT e obtive o seguinte resultado:
    Primeira ida:
    Ligue o primeiro interruptor e espere alguns minutos.
    Desligue o primeiro interruptor e ligue o segundo interruptor.
    Deixe o segundo interruptor ligado.
    Não mexa no terceiro interruptor.
    Agora, você deve estar na sala das lâmpadas com os seguintes cenários:
    Se a lâmpada estiver acesa, o segundo interruptor controla essa lâmpada.
    Se a lâmpada estiver apagada e estiver fria, o primeiro interruptor controla essa lâmpada.
    Se a lâmpada estiver apagada e estiver quente, o terceiro interruptor controla essa lâmpada.
    Segunda ida:
    Retorne para a sala com os interruptores.
    Agora, você já sabe qual interruptor controla duas lâmpadas e pode inferir quais lâmpadas estão conectadas a cada interruptor:
    Se a lâmpada estava acesa, então o segundo interruptor a controla.
    Se a lâmpada estava apagada e fria, então o primeiro interruptor a controla.
    Se a lâmpada estava apagada e quente, então o terceiro interruptor a controla.
*/