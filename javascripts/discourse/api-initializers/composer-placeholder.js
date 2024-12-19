import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
    name: 'composer-placeholder',
  
    initialize() {
      withPluginApi('1.0', api => {
        api.modifyClass('component:composer-fields', {
          pluginId: 'composer-template-placeholder',
          
          didInsertElement() {
            this._super(...arguments);
            this.setPlaceholder();
          },
          
          didUpdateAttrs() {
            this._super(...arguments);
            this.setPlaceholder();
          },
          
          setPlaceholder() {
              if(!this.siteSettings.composer_template_placeholder_enabled) {
                return;
              }
              const category = this.category;
              if (category?.topic_template) {
                  this.set('composerPlaceholder', category.topic_template);
                  this.set('textareaPlaceholder', category.topic_template);
              } else {
                  this.set('composerPlaceholder', null);
                  this.set('textareaPlaceholder', null);
              }
          }
        });
      });
    }
};