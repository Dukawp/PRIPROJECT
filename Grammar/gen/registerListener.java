// Generated from /home/ricardo/Universidade/PLC/PRI/TrabalhoPratico/PRIPROJECT/Grammar/src/register.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link registerParser}.
 */
public interface registerListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link registerParser#register}.
	 * @param ctx the parse tree
	 */
	void enterRegister(registerParser.RegisterContext ctx);
	/**
	 * Exit a parse tree produced by {@link registerParser#register}.
	 * @param ctx the parse tree
	 */
	void exitRegister(registerParser.RegisterContext ctx);
	/**
	 * Enter a parse tree produced by {@link registerParser#username}.
	 * @param ctx the parse tree
	 */
	void enterUsername(registerParser.UsernameContext ctx);
	/**
	 * Exit a parse tree produced by {@link registerParser#username}.
	 * @param ctx the parse tree
	 */
	void exitUsername(registerParser.UsernameContext ctx);
	/**
	 * Enter a parse tree produced by {@link registerParser#usernumber}.
	 * @param ctx the parse tree
	 */
	void enterUsernumber(registerParser.UsernumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link registerParser#usernumber}.
	 * @param ctx the parse tree
	 */
	void exitUsernumber(registerParser.UsernumberContext ctx);
	/**
	 * Enter a parse tree produced by {@link registerParser#useremail}.
	 * @param ctx the parse tree
	 */
	void enterUseremail(registerParser.UseremailContext ctx);
	/**
	 * Exit a parse tree produced by {@link registerParser#useremail}.
	 * @param ctx the parse tree
	 */
	void exitUseremail(registerParser.UseremailContext ctx);
	/**
	 * Enter a parse tree produced by {@link registerParser#userpassword}.
	 * @param ctx the parse tree
	 */
	void enterUserpassword(registerParser.UserpasswordContext ctx);
	/**
	 * Exit a parse tree produced by {@link registerParser#userpassword}.
	 * @param ctx the parse tree
	 */
	void exitUserpassword(registerParser.UserpasswordContext ctx);
}