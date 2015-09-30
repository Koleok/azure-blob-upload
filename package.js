Package.describe({
    name: 'koleok:azure-blob-upload',
    summary: "Azure blob upload",
    version: "1.0.0",
    git: "https://github.com/Koleok/azure-blob-upload.git"
});

Npm.depends({
    'azure-storage': '0.3.3'
});


Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.3.1');
    api.use(['ejson', 'underscore'], ['client', 'server']);
    api.addFiles('azureupload.js');
    api.export(['AzureFile'], ['client', 'server']);
});