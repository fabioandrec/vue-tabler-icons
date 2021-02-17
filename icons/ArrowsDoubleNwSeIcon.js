import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ArrowsDoubleNwSeIcon',
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
      "class": "icon icon-tabler icon-tabler-arrows-double-nw-se",
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
      "d": "M14 21l-11 -11"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 14v-4h4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M17 14h4v-4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "10",
      "y1": "3",
      "x2": "21",
      "y2": "14"
    }, null), _createTextVNode(" ")]);
  }
};