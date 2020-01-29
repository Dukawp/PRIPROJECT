// Generated from /home/ricardo/Universidade/PLC/PRI/TrabalhoPratico/PRIPROJECT/Grammar/src/register.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link registerParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface registerVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link registerParser#register}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRegister(registerParser.RegisterContext ctx);
	/**
	 * Visit a parse tree produced by {@link registerParser#username}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUsername(registerParser.UsernameContext ctx);
	/**
	 * Visit a parse tree produced by {@link registerParser#usernumber}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUsernumber(registerParser.UsernumberContext ctx);
	/**
	 * Visit a parse tree produced by {@link registerParser#useremail}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUseremail(registerParser.UseremailContext ctx);
	/**
	 * Visit a parse tree produced by {@link registerParser#userpassword}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUserpassword(registerParser.UserpasswordContext ctx);
}