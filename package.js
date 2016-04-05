Package.describe({
    name: "kamshak:accounts-steam",
    summary: "Login service for Steam.",
    version: '1.0.2',
    git: 'https://github.com/kamshak/accounts-steam.git',
    documentation: null
});

Package.on_use(function(api) {
    api.versionsFrom('1.3');

    api.use(['underscore', 'random']);
    api.use('accounts-base', ['client', 'server']);
    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth', ['client', 'server']);
    api.use('kamshak:steam@1.0.1', ['client', 'server']);

    api.add_files('steam_login_button.css', 'client');

    api.add_files("steam.js");
});
