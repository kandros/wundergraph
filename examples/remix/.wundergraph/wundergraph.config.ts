import {
	authProviders,
	configureWunderGraphApplication,
	cors,
	EnvironmentVariable,
	introspect,
	templates,
} from '@wundergraph/sdk';
import server from './wundergraph.server';
import operations from './wundergraph.operations';

const spaceX = introspect.graphql({
	apiNamespace: 'spacex',
	url: 'https://spacex-api.fly.dev/graphql/',
});

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
	apis: [spaceX],
	server,
	operations,
	codeGenerators: [
		{
			templates: [...templates.typescript.all],
			path: './generated',
		},
		{
			templates: [templates.typescript.client],
			path: '../components/generated',
		},
	],
	cors: {
		...cors.allowAll,
		allowedOrigins: ['http://localhost:3000'],
	},
	authentication: {
		cookieBased: {
			providers: [authProviders.demo()],
			authorizedRedirectUriRegexes: ['http://localhost:3000*'],
			secureCookieHashKey: new EnvironmentVariable(
				'WUNDERGRAPH_SECURE_COOKIE_HASH_KEY',
				'00000000000000000000000000000000'
			), // must be of length 32
			secureCookieBlockKey: new EnvironmentVariable(
				'WUNDERGRAPH_SECURE_COOKIE_BLOCK_KEY',
				'00000000000000000000000000000000'
			), // must be of length 32
			csrfTokenSecret: new EnvironmentVariable('WUNDERGRAPH_CSRF_TOKEN_SECRET', '00000000000'), // must be of length 11
		},
	},
	security: {
		enableGraphQLEndpoint: process.env.NODE_ENV !== 'production',
	},
});
