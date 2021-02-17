import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'FlagIcon',
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
      "class": "icon icon-tabler icon-tabler-flag",
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
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "5",
      "y1": "5",
      "x2": "5",
      "y2": "21"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "19",
      "y1": "5",
      "x2": "19",
      "y2": "14"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0"
    }, null), _createTextVNode(" ")]);
  }
};