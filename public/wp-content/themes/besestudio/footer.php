<?php
    $args = array('pagename'=>'about');
    $q = new WP_Query($args);
    while($q->have_posts()) {
        $q->the_post();

        $about_me = get_field('about_me');

        $contact = [
            'phone' => get_field('contact_phone'),
            'email' => get_field('contact_email'),
            'location' => get_field('contact_location')
        ];
?>

<footer id="footer" class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-9 col-md-offset-3">
                        <div class="footer-inner">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h2 class="title">About Me</h2>
                                    <p><?php echo $about_me; ?></p>
                                </div>
                                <div class="col-sm-6">
                                    <h2 class="title">Contact Me</h2>
                                    <ul>
                                        <li>Phone: <?php echo $contact['phone']; ?></li>
                                        <li>Email: <?php echo $contact['email']; ?></li>
                                        <li>Location: <?php echo $contact['location']; ?></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    <?php } ?>
    </div>
	<?php wp_footer(); ?>
</body>
</html>