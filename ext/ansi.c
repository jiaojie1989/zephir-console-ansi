
/* This file was generated automatically by Zephir do not modify it! */

#ifdef HAVE_CONFIG_H
#include "config.h"
#endif

#include <php.h>

#if PHP_VERSION_ID < 50500
#include <locale.h>
#endif

#include "php_ext.h"
#include "ansi.h"

#include <ext/standard/info.h>

#include <Zend/zend_operators.h>
#include <Zend/zend_exceptions.h>
#include <Zend/zend_interfaces.h>

#include "kernel/globals.h"
#include "kernel/main.h"
#include "kernel/fcall.h"
#include "kernel/memory.h"



zend_class_entry *ansi_output_ce;

ZEND_DECLARE_MODULE_GLOBALS(ansi)

PHP_INI_BEGIN()
	
PHP_INI_END()

static PHP_MINIT_FUNCTION(ansi)
{
#if PHP_VERSION_ID < 50500
	char* old_lc_all = setlocale(LC_ALL, NULL);
	if (old_lc_all) {
		size_t len = strlen(old_lc_all);
		char *tmp  = calloc(len+1, 1);
		if (UNEXPECTED(!tmp)) {
			return FAILURE;
		}

		memcpy(tmp, old_lc_all, len);
		old_lc_all = tmp;
	}

	setlocale(LC_ALL, "C");
#endif
	REGISTER_INI_ENTRIES();
	ZEPHIR_INIT(Ansi_Output);

#if PHP_VERSION_ID < 50500
	setlocale(LC_ALL, old_lc_all);
	free(old_lc_all);
#endif
	return SUCCESS;
}

#ifndef ZEPHIR_RELEASE
static PHP_MSHUTDOWN_FUNCTION(ansi)
{

	zephir_deinitialize_memory(TSRMLS_C);
	UNREGISTER_INI_ENTRIES();
	return SUCCESS;
}
#endif

/**
 * Initialize globals on each request or each thread started
 */
static void php_zephir_init_globals(zend_ansi_globals *ansi_globals TSRMLS_DC)
{
	ansi_globals->initialized = 0;

	/* Memory options */
	ansi_globals->active_memory = NULL;

	/* Virtual Symbol Tables */
	ansi_globals->active_symbol_table = NULL;

	/* Cache Enabled */
	ansi_globals->cache_enabled = 1;

	/* Recursive Lock */
	ansi_globals->recursive_lock = 0;

	/* Static cache */
	memset(ansi_globals->scache, '\0', sizeof(zephir_fcall_cache_entry*) * ZEPHIR_MAX_CACHE_SLOTS);


}

/**
 * Initialize globals only on each thread started
 */
static void php_zephir_init_module_globals(zend_ansi_globals *ansi_globals TSRMLS_DC)
{

}

static PHP_RINIT_FUNCTION(ansi)
{

	zend_ansi_globals *ansi_globals_ptr = ZEPHIR_VGLOBAL;

	php_zephir_init_globals(ansi_globals_ptr TSRMLS_CC);
	//zephir_init_interned_strings(TSRMLS_C);

	zephir_initialize_memory(ansi_globals_ptr TSRMLS_CC);


	return SUCCESS;
}

static PHP_RSHUTDOWN_FUNCTION(ansi)
{

	

	zephir_deinitialize_memory(TSRMLS_C);
	return SUCCESS;
}

static PHP_MINFO_FUNCTION(ansi)
{
	php_info_print_box_start(0);
	php_printf("%s", PHP_ANSI_DESCRIPTION);
	php_info_print_box_end();

	php_info_print_table_start();
	php_info_print_table_header(2, PHP_ANSI_NAME, "enabled");
	php_info_print_table_row(2, "Author", PHP_ANSI_AUTHOR);
	php_info_print_table_row(2, "Version", PHP_ANSI_VERSION);
	php_info_print_table_row(2, "Build Date", __DATE__ " " __TIME__ );
	php_info_print_table_row(2, "Powered by Zephir", "Version " PHP_ANSI_ZEPVERSION);
	php_info_print_table_end();

	DISPLAY_INI_ENTRIES();
}

static PHP_GINIT_FUNCTION(ansi)
{
	php_zephir_init_globals(ansi_globals TSRMLS_CC);
	php_zephir_init_module_globals(ansi_globals TSRMLS_CC);
}

static PHP_GSHUTDOWN_FUNCTION(ansi)
{

}


zend_function_entry php_ansi_functions[] = {
ZEND_FE_END

};

zend_module_entry ansi_module_entry = {
	STANDARD_MODULE_HEADER_EX,
	NULL,
	NULL,
	PHP_ANSI_EXTNAME,
	php_ansi_functions,
	PHP_MINIT(ansi),
#ifndef ZEPHIR_RELEASE
	PHP_MSHUTDOWN(ansi),
#else
	NULL,
#endif
	PHP_RINIT(ansi),
	PHP_RSHUTDOWN(ansi),
	PHP_MINFO(ansi),
	PHP_ANSI_VERSION,
	ZEND_MODULE_GLOBALS(ansi),
	PHP_GINIT(ansi),
	PHP_GSHUTDOWN(ansi),
	NULL,
	STANDARD_MODULE_PROPERTIES_EX
};

#ifdef COMPILE_DL_ANSI
ZEND_GET_MODULE(ansi)
#endif
