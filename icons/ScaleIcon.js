import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ScaleIcon',
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
      "class": "icon icon-tabler icon-tabler-scale",
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
      "x1": "7",
      "y1": "20",
      "x2": "17",
      "y2": "20"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M6 6l6 -1l6 1"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "3",
      "x2": "12",
      "y2": "20"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9 12l-3 -6l-3 6a3 3 0 0 0 6 0"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M21 12l-3 -6l-3 6a3 3 0 0 0 6 0"
    }, null), _createTextVNode(" ")]);
  }
};