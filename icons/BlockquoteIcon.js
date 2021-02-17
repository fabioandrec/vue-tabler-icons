import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BlockquoteIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,
  setup: function setup(props, ctx) {
    var h = this.$createElement;
    var size = parseInt(props.size) + 'px';
    var attrs = ctx.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    return _createVNode("svg", _mergeProps({
      "xmlns": "http://www.w3.org/2000/svg",
      "class": "icon icon-tabler icon-tabler-blockquote",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "stroke-width": "2",
      "stroke": "currentColor",
      "fill": "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, attrs), [_createTextVNode("   "), _createVNode("path", {
      "stroke": "none",
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M6 15h15"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M21 19h-15"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M15 11h6"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M21 7h-6"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"
    }, null), _createTextVNode(" ")]);
  }
};