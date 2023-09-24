<?php 
if(!is_single()) {
$collection_year = $wp_query->query['year']; 
?>
<div class="projects">
	<div class="project">
		<div class="detail-content">
			<h2 class="title" style="margin-bottom:0;">
				Bese collection <?php echo $collection_year; ?>
			</h2>
			
		</div>

		<div class="images-project">

			<?php
			
			$paged = ( get_query_var('page') ) ? get_query_var('page') : 1;
			$args = array(
			    'post_type' => 'collections',
			    'posts_per_page' => 2,
			  //  'is_paged' => true,
            	
			    'tax_query' => array(
			        array(
			            'taxonomy' => 'collection-year',
			            'field'    => 'slug',
            			'terms'    => $collection_year,            			
			        ),
			    ),
			    'paged' => $paged,
			);
			$query = new WP_Query( $args ); 
			while($query->have_posts()) {
				$query->the_post();	
				$collection_slug = get_the_terms(get_the_ID(), 'collection-year')[0]->slug;			
			?>
			<div class="box navigation">
				<a data-target="<?php the_permalink(); ?>" href="<?php the_permalink(); ?>" >
					<img class="lazy" src="<?php the_post_thumbnail_url('besePortrait'); ?>" alt="">
					<h2 class="heading-fustani"><?php the_title(); ?></h2>
					
				</a> 
			</div>
			<?php
			}

			?>
			
		</div>
		
		
		<!-- Navigation -->
		<div class="navigation navigation-wrap">
			<?php 
			
pagination($query->max_num_pages, $paged, $collection_slug);
		wp_reset_postdata();
	 
		?>
			<!-- <a href="#" class="page-numbers"></a>
			<a href="#" class="page-numbers"><i class="fa fa-th"></i></a>
			<a href="#" class="page-numbers"></a> -->
		</div>
		<!-- End Navigation -->
	</div>
</div>
<?php } else {
	$collection = get_the_terms(get_the_ID(), 'collection-year')[0]->name;
    $collection_slug = get_the_terms(get_the_ID(), 'collection-year')[0]->slug;
?>

<div class="projects">
	<div class="project">
		<div class="detail-content">
			<h2 class="title" style="margin-bottom:0;">
				<span style="text-transform: uppercase;"><?php echo $collection; ?></span> / <?php the_title(); ?>
			</h2>
			
		</div>

		<div class="images-project">

			<?php $images = get_field('gallery'); ?>
		
			<?php
				foreach($images as $image):
			?>
			
			<a href="<?php echo $image['sizes']['medium_large']; ?>" class="popup">
				
				<img class="lazy" src="<?php echo $image['sizes']['medium_large']; ?>" alt="">				
			</a> 			
			
			<?php endforeach; ?>
		</div>

		<!-- Navigation -->
		<div class="navigation-wrap">
			<a href="#" class="page-numbers"><i class="fa fa-angle-left"></i></a>
			<a href="#" class="page-numbers"><i class="fa fa-th"></i></a>
			<a href="#" class="page-numbers"><i class="fa fa-angle-right"></i></a>
		</div>
		<!-- End Navigation -->
	</div>
</div>
<?php } wp_reset_postdata();?>