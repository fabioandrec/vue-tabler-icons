import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'TractorIcon',
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
      "class": "icon icon-tabler icon-tabler-tractor",
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
      "cx": "7",
      "cy": "15",
      "r": "4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "15",
      "x2": "7",
      "y2": "15.01"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "19",
      "cy": "17",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "10.5",
      "y1": "17",
      "x2": "17",
      "y2": "17"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M18 5h-1a1 1 0 0 0 -1 1v4"
    }, null), _createTextVNode(" ")]);
  }
};