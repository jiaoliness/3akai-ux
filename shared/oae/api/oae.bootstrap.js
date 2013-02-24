/*!
 * Copyright 2012 Sakai Foundation (SF) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://www.osedu.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

/*!
 * Initalize requireJS by setting paths and specifying load priorities
 */
requirejs.config({
    baseUrl: '/shared/',
    paths: {
        'globalize': 'vendor/js/l10n/globalize',

        // jQuery module is managed by require-jquery variation of require.js
        'jquery': 'empty:',

        // Vendor paths
        'bootstrap': 'vendor/js/bootstrap',
        'jquery.autoSuggest': 'vendor/js/jquery-plugins/jquery.autoSuggest.sakai-edited',
        'jquery.ba-bbq': 'vendor/js/jquery-plugins/jquery.ba-bbq',
        'jquery.ba-hashchange': 'vendor/js/jquery-plugins/jquery.ba-hashchange',
        'jquery.fileSize': 'vendor/js/jquery-plugins/jquery.fileSize',
        'jquery.fileupload': 'vendor/js/jquery-plugins/jquery.fileupload',
        'jquery.form': 'vendor/js/jquery-plugins/jquery.form',
        'jquery.iframe-transport': 'vendor/js/jquery-plugins/jquery.iframe-transport',
        'jquery.properties-parser': 'vendor/js/jquery-plugins/jquery.properties-parser',
        'jquery.serializeObject': 'vendor/js/jquery-plugins/jquery.serializeObject',
        'jquery.timeago': 'vendor/js/jquery-plugins/jquery.timeago',
        'jquery.validate': 'vendor/js/jquery-plugins/jquery.validate',
        'jquery.jeditable': 'vendor/js/jquery-plugins/jquery.jeditable.sakai-edited',
        'jquery-ui': 'vendor/js/jquery-ui.custom',
        'trimpath': 'vendor/js/trimpath',
        'underscore': 'vendor/js/underscore',

        // OAE paths
        'jquery.clip': 'oae/js/jquery-plugins/jquery.clip',
        'jquery.list-options': 'oae/js/jquery-plugins/jquery.list-options',
        'jquery.infinitescroll': 'oae/js/jquery-plugins/jquery.infinitescroll',
        'jquery.dnd-upload': 'oae/js/jquery-plugins/jquery.dnd-upload',
        'oae.api': 'oae/api/oae.api',
        'oae.api.authentication': 'oae/api/oae.api.authentication',
        'oae.api.config': 'oae/api/oae.api.config',
        'oae.api.content': 'oae/api/oae.api.content',
        'oae.api.group': 'oae/api/oae.api.group',
        'oae.api.i18n': 'oae/api/oae.api.i18n',
        'oae.api.l10n': 'oae/api/oae.api.l10n',
        'oae.api.profile': 'oae/api/oae.api.profile',
        'oae.api.user': 'oae/api/oae.api.user',
        'oae.api.util': 'oae/api/oae.api.util',
        'oae.api.widget': 'oae/api/oae.api.widget',
        'oae.core': 'oae/api/oae.core',
        'pluginBuilder': 'oae/api/pluginBuilder'
    },
    priority: ['jquery', 'underscore']
});

/*!
 * Load all of the dependencies and core OAE APIs
 */
require(['oae.core']);
