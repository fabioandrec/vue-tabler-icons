import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'DimensionsIcon',
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
      "class": "icon icon-tabler icon-tabler-dimensions",
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
      "d": "M3 5h11"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 7l2 -2l-2 -2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5 3l-2 2l2 2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M19 10v11"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M17 19l2 2l2 -2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M21 12l-2 -2l-2 2"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "3",
      "y": "10",
      "width": "11",
      "height": "11",
      "rx": "2"
    }, null), _createTextVNode(" ")]);
  }
};