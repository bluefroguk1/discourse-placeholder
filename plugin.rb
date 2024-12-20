# name: discourse-composer-template-placeholder
# about: Adds template placeholders to the composer based on category templates
# version: 1.0.0
# authors: Steven
# url: https://github.com/bluefroguk1/discourse-placeholder
# required_version: 2.7.0

enabled_site_setting :composer_template_placeholder_enabled

register_asset 'stylesheets/common/composer-template-placeholder.scss'
register_asset 'javascripts/discourse/api-initializers/composer-placeholder.js'

register_locale 'config/locales/client.en.yml'
register_locale 'config/locales/server.en.yml'

after_initialize do
  # Add any server-side code here if needed
end 
