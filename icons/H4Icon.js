import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'H4Icon',
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
      "class": "icon icon-tabler icon-tabler-h-4",
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
      "d": "M20 18v-8l-4 6h5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 6v12"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 6v12"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M11 18h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 18h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 12h8"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 6h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M11 6h2"
    }, null), _createTextVNode(" ")]);
  }
};