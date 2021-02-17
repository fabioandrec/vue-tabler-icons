import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BandageIcon',
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
      "class": "icon icon-tabler icon-tabler-bandage",
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
      "x1": "14",
      "y1": "12",
      "x2": "14",
      "y2": "12.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "10",
      "y1": "12",
      "x2": "10",
      "y2": "12.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "10",
      "x2": "12",
      "y2": "10.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "14",
      "x2": "12",
      "y2": "14.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7"
    }, null), _createTextVNode(" ")]);
  }
};