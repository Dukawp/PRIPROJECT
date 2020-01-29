// Generated from register.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var registerListener = require('./registerListener').registerListener;
var grammarFileName = "register.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u000b-\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0002\u0002\u0007\u0002\u0004\u0006\b\n\u0002\u0002\'\u0002",
    "\f\u0003\u0002\u0002\u0002\u0004 \u0003\u0002\u0002\u0002\u0006#\u0003",
    "\u0002\u0002\u0002\b&\u0003\u0002\u0002\u0002\n)\u0003\u0002\u0002\u0002",
    "\f\r\u0007\u0006\u0002\u0002\r\u000e\u0007\u0005\u0002\u0002\u000e\u000f",
    "\u0005\u0004\u0003\u0002\u000f\u0010\b\u0002\u0001\u0002\u0010\u0011",
    "\u0007\u0004\u0002\u0002\u0011\u0012\u0007\u0007\u0002\u0002\u0012\u0013",
    "\u0007\u0005\u0002\u0002\u0013\u0014\u0005\u0006\u0004\u0002\u0014\u0015",
    "\b\u0002\u0001\u0002\u0015\u0016\u0007\u0004\u0002\u0002\u0016\u0017",
    "\u0007\b\u0002\u0002\u0017\u0018\u0007\u0005\u0002\u0002\u0018\u0019",
    "\u0005\b\u0005\u0002\u0019\u001a\b\u0002\u0001\u0002\u001a\u001b\u0007",
    "\u0004\u0002\u0002\u001b\u001c\u0007\t\u0002\u0002\u001c\u001d\u0007",
    "\u0005\u0002\u0002\u001d\u001e\u0005\n\u0006\u0002\u001e\u001f\b\u0002",
    "\u0001\u0002\u001f\u0003\u0003\u0002\u0002\u0002 !\u0007\n\u0002\u0002",
    "!\"\b\u0003\u0001\u0002\"\u0005\u0003\u0002\u0002\u0002#$\u0007\n\u0002",
    "\u0002$%\b\u0004\u0001\u0002%\u0007\u0003\u0002\u0002\u0002&\'\u0007",
    "\n\u0002\u0002\'(\b\u0005\u0001\u0002(\t\u0003\u0002\u0002\u0002)*\u0007",
    "\n\u0002\u0002*+\b\u0006\u0001\u0002+\u000b\u0003\u0002\u0002\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'.'", "','", "':'", "'name'", "'number'", "'email'", 
                     "'password'" ];

var symbolicNames = [ null, "DOT", "COMMA", "ASSIGN", "NAME", "NUMBER", 
                      "EMAIL", "PASSWORD", "TEXT", "WS" ];

var ruleNames =  [ "register", "username", "usernumber", "useremail", "userpassword" ];

function registerParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

registerParser.prototype = Object.create(antlr4.Parser.prototype);
registerParser.prototype.constructor = registerParser;

Object.defineProperty(registerParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

registerParser.EOF = antlr4.Token.EOF;
registerParser.DOT = 1;
registerParser.COMMA = 2;
registerParser.ASSIGN = 3;
registerParser.NAME = 4;
registerParser.NUMBER = 5;
registerParser.EMAIL = 6;
registerParser.PASSWORD = 7;
registerParser.TEXT = 8;
registerParser.WS = 9;

registerParser.RULE_register = 0;
registerParser.RULE_username = 1;
registerParser.RULE_usernumber = 2;
registerParser.RULE_useremail = 3;
registerParser.RULE_userpassword = 4;

function RegisterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = registerParser.RULE_register;
    this.name = null
    this.number = null
    this.email = null
    this.password = null
    this._username = null; // UsernameContext
    this._usernumber = null; // UsernumberContext
    this._useremail = null; // UseremailContext
    this._userpassword = null; // UserpasswordContext
    return this;
}

RegisterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RegisterContext.prototype.constructor = RegisterContext;

RegisterContext.prototype.NAME = function() {
    return this.getToken(registerParser.NAME, 0);
};

RegisterContext.prototype.ASSIGN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(registerParser.ASSIGN);
    } else {
        return this.getToken(registerParser.ASSIGN, i);
    }
};


RegisterContext.prototype.username = function() {
    return this.getTypedRuleContext(UsernameContext,0);
};

RegisterContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(registerParser.COMMA);
    } else {
        return this.getToken(registerParser.COMMA, i);
    }
};


RegisterContext.prototype.NUMBER = function() {
    return this.getToken(registerParser.NUMBER, 0);
};

RegisterContext.prototype.usernumber = function() {
    return this.getTypedRuleContext(UsernumberContext,0);
};

RegisterContext.prototype.EMAIL = function() {
    return this.getToken(registerParser.EMAIL, 0);
};

RegisterContext.prototype.useremail = function() {
    return this.getTypedRuleContext(UseremailContext,0);
};

RegisterContext.prototype.PASSWORD = function() {
    return this.getToken(registerParser.PASSWORD, 0);
};

RegisterContext.prototype.userpassword = function() {
    return this.getTypedRuleContext(UserpasswordContext,0);
};

RegisterContext.prototype.enterRule = function(listener) {
    if(listener instanceof registerListener ) {
        listener.enterRegister(this);
	}
};

RegisterContext.prototype.exitRule = function(listener) {
    if(listener instanceof registerListener ) {
        listener.exitRegister(this);
	}
};




registerParser.RegisterContext = RegisterContext;

registerParser.prototype.register = function() {

    var localctx = new RegisterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, registerParser.RULE_register);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this.match(registerParser.NAME);
        this.state = 11;
        this.match(registerParser.ASSIGN);
        this.state = 12;
        localctx._username = this.username();
        localctx.name =  localctx._username.out
        this.state = 14;
        this.match(registerParser.COMMA);
        this.state = 15;
        this.match(registerParser.NUMBER);
        this.state = 16;
        this.match(registerParser.ASSIGN);
        this.state = 17;
        localctx._usernumber = this.usernumber();
        localctx.number =  localctx._usernumber.out
        this.state = 19;
        this.match(registerParser.COMMA);
        this.state = 20;
        this.match(registerParser.EMAIL);
        this.state = 21;
        this.match(registerParser.ASSIGN);
        this.state = 22;
        localctx._useremail = this.useremail();
        localctx.email =  localctx._useremail.out
        this.state = 24;
        this.match(registerParser.COMMA);
        this.state = 25;
        this.match(registerParser.PASSWORD);
        this.state = 26;
        this.match(registerParser.ASSIGN);
        this.state = 27;
        localctx._userpassword = this.userpassword();
        localctx.password =  localctx._userpassword.out
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UsernameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = registerParser.RULE_username;
    this.out = null
    this._TEXT = null; // Token
    return this;
}

UsernameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsernameContext.prototype.constructor = UsernameContext;

UsernameContext.prototype.TEXT = function() {
    return this.getToken(registerParser.TEXT, 0);
};

UsernameContext.prototype.enterRule = function(listener) {
    if(listener instanceof registerListener ) {
        listener.enterUsername(this);
	}
};

UsernameContext.prototype.exitRule = function(listener) {
    if(listener instanceof registerListener ) {
        listener.exitUsername(this);
	}
};




registerParser.UsernameContext = UsernameContext;

registerParser.prototype.username = function() {

    var localctx = new UsernameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, registerParser.RULE_username);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30;
        localctx._TEXT = this.match(registerParser.TEXT);
        localctx.out =  (localctx._TEXT===null ? null : localctx._TEXT.text)
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UsernumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = registerParser.RULE_usernumber;
    this.out = null
    this._TEXT = null; // Token
    return this;
}

UsernumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsernumberContext.prototype.constructor = UsernumberContext;

UsernumberContext.prototype.TEXT = function() {
    return this.getToken(registerParser.TEXT, 0);
};

UsernumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof registerListener ) {
        listener.enterUsernumber(this);
	}
};

UsernumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof registerListener ) {
        listener.exitUsernumber(this);
	}
};




registerParser.UsernumberContext = UsernumberContext;

registerParser.prototype.usernumber = function() {

    var localctx = new UsernumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, registerParser.RULE_usernumber);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
        localctx._TEXT = this.match(registerParser.TEXT);
        localctx.out =  (localctx._TEXT===null ? null : localctx._TEXT.text)
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UseremailContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = registerParser.RULE_useremail;
    this.out = null
    this._TEXT = null; // Token
    return this;
}

UseremailContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UseremailContext.prototype.constructor = UseremailContext;

UseremailContext.prototype.TEXT = function() {
    return this.getToken(registerParser.TEXT, 0);
};

UseremailContext.prototype.enterRule = function(listener) {
    if(listener instanceof registerListener ) {
        listener.enterUseremail(this);
	}
};

UseremailContext.prototype.exitRule = function(listener) {
    if(listener instanceof registerListener ) {
        listener.exitUseremail(this);
	}
};




registerParser.UseremailContext = UseremailContext;

registerParser.prototype.useremail = function() {

    var localctx = new UseremailContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, registerParser.RULE_useremail);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        localctx._TEXT = this.match(registerParser.TEXT);
        localctx.out =  (localctx._TEXT===null ? null : localctx._TEXT.text)
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UserpasswordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = registerParser.RULE_userpassword;
    this.out = null
    this._TEXT = null; // Token
    return this;
}

UserpasswordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UserpasswordContext.prototype.constructor = UserpasswordContext;

UserpasswordContext.prototype.TEXT = function() {
    return this.getToken(registerParser.TEXT, 0);
};

UserpasswordContext.prototype.enterRule = function(listener) {
    if(listener instanceof registerListener ) {
        listener.enterUserpassword(this);
	}
};

UserpasswordContext.prototype.exitRule = function(listener) {
    if(listener instanceof registerListener ) {
        listener.exitUserpassword(this);
	}
};




registerParser.UserpasswordContext = UserpasswordContext;

registerParser.prototype.userpassword = function() {

    var localctx = new UserpasswordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, registerParser.RULE_userpassword);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        localctx._TEXT = this.match(registerParser.TEXT);
        localctx.out =  (localctx._TEXT===null ? null : localctx._TEXT.text)
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.registerParser = registerParser;
