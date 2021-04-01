<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'vegvisir' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Gp)yjU~N1GG?sU;&X9P6E!/IA0E5+IC#fjPO#ej1F*oM&?*O:d9%vhCVn.b&@oZ)' );
define( 'SECURE_AUTH_KEY',  '&A03w}[e65f6@=Y z^d9JzVx+KX@%5l2|7 }SEdBp@W+4}$wgb!OT_=K?O%v/S?r' );
define( 'LOGGED_IN_KEY',    'JC;Bq_s(DVR3rqXYIH+;2CceF[i3vcs9$:.gji3zfx 4)46EQv)Y;AIEeyeBAnqX' );
define( 'NONCE_KEY',        '`^;[/eND)u-j D[^Jl{9&1@L1Q`u1DxJ#`._i*(8O6U l:!CD]T#uG5cao&$>Lqf' );
define( 'AUTH_SALT',        'QRXgZYz%U1G~zAF(c,C5=GcwF Y_Kj?@_$9dEU-8_)1lJj7[2Ic5N</oM`-lJ:!m' );
define( 'SECURE_AUTH_SALT', '[F}WaYJ@5<8JdL`=,`~588Z#+B5t~TRq@F`RPrHQyv0c^k8D,H{RemjAY1c.{mc+' );
define( 'LOGGED_IN_SALT',   '.T<MARYy.AeTFimE.*5r$T5QZ-<UBr~+ZwIJ:tLmLW`*nwUc;]s#!EwNKpMSGXn[' );
define( 'NONCE_SALT',       'JPh`<NsFDr_NdgbaXBU8}FZRVJ#m0;oMK/LB{c9tMy~EdMxh0r# U!z:,l4(K|AW' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
