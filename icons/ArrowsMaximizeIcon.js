import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ArrowsMaximizeIcon',
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
      "class": "icon icon-tabler icon-tabler-arrows-maximize",
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
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "16 4 20 4 20 8"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "14",
      "y1": "10",
      "x2": "20",
      "y2": "4"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "8 20 4 20 4 16"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4",
      "y1": "20",
      "x2": "10",
      "y2": "14"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "16 20 20 20 20 16"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "14",
      "y1": "14",
      "x2": "20",
      "y2": "20"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "8 4 4 4 4 8"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4",
      "y1": "4",
      "x2": "10",
      "y2": "10"
    }, null), _createTextVNode(" ")]);
  }
};