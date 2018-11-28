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
define('DB_NAME', 'headless_v2');

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
define('AUTH_KEY',         'id(U`~ADe1I$dkpfXtT]zUCvY5L:5]RwZMp0G5pqu1h3GLcvq,>NNI0P{|kY_:tJ');
define('SECURE_AUTH_KEY',  '0?-aF:J`M!+~Vi]LKOtvT:mJ=t(i[^Ra*3`QG40BaLRhS:ox7oag1D5=PP9]nCQo');
define('LOGGED_IN_KEY',    '%`&(3Fh|jS;Uz]+RvzO+N<RV-IE2NC]84PI~4i=Dt%r~w]`x0-U+;F7mjMaj4s$_');
define('NONCE_KEY',        'tl`&&G@WjJXrg -~2oav%YA?%nQX,hds]$BMo@9GD6H!nM&<W}1Jy!<MxCDmE4}v');
define('AUTH_SALT',        '(Lra}%(bfTOej%waFZH(]t96iD>7X}Pc3}p^8!^RIy0.B%w/4lwtU_?JY2kXwm)h');
define('SECURE_AUTH_SALT', '7/L8pn(t-*uC:Y[XZmQv)R]A8FR)@5FAR8]aSoL8Q@pUC+^g7Kpe}Wwfg5qxP5OX');
define('LOGGED_IN_SALT',   '|L1Lc)d$isjdT@>_K@&$78y[:oK+%*FlQL5*TpPJ);&^VMhDe02bV#US|So^UPG%');
define('NONCE_SALT',       'ty`%V&c&*U.#JVt;9pW-MOH^L;_2fL&ZN>V[|mL>2>>4Hi:m^1`O1M]k_Vx(7X?=');

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
