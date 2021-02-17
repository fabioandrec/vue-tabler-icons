import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BuildingBridgeIcon',
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
      "class": "icon icon-tabler icon-tabler-building-bridge",
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
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "6",
      "y1": "5",
      "x2": "6",
      "y2": "19"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "18",
      "y1": "5",
      "x2": "18",
      "y2": "19"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "2",
      "y1": "15",
      "x2": "22",
      "y2": "15"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 8a7.5 7.5 0 0 0 3 -2a6.5 6.5 0 0 0 12 0a7.5 7.5 0 0 0 3 2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "10",
      "x2": "12",
      "y2": "15"
    }, null), _createTextVNode(" ")]);
  }
};