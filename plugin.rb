# name: discourse-composer-template-placeholder
# about: Adds template placeholders to the composer based on category templates
# version: 1.0.0
# authors: Steven
# url: https://github.com/yourusername/discourse-composer-template-placeholder
# required_version: 2.7.0
# transpile_js: true

enabled_site_setting :composer_template_placeholder_enabled

register_svg_icon "far-clipboard" if respond_to?(:register_svg_icon)

register_asset 'stylesheets/common/composer-template-placeholder.scss'
register_asset 'javascripts/discourse/api-initializers/composer-placeholder.js'

after_initialize do
  # Add any server-side code here if needed
end 