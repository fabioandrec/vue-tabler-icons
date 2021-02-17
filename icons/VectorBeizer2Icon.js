import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'VectorBeizer2Icon',
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
      "class": "icon icon-tabler icon-tabler-vector-beizer-2",
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
      "y": "3",
      "width": "4",
      "height": "4",
      "rx": "1"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "17",
      "y": "17",
      "width": "4",
      "height": "4",
      "rx": "1"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "5",
      "x2": "14",
      "y2": "5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "10",
      "y1": "19",
      "x2": "17",
      "y2": "19"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "9",
      "cy": "19",
      "r": "1"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "15",
      "cy": "5",
      "r": "1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 5.5a5 6.5 0 0 1 5 6.5a5 6.5 0 0 0 5 6.5"
    }, null), _createTextVNode(" ")]);
  }
};