import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ApertureIcon',
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
      "class": "icon icon-tabler icon-tabler-aperture",
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
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "12",
      "cy": "12",
      "r": "9"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3.6",
      "y1": "15",
      "x2": "14.15",
      "y2": "15"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3.6",
      "y1": "15",
      "x2": "14.15",
      "y2": "15",
      "transform": "rotate(72 12 12)"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3.6",
      "y1": "15",
      "x2": "14.15",
      "y2": "15",
      "transform": "rotate(144 12 12)"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3.6",
      "y1": "15",
      "x2": "14.15",
      "y2": "15",
      "transform": "rotate(216 12 12)"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3.6",
      "y1": "15",
      "x2": "14.15",
      "y2": "15",
      "transform": "rotate(288 12 12)"
    }, null), _createTextVNode(" ")]);
  }
};