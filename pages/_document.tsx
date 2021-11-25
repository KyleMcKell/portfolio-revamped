/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Space+Mono:wght@400;700&family=Sriracha&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<script src="noflash.js" />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
