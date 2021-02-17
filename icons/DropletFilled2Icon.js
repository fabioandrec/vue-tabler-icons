import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'DropletFilled2Icon',
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
      "class": "icon icon-tabler icon-tabler-droplet-filled-2",
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
      "d": "M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M6 14h12"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7.305 17.695l3.695 -3.695"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10.26 19.74l5.74 -5.74l-5.74 5.74z"
    }, null), _createTextVNode(" ")]);
  }
};