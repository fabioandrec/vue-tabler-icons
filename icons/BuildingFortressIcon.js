import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BuildingFortressIcon',
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
      "class": "icon icon-tabler icon-tabler-building-fortress",
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
      "d": "M7 21h1a1 1 0 0 0 1 -1v-1h0a3 3 0 0 1 6 0m3 2h1a1 1 0 0 0 1 -1v-15l-3 -2l-3 2v6h-4v-6l-3 -2l-3 2v15a1 1 0 0 0 1 1h2m8 -2v1a1 1 0 0 0 1 1h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 7h0v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 10h0v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 13h0v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M17 7h0v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M17 10h0v.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M17 13h0v.01"
    }, null), _createTextVNode(" ")]);
  }
};