/**
 * @copyright Copyright(c) Muhammad Hussein Fattahizadeh. All rights reserved.
 * @author Muhammad Hussein Fattahizadeh
 * @link <http://mhf.ir/>
 */

/**
 * Load i18n for multilanguage support
 * Remove this if you really know
 */
i18nLoader();

/**
 * Websocket online users
 *
 * If you want to show anything in front just pass
 * empty callback : function(){} for both arguments
 */
Clients.sync(function(number){ // success callback
	if (masterConfig.debug) {
		console.log('Online Users ' + number);
	}
},function(){ // faild callback
	if (masterConfig.debug) {
		console.log('Cannot get online users number...');
	}
});