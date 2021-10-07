<template>
	<footer class="dark:bg-coolGray-800 dark:text-coolGray-50">
		<div class="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-coolGray-400">
			<ul class="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
				<li>
					<a href="/about" class="text-base font-medium text-gray-500 hover:text-gray-900">About</a>
				</li>
				<li>
					<a href="/imprint" class="text-base font-medium text-gray-500 hover:text-gray-900">Imprint</a>
				</li>
				<li>
					<a href="/privacy-policy" class="text-base font-medium text-gray-500 hover:text-gray-900">Privacy Policy</a>
				</li>
			</ul>
			<div class="flex flex-col justify-center pt-6 lg:pt-0">
				<div class="flex justify-center space-x-4">
					<a href="https://github.com/nicokempe" title="GitHub" class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-coolGray-900">
						<i class="fab fa-github"></i>
					</a>
					<a href="https://twitter.com/nicovrny" title="Twitter" class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-coolGray-900">
						<i class="fab fa-twitter"></i>
					</a>
					<a href="https://www.youtube.com/channel/UCWHDTr-DTRpDdH1Ld7VpzRw" title="YouTube" class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-coolGray-900">
						<i class="fab fa-youtube"></i>
					</a>
					<a href="https://discord.gg/t9frQmmqPe" title="Discord" class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-coolGray-900">
						<i class="fab fa-discord"></i>
					</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>