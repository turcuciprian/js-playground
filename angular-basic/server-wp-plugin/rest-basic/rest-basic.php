<?php

/*
Plugin Name: Rest Basic
Plugin URI: https://ciprianturcu.com
Description: testing Rest
Version: 1.0
Author: ciprianturcu
Author URI: https://ciprianturcu.com
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Domain Path: /languages
Text Domain: rest
*/

add_action( 'rest_api_init', function() {

	remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
	add_filter( 'rest_pre_serve_request', function( $value ) {
		header( 'Access-Control-Allow-Origin: *' );
		header( 'Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE' );
		header( 'Access-Control-Allow-Credentials: true' );

		return $value;

	});
}, 15 );

add_action( 'rest_api_init', function () {
	register_rest_route( 'rest-basic', '/v1', array(
		'methods' => 'POST',
		'callback' => 'restBasic',
	) );
} );

function restBasic($response){
	$result = [
		'received'=> $response['data'],
		'sentBack'=>['value1'=>'val1x','value2'=>'val2xx']
	];
  return $result;
}
