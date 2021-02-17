import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'LicenseIcon',
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
      "class": "icon icon-tabler icon-tabler-license",
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
      "d": "M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9",
      "y1": "7",
      "x2": "13",
      "y2": "7"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9",
      "y1": "11",
      "x2": "13",
      "y2": "11"
    }, null), _createTextVNode(" ")]);
  }
};