import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'EyeglassIcon',
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
      "class": "icon icon-tabler icon-tabler-eyeglass",
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
      "d": "M8 4h-2l-3 10"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16 4h2l3 10"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "10",
      "y1": "16",
      "x2": "14",
      "y2": "16"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"
    }, null), _createTextVNode(" ")]);
  }
};