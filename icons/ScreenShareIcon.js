import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ScreenShareIcon',
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
      "class": "icon icon-tabler icon-tabler-screen-share",
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
      "d": "M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "20",
      "x2": "17",
      "y2": "20"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9",
      "y1": "16",
      "x2": "9",
      "y2": "20"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "15",
      "y1": "16",
      "x2": "15",
      "y2": "20"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M17 4h4v4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16 9l5 -5"
    }, null), _createTextVNode(" ")]);
  }
};