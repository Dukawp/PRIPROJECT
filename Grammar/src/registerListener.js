// Generated from register.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by registerParser.
function registerListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

registerListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
registerListener.prototype.constructor = registerListener;

// Enter a parse tree produced by registerParser#register.
registerListener.prototype.enterRegister = function(ctx) {
};

// Exit a parse tree produced by registerParser#register.
registerListener.prototype.exitRegister = function(ctx) {
};


// Enter a parse tree produced by registerParser#username.
registerListener.prototype.enterUsername = function(ctx) {
};

// Exit a parse tree produced by registerParser#username.
registerListener.prototype.exitUsername = function(ctx) {
};


// Enter a parse tree produced by registerParser#usernumber.
registerListener.prototype.enterUsernumber = function(ctx) {
};

// Exit a parse tree produced by registerParser#usernumber.
registerListener.prototype.exitUsernumber = function(ctx) {
};


// Enter a parse tree produced by registerParser#useremail.
registerListener.prototype.enterUseremail = function(ctx) {
};

// Exit a parse tree produced by registerParser#useremail.
registerListener.prototype.exitUseremail = function(ctx) {
};


// Enter a parse tree produced by registerParser#userpassword.
registerListener.prototype.enterUserpassword = function(ctx) {
};

// Exit a parse tree produced by registerParser#userpassword.
registerListener.prototype.exitUserpassword = function(ctx) {
};



exports.registerListener = registerListener;