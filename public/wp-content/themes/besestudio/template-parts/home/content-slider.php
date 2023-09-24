<?php 
$args = array('post_type'=>'collections', 'posts_per_page'=>6);
$q = new WP_Query($args);


?>

<div class="owl-carousel owl-theme">
     
    <?php
    while($q->have_posts()) {
    $q->the_post();
    $collection = get_the_terms(get_the_ID(), 'collection-year')[0]->name;
    $collection_slug = get_the_terms(get_the_ID(), 'collection-year')[0]->slug;

    ?>    
    <div class="navigation">
        <a data-target="<?php the_permalink(); ?>" href="<?php the_permalink(); ?>"><div class="slide-image" style="background:url(<?php the_post_thumbnail_url(); ?>) center center; background-repeat: no-repeat; background-size:cover; width:100%;height:50%"></div></a>
        <h2 class="heading-fustani"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a> / <a href="/collection/<?php echo $collection_slug; ?>" style="font-size:15px; color:#fff;"><?php echo $collection; ?></a></h2>
    </div>
    
    <?php
    } ?>



</div>
  