
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
#include "kernel/memory.h"
#include "kernel/object.h"
#include "kernel/array.h"


ZEPHIR_INIT_CLASS(Ansi_Color) {

	ZEPHIR_REGISTER_CLASS(Ansi, Color, ansi, color, NULL, 0);

	zend_declare_property_null(ansi_color_ce, SL("_bg_arr"), ZEND_ACC_PROTECTED|ZEND_ACC_STATIC TSRMLS_CC);

	zend_declare_property_null(ansi_color_ce, SL("_fg_arr"), ZEND_ACC_PROTECTED|ZEND_ACC_STATIC TSRMLS_CC);

	return SUCCESS;

}

void zephir_init_static_properties_Ansi_Color(TSRMLS_D) {

	zval *_1;
	zval *_0;

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(_0);
	array_init(_0);
	zephir_update_static_property_ce(ansi_color_ce, SL("_fg_arr"), &_0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(_1);
	zephir_create_array(_1, 1, 0 TSRMLS_CC);
	add_index_long(_1, 1, 1);
	zephir_update_static_property_ce(ansi_color_ce, SL("_bg_arr"), &_1 TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

