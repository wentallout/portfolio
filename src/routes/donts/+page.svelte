<script>
	import PageTitle from '$components/common/PageTitle.svelte';
</script>

<PageTitle pageTitle="Things I don't do" />

<div class="container">
	<p>
		Here are things I don't do. I want to write this page because this world is full of bs and most
		of the time you want to reduce all the bad things first so you can focus on your life.
	</p>

	<section>
		<h2>Media</h2>

		<p>I hate mainstream pop music. Taylor Swift? Ed Sheeran? Absolute garbage to me.</p>
		<p>I don't watch K-drama, it's the most annoying movie genre to watch.</p>
	</section>

	<section>
		<h2>Software</h2>

		<p>I do not use PC cleaning software like CCleaner. It's been proven to be very destructive.</p>
		<p>
			I dont use antivirus software because most of them are terrible. I would still recommend
			Malwarebytes on a new computer.
		</p>
	</section>

	<section>
		<h2>A.I</h2>

		<p>
			I am not against A.I and all of its capabilities. I do have problems with idiots who use it.
		</p>
	</section>

	<section>
		<h2>Video games</h2>

		<p>
			I don't like pay2win video games. Straight up. Any games that show signs of pay2win will be
			removed immediately from my devices.
		</p>
	</section>

	<section>
		<h2>Health</h2>

		<ul>
			<li>
				I don't consume alcohol, beer, coffee, cigarette, drugs. I drink tea sometimes. Water is the
				only liquid your body likes unfortunately.
			</li>

			<li>I can't go to bed on time. (will work on this)</li>
		</ul>
	</section>
</div>

<style>
	.container {
		max-width: var(--text-width);
	}

	h2 {
		font-size: var(--font-size-mid);
		font-family: var(--font-fancy);
	}

	section {
		margin-bottom: var(--space-large);
	}
</style>
