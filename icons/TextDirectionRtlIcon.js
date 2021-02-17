import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'TextDirectionRtlIcon',
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
      "class": "icon icon-tabler icon-tabler-text-direction-rtl",
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
      "d": "M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M14 15v-11"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10 15v-11"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5 19h14"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 21l-2 -2l2 -2"
    }, null), _createTextVNode(" ")]);
  }
};