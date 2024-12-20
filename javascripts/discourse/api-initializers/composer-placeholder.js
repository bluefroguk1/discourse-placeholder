import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
    name: 'composer-template-placeholder',
  
    initialize() {
      withPluginApi('1.0', api => {
        api.modifyClass('controller:composer', {
          pluginId: 'composer-template-placeholder',
          
          setupPlaceholder() {
            this.setPlaceholder();
          },
          
          init() {
            this._super(...arguments);
            this.setupPlaceholder();
            this.addObserver('model.category', this, this.setPlaceholder);
          },
          
          setPlaceholder() {
              if(!this.siteSettings.composer_template_placeholder_enabled) {
                return;
              }
              const category = this.model?.category;
              if (category?.topic_template) {
                  this.model.set('replyPlaceholder', category.topic_template || null);
              } else {
                  this.model.set('replyPlaceholder', null);
              }
          }
        });
      });
    }
};
