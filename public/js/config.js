// array of Monitor-specific API keys or Main API key to list all monitors
var __apiKeys = [
	process.env['UPTIME_ROBOT_API_KEY']
];

// refresh interval (in seconds)
var __refresh = 300;

// the default language
// set false to disable language support and show only english,
// or set null to use visitor's browser language
var __language = null;
