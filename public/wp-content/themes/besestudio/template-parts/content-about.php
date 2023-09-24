<?php 
	$photo = get_field('photo');

	$content = [
		'txt1' => [
			'title' => get_field('title_1'),
			'caption' => get_field('caption_1')
		],
		'txt2' => [
			'title' => get_field('title_2'),
			'caption' => get_field('caption_2')
		]
	]; 
?>
<div class="projects">
	<article class="post">		
		<div class="post-content">			

			<!-- The Content -->
			<div class="the-content">
				<div class="row">
					<div class="col-md-12"></div>
					<div class="col-md-4">
						<div class="post-media">
							<a href="#">
								<img class="bese-about-img" src="<?php echo $photo; ?>" alt="About">
							</a>
						</div>
					</div>
					<div class="col-md-8">
						<h2 class="title"><?php echo $content['txt1']['title']; ?></h2>
						<p>
							<?php echo $content['txt1']['caption']; ?>
						</p>

						<br><br>
						<h2 class="title"><?php echo $content['txt2']['title']; ?></h2>

					<p>
						<?php echo $content['txt2']['caption']; ?>
					</p>

					</div>
				</div>
				<br><br>
				<div class="row">
					<div class="col-md-12">
					
					</div>
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

	</article>

</div>