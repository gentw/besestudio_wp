<?php
function bese_files() {
	wp_enqueue_style('bese-main-style', get_stylesheet_uri(), NULL);
	wp_enqueue_style('bese-menu-font', '//fonts.googleapis.com/css?family=Roboto:400,600,700%7CLato:400,700', NULL);
	wp_enqueue_script('bese-libs', get_theme_file_uri('/dist/libs.js'));

	wp_enqueue_script('bese-main-js', get_theme_file_uri('/dist/app.js'));
}
add_action('wp_enqueue_scripts', 'bese_files');


function bese_features() {
	add_theme_support('title-tag');
	add_theme_support('post-thumbnails');

	add_image_size('besePortrait', 500, 700, true);
}
add_action('after_setup_theme', 'bese_features');

function pagination($pages = '', $paged, $slug, $range = 1)
{
	$showitems = ($range * 2)+1; 
		
	if(empty($paged)) $paged = 1;

	if($pages == '')
	{
		global $wp_query;
		$pages = $wp_query->max_num_pages;
		if(!$pages){
			$pages = 1;
		}
	}

	if(1 != $pages) {
		echo "<div class=\"pagination\"><span>Page ".$paged." of ".$pages."</span><br><br>";
		
		// if($paged > 2 && $paged > $range+1 && $showitems < $pages) echo "<a href='".get_pagenum_link(1)."'>&laquo; First</a>";
	
		if($paged > 1 && $showitems < $pages) echo "<a class='page-numbers' href='?page=".($paged - 1)."' data-target='" . get_site_url(). "/collection/". $slug . "/?page=".($paged - 1)."/'><i class='fa fa-angle-left'></i></a>";

		/*for ($i=1; $i <= $pages; $i++) {
			if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems )) {
				echo ($paged == $i)? "<span class=\"current\">".$i."</span>":"<a data-target='?page=".$i."' href='?page=".$i."' class=\"inactive\">".$i."</a>";
			}
		}*/
		echo '<a href="#" class="page-numbers"><i class="fa fa-th"></i></a>';
		if ($paged < $pages && $showitems < $pages) echo "<a class='page-numbers' href=\"?page=".($paged + 1)."\" data-target='" . get_site_url(). "/collection/". $slug . "/?page=".($paged + 1)."/'><i class='fa fa-angle-right'></i></a>";
	
		// if ($paged < $pages-1 && $paged+$range-1 < $pages && $showitems < $pages) echo "<a href='".get_pagenum_link($pages)."'>Last &raquo;</a>";
		
		echo "</div>\n";
	}
}
