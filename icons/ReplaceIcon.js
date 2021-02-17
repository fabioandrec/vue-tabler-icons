import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ReplaceIcon',
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
      "class": "icon icon-tabler icon-tabler-replace",
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
      "width": "6",
      "height": "6",
      "rx": "1"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "15",
      "y": "15",
      "width": "6",
      "height": "6",
      "rx": "1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3"
    }, null), _createTextVNode(" ")]);
  }
};