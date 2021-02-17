import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'TestPipeIcon',
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
      "class": "icon icon-tabler icon-tabler-test-pipe",
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
      "d": "M16 4l3 3l-12.35 12.35a1.5 1.5 0 0 1 -3 -3l12.35 -12.35"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "10",
      "y1": "10",
      "x2": "16",
      "y2": "10"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6"
    }, null), _createTextVNode(" ")]);
  }
};