import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BrandBehanceIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-behance",
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
      "d": "M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "12",
      "x2": "7.5",
      "y2": "12"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "16",
      "y1": "6",
      "x2": "19",
      "y2": "6"
    }, null), _createTextVNode(" ")]);
  }
};