import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ContainerIcon',
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
      "class": "icon icon-tabler icon-tabler-container",
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
      "d": "M20 4v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 20v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 16v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 12v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 8v.01"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "8",
      "y": "4",
      "width": "8",
      "height": "16",
      "rx": "1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 4v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 20v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 16v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 12v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 8v.01"
    }, null), _createTextVNode(" ")]);
  }
};