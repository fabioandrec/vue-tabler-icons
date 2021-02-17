import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'SeedingIcon',
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
      "class": "icon icon-tabler icon-tabler-seeding",
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
      "d": "M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "20",
      "x2": "12",
      "y2": "10"
    }, null), _createTextVNode(" ")]);
  }
};