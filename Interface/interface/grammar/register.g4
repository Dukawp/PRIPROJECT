grammar register;

// Parser
register returns [String name, String number, String email, String password]:
NAME ASSIGN username{$name = $username.out;} COMMA
NUMBER ASSIGN usernumber{$number = $usernumber.out;} COMMA
EMAIL ASSIGN useremail{$email = $useremail.out;} COMMA
PASSWORD ASSIGN userpassword{$password = $userpassword.out;};

username returns [String out]: TEXT {$out = $TEXT.text;};

usernumber returns [String out]: TEXT {$out = $TEXT.text;};

useremail returns [String out]: TEXT {$out = $TEXT.text;};

userpassword returns [String out]: TEXT {$out = $TEXT.text;};

// Lexer
DOT: '.';
COMMA: ',';
ASSIGN: ':';
NAME: 'name';
NUMBER: 'number';
EMAIL: 'email';
PASSWORD: 'password';
TEXT: [0-9a-zA-ZáéíóúÁÉÍÓÚÀàÀç.@ ]+;
WS: [\r\n\t] -> skip;