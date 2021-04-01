<?php
function trustindex_init_block_editor_assets()
{
	wp_register_script(
		'trustindex-block-editor',
		plugins_url('index.js', __FILE__),
		array( 'wp-blocks', 'wp-editor', 'wp-api-fetch', ),
		true
	);

	register_block_type(
		'trustindex/block-selector',
		array(
			'editor_script' => 'trustindex-block-editor',
		)
	);
}

add_action( 'init', 'trustindex_init_block_editor_assets' );
