Package.describe({
  summary: "alpaca support for bootstrap"
});

Package.on_use(function (api) {
  var both = ['client', 'server'];
  api.add_files('alpaca-bootstrap.css', 'client');
});
