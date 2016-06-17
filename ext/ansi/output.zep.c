
#ifdef HAVE_CONFIG_H
#include "../ext_config.h"
#endif

#include <php.h>
#include "../php_ext.h"
#include "../ext.h"

#include <Zend/zend_operators.h>
#include <Zend/zend_exceptions.h>
#include <Zend/zend_interfaces.h>

#include "kernel/main.h"
#include "kernel/object.h"
#include "kernel/memory.h"
#include "kernel/fcall.h"
#include "kernel/operators.h"
#include "kernel/hash.h"
#include "ext/spl/spl_exceptions.h"
#include "kernel/exception.h"


ZEPHIR_INIT_CLASS(Ansi_Output) {

	ZEPHIR_REGISTER_CLASS(Ansi, Output, ansi, output, ansi_output_method_entry, 0);

	zend_declare_property_null(ansi_output_ce, SL("prefix"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_null(ansi_output_ce, SL("suffix"), ZEND_ACC_PROTECTED TSRMLS_CC);

	ansi_output_ce->create_object = zephir_init_properties_Ansi_Output;
	zend_declare_class_constant_long(ansi_output_ce, SL("BG_BLACK_TYPE"), 1 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("BG_RED_TYPE"), 2 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("BG_GREEN_TYPE"), 3 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("BG_YELLOW_TYPE"), 4 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("BG_BLUE_TYPE"), 5 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("BG_MAGENTA_TYPE"), 6 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("BG_CYAN_TYPE"), 7 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("BG_LIGHT_GRAY_TYPE"), 8 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("FG_BLACK_TYPE"), 11 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("FG_DARK_GREY_TYPE"), 12 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("FG_BLUE_TYPE"), 13 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("FG_LIGHT_BLUE_TYPE"), 14 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("FG_GREEN_TYPE"), 15 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("FG_LIGHT_GREEN_TYPE"), 16 TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("FG_CYAN_TYPE"), "CYAN" TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("FG_LIGHT_CYAN_TYPE"), 17 TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("FG_RED_TYPE"), "RED" TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("FG_LIGHT_RED_TYPE"), 18 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("FG_PURPLE_TYPE"), 19 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("FG_LIGHT_PURPLE_TYPE"), 20 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("FG_BROWN_TYPE"), 21 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("FG_YELLOW_TYPE"), 22 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("FG_LIGHT_GREY_TYPE"), 23 TSRMLS_CC);

	zend_declare_class_constant_long(ansi_output_ce, SL("FG_WHITE_TYPE"), 24 TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("BG_BLACK"), "\\033[40m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("BG_RED"), "\\033[41m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("BG_GREEN"), "\\033[42m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("BG_YELLOW"), "\\033[43m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("BG_BLUE"), "\\033[44m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("BG_MAGENTA"), "\\033[45m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("BG_CYAN"), "\\033[46m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("BG_LIGHT_GRAY"), "\\033[47m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("FG_BLACK"), "\\033[0;30m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("FG_DARK_GREY"), "\\033[1;30m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("FG_BLUE"), "\\033[0;34m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("FG_LIGHT_BLUE"), "\\033[1;34m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("FG_GREEN"), "\\033[0;32m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("FG_LIGHT_GREEN"), "\\033[1;32m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("FG_CYAN"), "\\033[0;36m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("FG_LIGHT_CYAN"), "\\033[1;36m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("FG_RED"), "\\033[0;31m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("FG_LIGHT_RED"), "\\033[1;31m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("FG_PURPLE"), "\\033[0;35m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("FG_LIGHT_PURPLE"), "\\033[1;35m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("FG_BROWN"), "\\033[0;33m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("FG_YELLOW"), "\\033[1;33m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("FG_LIGHT_GREY"), "\\033[0;37m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("FG_WHITE"), "\\033[1;37m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("ANSI_END"), "\\033[0m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("ANSI_BOLD"), "\\033[1m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("ANSI_ITALIC"), "\\033[3m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("ANSI_UNDERLINE"), "\\033[4m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("ANSI_BLINK"), "\\033[5m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("ANSI_INVERSE"), "\\033[7m" TSRMLS_CC);

	zend_declare_class_constant_string(ansi_output_ce, SL("ANSI_HIDDEN"), "\\033[8m" TSRMLS_CC);

	return SUCCESS;

}

PHP_METHOD(Ansi_Output, __construct) {

	int ZEPHIR_LAST_CALL_STATUS;
	zend_bool underline, bold, italic, blink;
	zval *fg = NULL, *bg = NULL, *underline_param = NULL, *bold_param = NULL, *italic_param = NULL, *blink_param = NULL, *_0, *_1$$3, *_2$$4, *_3$$5, *_4$$6;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 0, 6, &fg, &bg, &underline_param, &bold_param, &italic_param, &blink_param);

	if (!fg) {
		fg = ZEPHIR_GLOBAL(global_null);
	}
	if (!bg) {
		bg = ZEPHIR_GLOBAL(global_null);
	}
	if (!underline_param) {
		underline = 0;
	} else {
		underline = zephir_get_boolval(underline_param);
	}
	if (!bold_param) {
		bold = 0;
	} else {
		bold = zephir_get_boolval(bold_param);
	}
	if (!italic_param) {
		italic = 0;
	} else {
		italic = zephir_get_boolval(italic_param);
	}
	if (!blink_param) {
		blink = 0;
	} else {
		blink = zephir_get_boolval(blink_param);
	}


	ZEPHIR_INIT_ZVAL_NREF(_0);
	ZVAL_STRING(_0, "\033[0m", 1);
	zephir_update_property_array_append(this_ptr, SL("prefix"), _0 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "setfg", NULL, 0, fg);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "setbg", NULL, 0, bg);
	zephir_check_call_status();
	if (bold) {
		ZEPHIR_INIT_ZVAL_NREF(_1$$3);
		ZVAL_STRING(_1$$3, "\033[1m", 1);
		zephir_update_property_array_append(this_ptr, SL("prefix"), _1$$3 TSRMLS_CC);
	}
	if (italic) {
		ZEPHIR_INIT_ZVAL_NREF(_2$$4);
		ZVAL_STRING(_2$$4, "\033[3m", 1);
		zephir_update_property_array_append(this_ptr, SL("prefix"), _2$$4 TSRMLS_CC);
	}
	if (underline) {
		ZEPHIR_INIT_ZVAL_NREF(_3$$5);
		ZVAL_STRING(_3$$5, "\033[4m", 1);
		zephir_update_property_array_append(this_ptr, SL("prefix"), _3$$5 TSRMLS_CC);
	}
	if (blink) {
		ZEPHIR_INIT_ZVAL_NREF(_4$$6);
		ZVAL_STRING(_4$$6, "\033[5m", 1);
		zephir_update_property_array_append(this_ptr, SL("prefix"), _4$$6 TSRMLS_CC);
	}
	ZEPHIR_INIT_ZVAL_NREF(_0);
	ZVAL_STRING(_0, "\033[0m", 1);
	zephir_update_property_array_append(this_ptr, SL("suffix"), _0 TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(Ansi_Output, log) {

	zval *str;

	zephir_fetch_params(0, 1, 0, &str);




}

PHP_METHOD(Ansi_Output, setFg) {

	zval *fg, *_0$$3, *_1$$4, *_2$$5, *_3$$6, *_4$$7, *_5$$8, *_6$$9, *_7$$10, *_8$$11, *_9$$12, *_10$$13, *_11$$14, *_12$$15, *_13$$16, *_14$$17, *_15$$18;

	zephir_fetch_params(0, 1, 0, &fg);



	do {
		if (ZEPHIR_IS_LONG(fg, 24)) {
			ZEPHIR_INIT_ZVAL_NREF(_0$$3);
			ZVAL_STRING(_0$$3, "\033[1;37m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _0$$3 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(fg, 22)) {
			ZEPHIR_INIT_ZVAL_NREF(_1$$4);
			ZVAL_STRING(_1$$4, "\033[1;33m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _1$$4 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(fg, 21)) {
			ZEPHIR_INIT_ZVAL_NREF(_2$$5);
			ZVAL_STRING(_2$$5, "\033[0;33m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _2$$5 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(fg, 19)) {
			ZEPHIR_INIT_ZVAL_NREF(_3$$6);
			ZVAL_STRING(_3$$6, "\033[0;35m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _3$$6 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_STRING(fg, "RED")) {
			ZEPHIR_INIT_ZVAL_NREF(_4$$7);
			ZVAL_STRING(_4$$7, "\033[0;31m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _4$$7 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_STRING(fg, "CYAN")) {
			ZEPHIR_INIT_ZVAL_NREF(_5$$8);
			ZVAL_STRING(_5$$8, "\033[0;36m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _5$$8 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(fg, 15)) {
			ZEPHIR_INIT_ZVAL_NREF(_6$$9);
			ZVAL_STRING(_6$$9, "\033[0;32m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _6$$9 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(fg, 13)) {
			ZEPHIR_INIT_ZVAL_NREF(_7$$10);
			ZVAL_STRING(_7$$10, "\033[0;34m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _7$$10 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(fg, 11)) {
			ZEPHIR_INIT_ZVAL_NREF(_8$$11);
			ZVAL_STRING(_8$$11, "\033[0;30m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _8$$11 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(fg, 23)) {
			ZEPHIR_INIT_ZVAL_NREF(_9$$12);
			ZVAL_STRING(_9$$12, "\033[0;37m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _9$$12 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(fg, 20)) {
			ZEPHIR_INIT_ZVAL_NREF(_10$$13);
			ZVAL_STRING(_10$$13, "\033[1;35m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _10$$13 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(fg, 18)) {
			ZEPHIR_INIT_ZVAL_NREF(_11$$14);
			ZVAL_STRING(_11$$14, "\033[1;31m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _11$$14 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(fg, 17)) {
			ZEPHIR_INIT_ZVAL_NREF(_12$$15);
			ZVAL_STRING(_12$$15, "\033[1;36m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _12$$15 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(fg, 16)) {
			ZEPHIR_INIT_ZVAL_NREF(_13$$16);
			ZVAL_STRING(_13$$16, "\033[1;32m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _13$$16 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(fg, 14)) {
			ZEPHIR_INIT_ZVAL_NREF(_14$$17);
			ZVAL_STRING(_14$$17, "\033[1;34m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _14$$17 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(fg, 12)) {
			ZEPHIR_INIT_ZVAL_NREF(_15$$18);
			ZVAL_STRING(_15$$18, "\033[1;30m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _15$$18 TSRMLS_CC);
			break;
		}
		break;
	} while(0);


}

PHP_METHOD(Ansi_Output, setBg) {

	zval *bg, *_0$$3, *_1$$4, *_2$$5, *_3$$6, *_4$$7, *_5$$8, *_6$$9, *_7$$10;

	zephir_fetch_params(0, 1, 0, &bg);



	do {
		if (ZEPHIR_IS_LONG(bg, 7)) {
			ZEPHIR_INIT_ZVAL_NREF(_0$$3);
			ZVAL_STRING(_0$$3, "\033[46m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _0$$3 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(bg, 6)) {
			ZEPHIR_INIT_ZVAL_NREF(_1$$4);
			ZVAL_STRING(_1$$4, "\033[45m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _1$$4 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(bg, 5)) {
			ZEPHIR_INIT_ZVAL_NREF(_2$$5);
			ZVAL_STRING(_2$$5, "\033[44m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _2$$5 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(bg, 4)) {
			ZEPHIR_INIT_ZVAL_NREF(_3$$6);
			ZVAL_STRING(_3$$6, "\033[43m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _3$$6 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(bg, 3)) {
			ZEPHIR_INIT_ZVAL_NREF(_4$$7);
			ZVAL_STRING(_4$$7, "\033[42m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _4$$7 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(bg, 2)) {
			ZEPHIR_INIT_ZVAL_NREF(_5$$8);
			ZVAL_STRING(_5$$8, "\033[41m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _5$$8 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(bg, 1)) {
			ZEPHIR_INIT_ZVAL_NREF(_6$$9);
			ZVAL_STRING(_6$$9, "\033[40m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _6$$9 TSRMLS_CC);
			break;
		}
		if (ZEPHIR_IS_LONG(bg, 8)) {
			ZEPHIR_INIT_ZVAL_NREF(_7$$10);
			ZVAL_STRING(_7$$10, "\033[47m", 1);
			zephir_update_property_array_append(this_ptr, SL("prefix"), _7$$10 TSRMLS_CC);
			break;
		}
		break;
	} while(0);


}

PHP_METHOD(Ansi_Output, out) {

	HashTable *_2, *_6;
	HashPosition _1, _5;
	zval *str_param = NULL, *pre = NULL, *_0, **_3, *suf = NULL, *_4, **_7;
	zval *str = NULL;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &str_param);

	if (unlikely(Z_TYPE_P(str_param) != IS_STRING && Z_TYPE_P(str_param) != IS_NULL)) {
		zephir_throw_exception_string(spl_ce_InvalidArgumentException, SL("Parameter 'str' must be a string") TSRMLS_CC);
		RETURN_MM_NULL();
	}
	if (likely(Z_TYPE_P(str_param) == IS_STRING)) {
		zephir_get_strval(str, str_param);
	} else {
		ZEPHIR_INIT_VAR(str);
		ZVAL_EMPTY_STRING(str);
	}


	_0 = zephir_fetch_nproperty_this(this_ptr, SL("prefix"), PH_NOISY_CC);
	zephir_is_iterable(_0, &_2, &_1, 0, 0, "ansi/output.zep", 198);
	for (
	  ; zephir_hash_get_current_data_ex(_2, (void**) &_3, &_1) == SUCCESS
	  ; zephir_hash_move_forward_ex(_2, &_1)
	) {
		ZEPHIR_GET_HVALUE(pre, _3);
		zend_print_zval(pre, 0);
	}
	zend_print_zval(str, 0);
	_4 = zephir_fetch_nproperty_this(this_ptr, SL("suffix"), PH_NOISY_CC);
	zephir_is_iterable(_4, &_6, &_5, 0, 0, "ansi/output.zep", 203);
	for (
	  ; zephir_hash_get_current_data_ex(_6, (void**) &_7, &_5) == SUCCESS
	  ; zephir_hash_move_forward_ex(_6, &_5)
	) {
		ZEPHIR_GET_HVALUE(suf, _7);
		zend_print_zval(suf, 0);
	}
	ZEPHIR_MM_RESTORE();

}

zend_object_value zephir_init_properties_Ansi_Output(zend_class_entry *class_type TSRMLS_DC) {

		zval *_0, *_2, *_1$$3, *_3$$4;

		ZEPHIR_MM_GROW();
	
	{
		zval *this_ptr = NULL;
		ZEPHIR_CREATE_OBJECT(this_ptr, class_type);
		_0 = zephir_fetch_nproperty_this(this_ptr, SL("suffix"), PH_NOISY_CC);
		if (Z_TYPE_P(_0) == IS_NULL) {
			ZEPHIR_INIT_VAR(_1$$3);
			array_init(_1$$3);
			zephir_update_property_this(this_ptr, SL("suffix"), _1$$3 TSRMLS_CC);
		}
		_2 = zephir_fetch_nproperty_this(this_ptr, SL("prefix"), PH_NOISY_CC);
		if (Z_TYPE_P(_2) == IS_NULL) {
			ZEPHIR_INIT_VAR(_3$$4);
			array_init(_3$$4);
			zephir_update_property_this(this_ptr, SL("prefix"), _3$$4 TSRMLS_CC);
		}
		ZEPHIR_MM_RESTORE();
		return Z_OBJVAL_P(this_ptr);
	}

}

