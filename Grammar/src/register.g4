grammar register;

// Lexer
DOT: '.';
ASSIGN: ':';
NAME: 'name';
NUMBER: 'number';
EMAIL: 'email';
PASSWORD: 'password';
LETTER: [a-zA-ZáéíóúÁÉÍÓÚÀàÀç]+;
INT: [0-9]+;
SPACE: ' ';
AT: '@';
WS: [ \r\n\t] -> skip;

// Parser
register: NAME ASSIGN name DOT NUMBER ASSIGN number DOT EMAIL ASSIGN email DOT PASSWORD ASSIGN password DOT;

name: LETTER+ (SPACE LETTER+)*;

number: (LETTER|INT)+;

email: (LETTER|INT)+ AT (LETTER|INT|DOT)+;

password: (LETTER|INT)+;