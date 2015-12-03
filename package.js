Package.describe({
    name: "kamshak:accounts-steam",
    summary: "Login service for Steam.",
    version: '1.0.1',
    git: 'https://github.com/kamshak/accounts-steam.git',
    documentation: null
});

Package.on_use(function(api) {
    api.versionsFrom('1.0');

    api.use(['underscore@1.0.1', 'random@1.0.1']);
    api.use('accounts-base@1.1.2', ['client', 'server']);
    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth@1.1.2', ['client', 'server']);
    api.use('kamshak:steam@1.0.1', ['client', 'server']);

    api.add_files('steam_login_button.css', 'client');

    api.add_files("steam.js");
});
