// Generated from /home/ricardo/Universidade/PLC/PRI/TrabalhoPratico/PRIPROJECT/Grammar/src/register.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class registerParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		DOT=1, COMMA=2, ASSIGN=3, NAME=4, NUMBER=5, EMAIL=6, PASSWORD=7, TEXT=8, 
		WS=9;
	public static final int
		RULE_register = 0, RULE_username = 1, RULE_usernumber = 2, RULE_useremail = 3, 
		RULE_userpassword = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"register", "username", "usernumber", "useremail", "userpassword"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'.'", "','", "':'", "'name'", "'number'", "'email'", "'password'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "DOT", "COMMA", "ASSIGN", "NAME", "NUMBER", "EMAIL", "PASSWORD", 
			"TEXT", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "register.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public registerParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class RegisterContext extends ParserRuleContext {
		public String name;
		public String number;
		public String email;
		public String password;
		public UsernameContext username;
		public UsernumberContext usernumber;
		public UseremailContext useremail;
		public UserpasswordContext userpassword;
		public TerminalNode NAME() { return getToken(registerParser.NAME, 0); }
		public List<TerminalNode> ASSIGN() { return getTokens(registerParser.ASSIGN); }
		public TerminalNode ASSIGN(int i) {
			return getToken(registerParser.ASSIGN, i);
		}
		public UsernameContext username() {
			return getRuleContext(UsernameContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(registerParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(registerParser.COMMA, i);
		}
		public TerminalNode NUMBER() { return getToken(registerParser.NUMBER, 0); }
		public UsernumberContext usernumber() {
			return getRuleContext(UsernumberContext.class,0);
		}
		public TerminalNode EMAIL() { return getToken(registerParser.EMAIL, 0); }
		public UseremailContext useremail() {
			return getRuleContext(UseremailContext.class,0);
		}
		public TerminalNode PASSWORD() { return getToken(registerParser.PASSWORD, 0); }
		public UserpasswordContext userpassword() {
			return getRuleContext(UserpasswordContext.class,0);
		}
		public RegisterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_register; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof registerListener ) ((registerListener)listener).enterRegister(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof registerListener ) ((registerListener)listener).exitRegister(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof registerVisitor ) return ((registerVisitor<? extends T>)visitor).visitRegister(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RegisterContext register() throws RecognitionException {
		RegisterContext _localctx = new RegisterContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_register);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(10);
			match(NAME);
			setState(11);
			match(ASSIGN);
			setState(12);
			((RegisterContext)_localctx).username = username();
			((RegisterContext)_localctx).name =  ((RegisterContext)_localctx).username.out;
			setState(14);
			match(COMMA);
			setState(15);
			match(NUMBER);
			setState(16);
			match(ASSIGN);
			setState(17);
			((RegisterContext)_localctx).usernumber = usernumber();
			((RegisterContext)_localctx).number =  ((RegisterContext)_localctx).usernumber.out;
			setState(19);
			match(COMMA);
			setState(20);
			match(EMAIL);
			setState(21);
			match(ASSIGN);
			setState(22);
			((RegisterContext)_localctx).useremail = useremail();
			((RegisterContext)_localctx).email =  ((RegisterContext)_localctx).useremail.out;
			setState(24);
			match(COMMA);
			setState(25);
			match(PASSWORD);
			setState(26);
			match(ASSIGN);
			setState(27);
			((RegisterContext)_localctx).userpassword = userpassword();
			((RegisterContext)_localctx).password =  ((RegisterContext)_localctx).userpassword.out;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UsernameContext extends ParserRuleContext {
		public String out;
		public Token TEXT;
		public TerminalNode TEXT() { return getToken(registerParser.TEXT, 0); }
		public UsernameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_username; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof registerListener ) ((registerListener)listener).enterUsername(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof registerListener ) ((registerListener)listener).exitUsername(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof registerVisitor ) return ((registerVisitor<? extends T>)visitor).visitUsername(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UsernameContext username() throws RecognitionException {
		UsernameContext _localctx = new UsernameContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_username);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(30);
			((UsernameContext)_localctx).TEXT = match(TEXT);
			((UsernameContext)_localctx).out =  (((UsernameContext)_localctx).TEXT!=null?((UsernameContext)_localctx).TEXT.getText():null);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UsernumberContext extends ParserRuleContext {
		public String out;
		public Token TEXT;
		public TerminalNode TEXT() { return getToken(registerParser.TEXT, 0); }
		public UsernumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_usernumber; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof registerListener ) ((registerListener)listener).enterUsernumber(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof registerListener ) ((registerListener)listener).exitUsernumber(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof registerVisitor ) return ((registerVisitor<? extends T>)visitor).visitUsernumber(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UsernumberContext usernumber() throws RecognitionException {
		UsernumberContext _localctx = new UsernumberContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_usernumber);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(33);
			((UsernumberContext)_localctx).TEXT = match(TEXT);
			((UsernumberContext)_localctx).out =  (((UsernumberContext)_localctx).TEXT!=null?((UsernumberContext)_localctx).TEXT.getText():null);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UseremailContext extends ParserRuleContext {
		public String out;
		public Token TEXT;
		public TerminalNode TEXT() { return getToken(registerParser.TEXT, 0); }
		public UseremailContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_useremail; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof registerListener ) ((registerListener)listener).enterUseremail(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof registerListener ) ((registerListener)listener).exitUseremail(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof registerVisitor ) return ((registerVisitor<? extends T>)visitor).visitUseremail(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UseremailContext useremail() throws RecognitionException {
		UseremailContext _localctx = new UseremailContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_useremail);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(36);
			((UseremailContext)_localctx).TEXT = match(TEXT);
			((UseremailContext)_localctx).out =  (((UseremailContext)_localctx).TEXT!=null?((UseremailContext)_localctx).TEXT.getText():null);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UserpasswordContext extends ParserRuleContext {
		public String out;
		public Token TEXT;
		public TerminalNode TEXT() { return getToken(registerParser.TEXT, 0); }
		public UserpasswordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_userpassword; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof registerListener ) ((registerListener)listener).enterUserpassword(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof registerListener ) ((registerListener)listener).exitUserpassword(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof registerVisitor ) return ((registerVisitor<? extends T>)visitor).visitUserpassword(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UserpasswordContext userpassword() throws RecognitionException {
		UserpasswordContext _localctx = new UserpasswordContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_userpassword);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(39);
			((UserpasswordContext)_localctx).TEXT = match(TEXT);
			((UserpasswordContext)_localctx).out =  (((UserpasswordContext)_localctx).TEXT!=null?((UserpasswordContext)_localctx).TEXT.getText():null);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\13-\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2"+
		"\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\4\3\4\3\4\3\5\3\5\3"+
		"\5\3\6\3\6\3\6\3\6\2\2\7\2\4\6\b\n\2\2\2\'\2\f\3\2\2\2\4 \3\2\2\2\6#\3"+
		"\2\2\2\b&\3\2\2\2\n)\3\2\2\2\f\r\7\6\2\2\r\16\7\5\2\2\16\17\5\4\3\2\17"+
		"\20\b\2\1\2\20\21\7\4\2\2\21\22\7\7\2\2\22\23\7\5\2\2\23\24\5\6\4\2\24"+
		"\25\b\2\1\2\25\26\7\4\2\2\26\27\7\b\2\2\27\30\7\5\2\2\30\31\5\b\5\2\31"+
		"\32\b\2\1\2\32\33\7\4\2\2\33\34\7\t\2\2\34\35\7\5\2\2\35\36\5\n\6\2\36"+
		"\37\b\2\1\2\37\3\3\2\2\2 !\7\n\2\2!\"\b\3\1\2\"\5\3\2\2\2#$\7\n\2\2$%"+
		"\b\4\1\2%\7\3\2\2\2&\'\7\n\2\2\'(\b\5\1\2(\t\3\2\2\2)*\7\n\2\2*+\b\6\1"+
		"\2+\13\3\2\2\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}