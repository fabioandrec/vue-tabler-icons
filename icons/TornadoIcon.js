import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'TornadoIcon',
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
      "class": "icon icon-tabler icon-tabler-tornado",
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
      "x1": "21",
      "y1": "4",
      "x2": "3",
      "y2": "4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "13",
      "y1": "16",
      "x2": "7",
      "y2": "16"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "11",
      "y1": "20",
      "x2": "15",
      "y2": "20"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "6",
      "y1": "8",
      "x2": "20",
      "y2": "8"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4",
      "y1": "12",
      "x2": "16",
      "y2": "12"
    }, null), _createTextVNode(" ")]);
  }
};