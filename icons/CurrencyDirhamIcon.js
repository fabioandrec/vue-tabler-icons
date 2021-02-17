import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'CurrencyDirhamIcon',
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
      "class": "icon icon-tabler icon-tabler-currency-dirham",
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
      "d": "M8.5 19h-3.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8.599 16.479a1.5 1.5 0 1 0 -1.099 2.521"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 4v9"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M15 13h1.888a1.5 1.5 0 0 0 1.296 -2.256l-2.184 -3.744"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M11 13.01v-.01"
    }, null), _createTextVNode(" ")]);
  }
};