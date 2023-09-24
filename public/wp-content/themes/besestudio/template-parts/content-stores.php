<?php 
	$photo = get_field('store_photo');

	$content = [
		'store1' => [
			'country' => get_field('store_1_country'),
			'details' => get_field('store_1_details')
		],
		'store2' => [
			'country' => get_field('store_2_country'),
			'details' => get_field('store_2_details')
		]
	]; 
?>

<div class="projects stores">
	<article class="post">
		<div class="col-md-4 col-post side--left">
				<img class="post-background" src="<?php echo $photo; ?>">
		</div>
		<div class="col-md-8 col-stores-info col-post side--right">
		<div class="post-content">
			<h2 class="title">Contact Me</h2>
			<!-- The Content -->
			<div class="the-content">

			
				
				<div class="col-md-6 col-sm-12 col-post">
					<h5 style="color:#000;"><?php echo $content['store1']['country']; ?></h5>
					<p>
					<?php echo $content['store1']['details']; ?><br>
					<a class="btn" href="#">View map</a>

					</p>
				</div>

				<div class="col-md-6 col-sm-12 col-post">
					<h5 style="color:#000;"><?php echo $content['store2']['country']; ?></h5>
					<p>
					<?php echo $content['store2']['details']; ?><br>
					<a class="btn" href="#">View map</a>
					</p>
				</div>
		

			
				<div class="post-footer">

					<div class="post-share-wrap">
						<div class="post-share">
							<a href="#">
								<i class="fa fa-facebook"></i>
							</a>
							<a href="#">
								<i class="fa fa-twitter"></i>
							</a>
							<a href="#">
								<i class="fa fa-google-plus"></i>
							</a>
							<a href="#">
								<i class="fa fa-linkedin"></i>
							</a>
							<a href="#">
								<i class="fa fa-pinterest"></i>
							</a>
						</div>
					</div>
				</div>
			

			</div>
			<!-- End The Content -->
		</div>
		</div>

	</article>

</div>