# Calculus
Calculadora para projeto - BESN2023.1
----------------------------------------------------- As diretrizes eram: -----------------------------------------------------------

Você deve criar um projeto web com base no exercício ‘Calculadora’ discutido em sala e  disponibilizado no GitHub da disciplina. Você deverá observar rigorosamente o conteúdo destas  instruções.  
I. ASPECTOS GERAIS  
1. PROJETO. O projeto deve conter apenas um arquivo HTML, um arquivo CSS e um  arquivo JS. Você não poderá utilizar bibliotecas adicionais, apenas os elementos básicos  de HTML, CSS e JavaScript apresentados em sala. Lembre-se: trata-se de uma avaliação,  e o seu trabalho será avaliado com base no programa de nossa disciplina!  
2. CÓDIGO. Você está livre para desenvolver seu próprio algoritmo ou para reutilizar o  código desenvolvido em sala, desde que atenda ao item 1.  
3. REQUISITOS. Seu projeto deverá ter as funcionalidades do projeto Calculadora discutido  em sala. Porém, você deve implementar funcionalidades adicionais, que estão descritas  mais adiante.  
4. PONTUAÇÃO. A pontuação máxima dependerá de duas análises: (1) diversos casos de  testes aplicados igualmente a todos os trabalhos apresentados pela turma; (2) análise  do código. O valor da pontuação deste trabalho dependerá de quantos trabalhos no  total forem realizados até a conclusão da Unidade, observando que 4 pontos são  destinados às atividades e 6 pontos, à avaliação principal.  
5. FORMAÇÃO DAS EQUIPES. Você está livre para definir sua equipe até a data do envio  do trabalho. Serão equipes de 3 ou 4 componentes.  
6. ENTREGA DO TRABALHO E DISPONIBILIZAÇÃO DO CÓDIGO. Apenas um componente  da equipe fará a entrega na atividade do Classroom (ou seja, marcar a atividade como  concluída). Ele deverá informar, nesse momento, a composição da equipe, com nomes  completos, números de matrícula, e contas no GitHub obrigatoriamente (ver item 7). O  aluno responsável pela entrega deverá informar o link do repositório no GitHub contendo o trabalho. Para receber a pontuação pelo trabalho, é necessário que o  repositório esteja acessível. Atenção especial ao item 7.  
7. DISTRIBUIÇÃO DE PONTOS ENTRE MEMBROS DA EQUIPE. É obrigatório que todos os  componentes do grupo trabalhem no projeto, sem exceção. Todos os membros do  grupo deverão constar em commits com códigos relevantes. (Por exemplo, colocar  apenas uma linha de comentário não conta, certo?) O membro da equipe que não tiver  contribuição não receberá os pontos. Desta maneira, é importante que o histórico dos  commits alcance todo o desenvolvimento do projeto, desde o início.  
8. DATA DA ENTREGA. A princípio, a data da entrega será o dia da aula regular inserido no  período oficial de provas de acordo com o calendário acadêmico. Entretanto, alguma  flexibilização poderá ocorrer, mas não obrigatoriamente. 
II. FUNCIONALIDADES  
As seguintes funcionalidades da calculadora podem ou não constar no modelo desenvolvido em  classe.  
1. VISOR. Uma área onde são visíveis: números envolvidos no cálculo (10 caracteres,  contendo algarismos e/ou ponto decimal); indicador de que a função memória contém  valor armazenado; indicador de qual operação aritmética está em curso (adição,  multiplicação, etc); mensagem de erro.  
2. TECLAS NUMÉRICAS E PONTO DECIMAL. Algarismos de 0 a 9 e ponto (.).  3. TECLAS DE OPERAÇÕES: SOMA, MULTIPLICAÇÃO, DIVISÃO, SUBTRAÇÃO, RAIZ  QUADRADA, INVERSO (1/x), PORCENTAGEM, TROCA DE SINAL (+/-), QUADRADO.  4. TECLA ON/OFF. Ao se desligar a calculadora, toda informação armazenada deverá ser  removida.  
5. TECLAS M+ / M-. M+ adiciona o conteúdo no visor para a memória; M- é semelhante,  porém subtrai o conteúdo do visor na memória.  
6. TECLA RM. Põe no visor instantaneamente o conteúdo armazenado na memória.  7. TECLA CLM. Elimina o conteúdo na memória.  
8. TECLA C. Limpa dados, e informações acerca das operações em curso, porém preserva  o conteúdo na memória.  
9. ERROS. Cálculos impossíveis, como divisão por zero, por exemplo, levam a calculadora  a um estado de erro (com mensagem no visor). Enquanto estiver nesse estado, a  calculadora não responderá a nenhuma operação, exceto as teclas ON/OFF ou C.  
As seguintes funcionalidades não são essenciais. Porém, se implementadas, ganham pontuação  adicional.  
1. PRECISÃO. No modelo desenvolvido em sala, por exemplo, a sequência de teclas 4/3*3  resulta 3.99999999 em vez de 4, devido a truncamento de algarismos. Resolva esta  dificuldade fazendo com que a calculadora trabalhe internamente de forma diferente  da que é apresentada no visor de 10 caracteres. Você saberia como fazer isso?  
2. OPERAÇÃO EM CURSO. Um dos requisitos propostos é que a operação selecionada pelo  usuário (por exemplo, a multiplicação) fique indicada no visor. No entanto, você seria  capaz de mudar o aspecto da tecla da operação (por exemplo, a cor) temporariamente,  até que o cálculo seja efetuado?  
III. ALGUNS CASOS DE USO  
As seguintes sequências de teclas ilustram o comportamento esperado da calculadora, caso  você trabalhe com 10 dígitos (pode ficar diferente se você modificar isso ou se adotar estratégias  de aproximação). Fique atento ao seguinte: o que se mostra abaixo são sequências de teclas,  não expressões aritméticas.  
Observe que:  
[raiz] é usado para representar a tecla de raiz quadrada. Esta tecla substitui o conteúdo do visor  pela sua raiz quadrada, mas não tem nenhum outro impacto nas demais operações.  
[1/x] representa a tecla que calcula o inverso do número apresentado no visor. 
[+/-] representa a tecla que alterna o sinal do número no visor.  
[M+] e [M-] são as teclas M+ e M- descritas anteriormente.  
[RM] é a tecla que põe no visor o conteúdo da memória.  
