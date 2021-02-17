import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ClearFormattingIcon',
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
      "class": "icon icon-tabler icon-tabler-clear-formatting",
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
      "d": "M17 15l4 4m0 -4l-4 4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 6v-1h11v1"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "19",
      "x2": "11",
      "y2": "19"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "13",
      "y1": "5",
      "x2": "9",
      "y2": "19"
    }, null), _createTextVNode(" ")]);
  }
};