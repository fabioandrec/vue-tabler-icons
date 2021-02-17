import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'HeadsetIcon',
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
      "class": "icon icon-tabler icon-tabler-headset",
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
      "x": "4",
      "y": "13",
      "rx": "2",
      "width": "4",
      "height": "6"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "16",
      "y": "13",
      "rx": "2",
      "width": "4",
      "height": "6"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 15v-3a8 8 0 0 1 16 0v3"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M18 19a6 3 0 0 1 -6 3"
    }, null), _createTextVNode(" ")]);
  }
};