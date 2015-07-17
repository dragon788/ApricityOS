/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

define('ace/theme/carbonight_contrast', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-carbonight-contrast";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: 939b5fc2-72cb-920a-8602-0cab3b563827) */\
.ace-carbonight-contrast .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-carbonight-contrast .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-carbonight-contrast {\
background-color: #000000;\
color: #ffffff;\
}\
.ace-carbonight-contrast .ace_cursor {\
color: #f8f8f0;\
}\
.ace-carbonight-contrast .ace_marker-layer .ace_selection {\
background: #8C8C8C;\
}\
.ace-carbonight-contrast.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #000000;\
border-radius: 2px;\
}\
.ace-carbonight-contrast .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-carbonight-contrast .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #3b3a32;\
}\
.ace-carbonight-contrast .ace_marker-layer .ace_active-line {\
background: #151515;\
}\
.ace-carbonight-contrast .ace_gutter-active-line {\
background-color: #151515;\
}\
.ace-carbonight-contrast .ace_marker-layer .ace_selected-word {\
border: 1px solid #8C8C8C;\
}\
.ace-carbonight-contrast .ace_fold {\
background-color: #ffffff;\
border-color: #ffffff;\
}\
.ace-carbonight-contrast .ace_keyword{color:#eeeeee;}.ace-carbonight-contrast .ace_keyword.ace_other.ace_unit{color:#C4C4C4;}.ace-carbonight-contrast .ace_constant.ace_language{color:#8C8C8C;}.ace-carbonight-contrast .ace_constant.ace_numeric{color:#B0B0B0;}.ace-carbonight-contrast .ace_constant.ace_character{color:#8C8C8C;}.ace-carbonight-contrast .ace_constant.ace_other{color:#8C8C8C;}.ace-carbonight-contrast .ace_support.ace_function{color:#ffffff;}.ace-carbonight-contrast .ace_support.ace_constant{color:#8C8C8C;}.ace-carbonight-contrast .ace_support.ace_constant.ace_property-value{color:#ffffff;}.ace-carbonight-contrast .ace_support.ace_class{font-style:italic;\
color:#8C8C8C;}.ace-carbonight-contrast .ace_support.ace_type{font-style:italic;\
color:#8C8C8C;}.ace-carbonight-contrast .ace_storage{color:#8C8C8C;}.ace-carbonight-contrast .ace_storage.ace_type{color:#C4C4C4;}.ace-carbonight-contrast .ace_invalid{color:#f8f8f0;\
background-color:#00a8c6;}.ace-carbonight-contrast .ace_invalid.ace_deprecated{color:#f8f8f0;\
background-color:#00a8c6;}.ace-carbonight-contrast .ace_string{color:#ffffff;}.ace-carbonight-contrast .ace_comment{color:#423F3D;}.ace-carbonight-contrast .ace_variable{color:#ffffff;}.ace-carbonight-contrast .ace_variable.ace_parameter{font-style:italic;}.ace-carbonight-contrast .ace_entity.ace_other.ace_attribute-name{color:#8C8C8C;}.ace-carbonight-contrast .ace_entity.ace_name.ace_function{color:#ffffff;}.ace-carbonight-contrast .ace_entity.ace_name.ace_tag{color:#C4C4C4;}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});