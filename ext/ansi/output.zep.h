
extern zend_class_entry *ansi_output_ce;

ZEPHIR_INIT_CLASS(Ansi_Output);

PHP_METHOD(Ansi_Output, __construct);
PHP_METHOD(Ansi_Output, log);
PHP_METHOD(Ansi_Output, setFg);
PHP_METHOD(Ansi_Output, setBg);
PHP_METHOD(Ansi_Output, out);
zend_object_value zephir_init_properties_Ansi_Output(zend_class_entry *class_type TSRMLS_DC);

ZEND_BEGIN_ARG_INFO_EX(arginfo_ansi_output___construct, 0, 0, 0)
	ZEND_ARG_INFO(0, fg)
	ZEND_ARG_INFO(0, bg)
	ZEND_ARG_INFO(0, underline)
	ZEND_ARG_INFO(0, bold)
	ZEND_ARG_INFO(0, italic)
	ZEND_ARG_INFO(0, blink)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_ansi_output_log, 0, 0, 1)
	ZEND_ARG_INFO(0, str)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_ansi_output_setfg, 0, 0, 1)
	ZEND_ARG_INFO(0, fg)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_ansi_output_setbg, 0, 0, 1)
	ZEND_ARG_INFO(0, bg)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_ansi_output_out, 0, 0, 1)
	ZEND_ARG_INFO(0, str)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(ansi_output_method_entry) {
	PHP_ME(Ansi_Output, __construct, arginfo_ansi_output___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(Ansi_Output, log, arginfo_ansi_output_log, ZEND_ACC_PROTECTED)
	PHP_ME(Ansi_Output, setFg, arginfo_ansi_output_setfg, ZEND_ACC_PROTECTED)
	PHP_ME(Ansi_Output, setBg, arginfo_ansi_output_setbg, ZEND_ACC_PROTECTED)
	PHP_ME(Ansi_Output, out, arginfo_ansi_output_out, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
