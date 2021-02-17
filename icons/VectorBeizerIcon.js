import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'VectorBeizerIcon',
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
      "class": "icon icon-tabler icon-tabler-vector-beizer",
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
      "x": "3",
      "y": "14",
      "width": "4",
      "height": "4",
      "rx": "1"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "17",
      "y": "14",
      "width": "4",
      "height": "4",
      "rx": "1"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "10",
      "y": "6",
      "width": "4",
      "height": "4",
      "rx": "1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10 8.5a6 6 0 0 0 -5 5.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M14 8.5a6 6 0 0 1 5 5.5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "10",
      "y1": "8",
      "x2": "4",
      "y2": "8"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "20",
      "y1": "8",
      "x2": "14",
      "y2": "8"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "3",
      "cy": "8",
      "r": "1"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "21",
      "cy": "8",
      "r": "1"
    }, null), _createTextVNode(" ")]);
  }
};