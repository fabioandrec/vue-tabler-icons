import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ForkliftIcon',
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
      "class": "icon icon-tabler icon-tabler-forklift",
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
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "5",
      "cy": "17",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "14",
      "cy": "17",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7",
      "y1": "17",
      "x2": "12",
      "y2": "17"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 17v-6h13v6"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5 11v-4h4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9 11v-6h4l3 6"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M22 15h-3v-10"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "16",
      "y1": "13",
      "x2": "19",
      "y2": "13"
    }, null), _createTextVNode(" ")]);
  }
};