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

goog.provide('org_apache_flex_maps_google_Place');

goog.require('org_apache_flex_maps_google_Geometry');


// IMPORTANT:
// In order to use this class, the Google MAP API must be downloaded
// from the <head> section of the main HTML file.



/**
 * @constructor
 */
org_apache_flex_maps_google_Place = function() {
  this.geometry = new org_apache_flex_maps_google_Geometry();
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org_apache_flex_maps_google_Place.prototype.
FLEXJS_CLASS_INFO =
{ names: [{ name: 'Place',
           qName: 'org_apache_flex_maps_google_Place' }],
    interfaces: [] };


/**
 * @type {Object} The current location
 */
org_apache_flex_maps_google_Place.prototype.geometry = null;


/**
 * @type {String} The icon representing the place.
 */
org_apache_flex_maps_google_Place.prototype.icon = null;


/**
 * @type {String} A unique identifier for the place.
 */
org_apache_flex_maps_google_Place.prototype.id = null;


/**
 * @type {String} The name of the place.
 */
org_apache_flex_maps_google_Place.prototype.name = null;


/**
 * @type {String} A reference identifier.
 */
org_apache_flex_maps_google_Place.prototype.reference = null;


/**
 * @type {String} A description of the area of the place.
 */
org_apache_flex_maps_google_Place.prototype.vicinity = null;


/**
 * @override
 * @return {string} A description of the area of the place.
 */
org_apache_flex_maps_google_Place.prototype.toString = function PlaceToString() {
  var results = '';
  if (this.name) results = this.name;
  if (this.vicinity) results += ' ' + this.vicinity;
  return results;
};

