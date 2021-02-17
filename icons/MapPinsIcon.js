import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'MapPinsIcon',
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
      "class": "icon icon-tabler icon-tabler-map-pins",
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
      "d": "M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "8",
      "y1": "7",
      "x2": "8",
      "y2": "7.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "16",
      "y1": "15",
      "x2": "16",
      "y2": "15.01"
    }, null), _createTextVNode(" ")]);
  }
};