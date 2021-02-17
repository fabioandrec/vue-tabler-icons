import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ScissorsIcon',
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
      "class": "icon icon-tabler icon-tabler-scissors",
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
      "cx": "6",
      "cy": "7",
      "r": "3"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "6",
      "cy": "17",
      "r": "3"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "8.6",
      "y1": "8.6",
      "x2": "19",
      "y2": "19"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "8.6",
      "y1": "15.4",
      "x2": "19",
      "y2": "5"
    }, null), _createTextVNode(" ")]);
  }
};