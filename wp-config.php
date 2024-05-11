<?php
define( 'WP_CACHE', true );

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ali' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '3{]]->c4;0F$_&@!.FKRV/r{6f.V6YE>*59)Wl?.PbM-`kxu( NM1sy=fkv!hCA~' );
define( 'SECURE_AUTH_KEY',  '[6@[B0xN t3X$<@~O#FRpr)>)B]`ds_>-6^GH1kXqNrA!281AC1Hr-b`=I#HPn;8' );
define( 'LOGGED_IN_KEY',    'm-Vwk!m9eo{r#eiVhnYO%$rs:wVVw?XN9IAN3JxWvV<q@o6+uWp&*<y*Z3KVG)O_' );
define( 'NONCE_KEY',        '{C&D0?Ij-UUj@9>!I[)]qHX(<VD0p#;*E0D7i#0Q6s|I+lLnI<+]>QI7d>!?}b%X' );
define( 'AUTH_SALT',        'O4Y6SF=zLm$Fw/(oUvRA)%[tKv=o+$&m5]>%XHVLCG9Sc%~4<ii!O1%7S` v.B#j' );
define( 'SECURE_AUTH_SALT', 'NXXu*JqT:;|I(uE]3w&k{|pkkBX{LFl!%rrvc](0(an3N@6_BfjIC)gTD{GHp%4h' );
define( 'LOGGED_IN_SALT',   '|7bsI-bn^wBuI@jLI0$2BuD5GG;K+uE3=$CB8.li]aery>;OF?M8tQ?4aKZ!uhDL' );
define( 'NONCE_SALT',       '-`;hq{<jn_q?;+:h0[JA[AK}v;&.g7GRK~! ;on{we,Lg)ieC<q7 Ho1=t]<Gcj5' );

/**#@-*/

/**
 * WordPress database table prefix.
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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
