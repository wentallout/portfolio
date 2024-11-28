import config from '$lib/config';

/**
 * Generates a RSS feed in XML format containing the blog posts.
 *
 * @param {Object} fetch - the fetch function used to make HTTP requests
 * @return {Response} - a Response object containing the XML representation of the RSS feed
 */
export async function GET({ fetch }) {
	const response = await fetch('api/blog');
	const blogs = await response.json();

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.siteTitle}</title>
				<description>${config.description}</description>
				<link>${config.siteUrl}</link>
				<atom:link href="${config.siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
				${blogs
					.map(
						(blog) => `
						<item>
							<title>${blog.meta.title}</title>
							<link>${config.siteUrl}${blog.path}</link>
							<guid isPermaLink="true">${config.siteUrl}${blog.path}</guid>
							<pubDate>${buildRFC822Date(new Date(blog.meta.date).toString())}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}
function addLeadingZero(num) {
	num = num.toString();
	while (num.length < 2) num = '0' + num;
	return num;
}

function buildRFC822Date(dateString) {
	const dayStrings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const monthStrings = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	const timeStamp = Date.parse(dateString);
	const date = new Date(timeStamp);

	const day = dayStrings[date.getDay()];
	const dayNumber = addLeadingZero(date.getDate());
	const month = monthStrings[date.getMonth()];
	const year = date.getFullYear();
	const time = `${addLeadingZero(date.getHours())}:${addLeadingZero(date.getMinutes())}:00`;
	const timezone = date.getTimezoneOffset() === 0 ? 'GMT' : 'BST';

	//Wed, 02 Oct 2002 13:00:00 GMT
	return `${day}, ${dayNumber} ${month} ${year} ${time} ${timezone}`;
}
