
<div class="col-md-3">
    <div class="header affix">
        <div class="table">
            <div class="table-cell">
                <div class="logo">
                    <a href="/"><img src="/wp-content/themes/besestudio/img/logo.png"></a>
                </div>
                <div class="main-menu">
                    <nav class="navigation">

                        <ul class="menu-list">
                            <li class="home <?php if(is_front_page()): echo 'active'; endif ?> menu-item-has-children"><a href="/home" data-target="/home">Home</a></li>
                            <li class="about <?php if(is_page('about')): echo 'active'; endif ?>"><a href="#" data-target="/about">About</a></li>
                            <li class="collection <?php if(is_post_type_archive('collections') || is_single()): echo 'active'; endif ?> menu-item-has-children"><a href="#">Collections</a>
                                <ul class="sub-menu">
                                    
                                    <?php 
                                    $args = array('taxonomy'=>'collection-year','hide_empty' => false, 'order'=>'DESC');
                                    $terms = get_terms($args);
                                    if(count($terms) > 0) {
                                        foreach($terms as $term) {  
                                        ?>
                                        <li><a class="collection-<?php echo $term->slug; ?>" data-target="/collection/<?php echo $term->slug; ?>" href="/collection/<?php echo $term->slug; ?>"><?php echo $term->name; ?></a></li>
                                    <?php
                                        }
                                    }
                                    ?>

                                </ul>
                            </li>
                            <li class="stores <?php if(is_page('stores')): echo 'active'; endif ?>"><a href="/stores" data-target="/stores">Stores</a></li>
                            <li class="contact <?php if(is_page('contact')): echo 'active'; endif ?>"><a href="/contact" data-target="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="socials"><a href="#" title="Behance"><i class="fa fa-behance"></i></a><a href="#" title="Dribbble"><i class="fa fa-dribbble"></i></a><a href="#" title="Facebook"><i class="fa fa-facebook"></i></a><a href="#" title="Google Plus"><i class="fa fa-google-plus"></i></a><a href="#" title="Instagram"><i class="fa fa-instagram"></i></a><a href="#" title="Search this site"><i class="fa fa-search"></i></a></div>
                <div class="box-search">
                    <div class="table">
                        <div class="table-cell">
                            <div class="container">
                                <form class="search-form" action="#" method="get">
                                    <input type="search" name="s" class="search-field" placeholder="Type &amp; hit enter" value="" title="Search">
                                    <div class="kd-close"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <p>Besë @ 2018. Dev. by <a href="https://bitemybytes.com">BiteMyBytes</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
        