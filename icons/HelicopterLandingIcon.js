import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'HelicopterLandingIcon',
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
      "class": "icon icon-tabler icon-tabler-helicopter-landing",
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
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "4",
      "y": "4",
      "width": "16",
      "height": "16",
      "rx": "2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9",
      "y1": "8",
      "x2": "9",
      "y2": "16"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9",
      "y1": "12",
      "x2": "15",
      "y2": "12"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "15",
      "y1": "8",
      "x2": "15",
      "y2": "16"
    }, null), _createTextVNode(" ")]);
  }
};