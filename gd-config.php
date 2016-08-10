<?php

define( 'GD_VIP', '198.71.233.11' );
define( 'GD_RESELLER', 1 );
define( 'GD_ASAP_KEY', '8d924b13dff3c39f3adb9cb676253a8c' );
define( 'GD_STAGING_SITE', true );
define( 'GD_EASY_MODE', false );
define( 'GD_SITE_CREATED', 1467715892 );

// Newrelic tracking
if ( function_exists( 'newrelic_set_appname' ) ) {
	newrelic_set_appname( 'a6269dbd-a13f-44c5-a91e-1003fa27bbef;' . ini_get( 'newrelic.appname' ) );
}

/**
 * Is this is a mobile client?  Can be used by batcache.
 * @return array
 */
function is_mobile_user_agent() {
	return array(
	       "mobile_browser"             => !in_array( $_SERVER['HTTP_X_UA_DEVICE'], array( 'bot', 'pc' ) ),
	       "mobile_browser_tablet"      => false !== strpos( $_SERVER['HTTP_X_UA_DEVICE'], 'tablet-' ),
	       "mobile_browser_smartphones" => in_array( $_SERVER['HTTP_X_UA_DEVICE'], array( 'mobile-iphone', 'mobile-smartphone', 'mobile-firefoxos', 'mobile-generic' ) ),
	       "mobile_browser_android"     => false !== strpos( $_SERVER['HTTP_X_UA_DEVICE'], 'android' )
	);
}