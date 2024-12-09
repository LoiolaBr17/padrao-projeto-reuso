## Nome do padrão
Factory Method

### contexto / problema
Em um sistema que manipula diferentes tipos de notificações (e-mail, SMS e push notifications), é possível se ter um problema se para cada classe que represente um desses tipos de notificação se utilizar diretamente o (NEW), pois resultaria em um código acoplado e que dificultaria a adição de novas formas de notificação.

### consequência
Com a utilização do Factory Method é possível adicionar novas formas de notificação criando apenas uma nova factory concreta sem alterar o código já existente.

