/**
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

goog.provide('org_apache_flex_html_supportClasses_NonVirtualDataGroup');

goog.require('org_apache_flex_core_UIBase');
goog.require('org_apache_flex_html_supportClasses_DataItemRenderer');
goog.require('org_apache_flex_utils_Language');



/**
 * @constructor
 * @extends {org_apache_flex_core_UIBase}
 */
org_apache_flex_html_supportClasses_NonVirtualDataGroup =
    function() {
  this.renderers = [];
  org_apache_flex_html_supportClasses_NonVirtualDataGroup.base(this, 'constructor');
};
goog.inherits(
    org_apache_flex_html_supportClasses_NonVirtualDataGroup,
    org_apache_flex_core_UIBase);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org_apache_flex_html_supportClasses_NonVirtualDataGroup.prototype.FLEXJS_CLASS_INFO =
    { names: [{ name: 'NonVirtualDataGroup',
                qName: 'org_apache_flex_html_supportClasses_NonVirtualDataGroup' }] };


/**
 * @expose
 * @param {Object} value The strand.
 */
org_apache_flex_html_supportClasses_NonVirtualDataGroup.
    prototype.set_strand = function(value) {
  this.strand_ = value;
};


/**
 * @override
 */
org_apache_flex_html_supportClasses_NonVirtualDataGroup.
    prototype.createElement = function() {
  this.element = document.createElement('div');
  this.element.style.overflow = 'auto';
  this.element.style.display = 'inline-block';
  this.element.style.position = 'inherit';
  this.element.flexjs_wrapper = this;
  this.set_className('NonVirtualDataGroup');

  this.positioner = this.element;

  return this.element;
};


/**
 * @override
 * @param {Object} value The child element being added.
 */
org_apache_flex_html_supportClasses_NonVirtualDataGroup.
    prototype.addElement = function(value) {
  org_apache_flex_html_supportClasses_NonVirtualDataGroup.base(this, 'addElement', value);

  var itemRenderer = org_apache_flex_utils_Language.as(value,
                           org_apache_flex_html_supportClasses_DataItemRenderer);
  itemRenderer.set_index(this.renderers.length);
  itemRenderer.set_itemRendererParent(this);
  this.renderers.push(value);
};


/**
 * @expose
 */
org_apache_flex_html_supportClasses_NonVirtualDataGroup.
    prototype.removeAllElements = function() {

  while (this.element.hasChildNodes()) {
    this.element.removeChild(this.element.lastChild);
  }
};


/**
 * @expose
 * @return {number} The number of child nodes in the group.
 */
org_apache_flex_html_supportClasses_NonVirtualDataGroup.
    prototype.get_numElements = function() {

  var n = this.element.childNodes.length;
  return n;
};


/**
 * @expose
 * @param {number} index The index of the desired element.
 * @return {Object} The element at the given index.
 */
org_apache_flex_html_supportClasses_NonVirtualDataGroup.
    prototype.getElementAt = function(index) {

  var e = this.element.childNodes[index];
  return e.flexjs_wrapper;
};


/**
 * @expose
 * @param {Object} index The index for the itemRenderer.
 * @return {Object} The itemRenderer that matches the index.
 */
org_apache_flex_html_supportClasses_NonVirtualDataGroup.
    prototype.getItemRendererForIndex = function(index) {
  return this.renderers[index];
};
