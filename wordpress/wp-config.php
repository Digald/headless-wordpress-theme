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
define('DB_NAME', 'headless');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'r]5Qh/9H{y&}^w^B7P0^6xs:)Oy<R1W~VPgWyFA$i{HQ_*hk-#Q7r)vum5)#,X*M');
define('SECURE_AUTH_KEY',  '2BAngf(2KX%sPo389r%N`<{[wRnndfB/F}-oV%>T9Umue}b~PO&!fjbg5/:gOUc}');
define('LOGGED_IN_KEY',    'ZZ;!jks3%7kB$51Dm/xz!DVlsf zigN[a7:xsppWY*PX8::}97`EbSYOYnE{a!IL');
define('NONCE_KEY',        ')dhB)li_;h:ku5l7NKZ-E vm_#=.EzH#?HNMoc12-Oh Ih%^[v1xL834P6$7*>6j');
define('AUTH_SALT',        'z:9s%q$#g~<VPW+V)A@3 4%h)FBa6ij 9`+TCo&K!MP9Xm9p[:@9J=*5B-6{Uq2s');
define('SECURE_AUTH_SALT', 'G6tIok 3Y)[p/)?S/I?ex7af`Z(eovVB0C$&W!6UBetAmc2$L@yjbci-+P;zk<vm');
define('LOGGED_IN_SALT',   '`cZ=<e  R(%FNSn}&?}B=wHIRhHy(4vx70a.k2#sjNxHXh{7.HPO#mVn>I_;a1aC');
define('NONCE_SALT',       'g~+6MsE%vK1^_9Q$5P1G>%<11MCh(56wTa=`JpWkpkU:L|HFw|6PFfB{E%$R8v1K');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
