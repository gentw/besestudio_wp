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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'besestudio_com' );

/** MySQL database username */
define( 'DB_USER', 'gent' );

/** MySQL database password */
define( 'DB_PASSWORD', 'f0rfr33d0m' );

/** MySQL hostname */
define( 'DB_HOST', '127.0.0.1' );

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
define( 'AUTH_KEY',         'in?-E!dS){jrJvg]TftenXE^_uDX~yp_czFB<U#b,`VRYq$l@&Pld!*^WNsT5rZ2' );
define( 'SECURE_AUTH_KEY',  'lUi<4mzp?8U3|sJr9ri*tF.-URG]1L$u#XqCTLggG(Qt+!g,hYEGVo,m9ABQ]zN<' );
define( 'LOGGED_IN_KEY',    'XZQ9$xgHLeM4xX%dqiwXW?I]Z83Gi09wYgG(wmHov&mZZx,m:P=|WhdcOyCoHT,V' );
define( 'NONCE_KEY',        '9sMgcwGh{w:3o-HqAO3AkQr`=|XqXwZb,cF{h_@AYjK>J6IZl+{i!NKm$&%VG+F~' );
define( 'AUTH_SALT',        '=0-HmH,vq_P<vqmN*ToW.&(Ce^{76{=*Hr)OB?-a&:>!Kr9p}GOx,/i3nj/,6fC?' );
define( 'SECURE_AUTH_SALT', '~]:LL786!3|k5H(k^](#5BsiX_vkXIz[yaH.W0h^xNj_j;9-AB_+suKPPy_tnvx^' );
define( 'LOGGED_IN_SALT',   ';K_U4`GY!c9C;fgUEO$|QXp;Q&EJ;fSDWOleGl*D+IT^B@H l/allf]k/m-Pw%fW' );
define( 'NONCE_SALT',       'FPyA6Ik.+l PU8R|8:1ffghtDWSjUp;x1HRudI8PF^G-V61&2UuhuqwqwM*F4vVd' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wf_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
