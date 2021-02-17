import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'MinimizeIcon',
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
      "class": "icon icon-tabler icon-tabler-minimize",
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
      "d": "M15 19v-2a2 2 0 0 1 2 -2h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M15 5v2a2 2 0 0 0 2 2h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5 15h2a2 2 0 0 1 2 2v2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5 9h2a2 2 0 0 0 2 -2v-2"
    }, null), _createTextVNode(" ")]);
  }
};