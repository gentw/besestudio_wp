<?php

function bese_post_types() {
	register_post_type('collections', array(
		'supports'		=>	array('title', 'thumbnail'),
		'rewrite'		=>	array('slug' => 'collection'),
		'has_archive'	=> 	true,
		'exclude_from_search' =>false,
		'public'		=>	true,
		'labels'		=> 	array(
			'name'			=> 'Collections',
			'add_new_item'	=> 'Add new Collection',
			'edit_item'		=> 'Edit Collection',
			'all_items'		=> 'All Collections',
			'singular_name'	=> 'Collection'
		),
		'menu_icon'=> 'dashicons-businesswoman'
	));

	

}

add_action('init', 'bese_post_types');


 
//create a custom taxonomy name it "collection year" for collections
function bese_create_years_custom_taxonomy() {
 
  $labels = array(
    'name' => _x( 'Years', 'taxonomy general name' ),
    'singular_name' => _x( 'Years', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Years' ),
    'all_items' => __( 'All Years' ),
    'parent_item' => __( 'Parent Year' ),
    'parent_item_colon' => __( 'Parent Year:' ),
    'edit_item' => __( 'Edit Year' ), 
    'update_item' => __( 'Update Year' ),
    'add_new_item' => __( 'Add New Year' ),
    'new_item_name' => __( 'New Year' ),
    'menu_name' => __( 'Years' ),
  ); 	
 
  register_taxonomy('collection-year',array('collections'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'collection-year' ),
  ));
}

add_action( 'init', 'bese_create_years_custom_taxonomy', 0 );
