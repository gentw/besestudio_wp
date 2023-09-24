<?php 
/*
Template Name: Contact
*/
get_header(); ?>
<div class="home">
    <div id="main-content">
        <div id="preload">
            <div class="kd-bounce">
                <div></div>
                <div></div>
            </div>
        </div>


        <div class="mobile">
		    <div class="container">
		        <div class="menu-mobile"><span class="item item-1"></span><span class="item item-2"></span><span class="item item-3"></span></div>
		        <div class="logo">
		            <a href="home"><img src="/wp-content/themes/besestudio/img/logo.png"></a>
		        </div>
		    </div>
		</div><!-- ./mobile -->
		<div class="hide-menu"></div>
		<div class="container-fluid">
		<div class="row">

        <!-- inc -->
        <?php get_template_part('template-parts/content', 'nav'); ?>

        <div class="col-md-9 col-md-offset-3">
    		<div id="content" style="margin-top:-2px">
        		<?php get_template_part('template-parts/content', 'contact'); ?>
    		</div>
    	</div>
        
    </div>
</div><!-- ./conteiner-fluid-->
    </div>
<?php get_footer(); ?>