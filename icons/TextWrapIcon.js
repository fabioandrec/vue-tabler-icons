import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'TextWrapIcon',
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
      "class": "icon icon-tabler icon-tabler-text-wrap",
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
      "x1": "4",
      "y1": "6",
      "x2": "20",
      "y2": "6"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4",
      "y1": "18",
      "x2": "9",
      "y2": "18"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 12h13a3 3 0 0 1 0 6h-4l2 -2m0 4l-2 -2"
    }, null), _createTextVNode(" ")]);
  }
};