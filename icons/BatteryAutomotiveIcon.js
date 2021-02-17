import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BatteryAutomotiveIcon',
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
      "class": "icon icon-tabler icon-tabler-battery-automotive",
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
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "3",
      "y": "6",
      "width": "18",
      "height": "14",
      "rx": "2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M6 6v-2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "19",
      "y1": "4",
      "x2": "19",
      "y2": "6"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "6.5",
      "y1": "13",
      "x2": "9.5",
      "y2": "13"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "14.5",
      "y1": "13",
      "x2": "17.5",
      "y2": "13"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "16",
      "y1": "11.5",
      "x2": "16",
      "y2": "14.5"
    }, null), _createTextVNode(" ")]);
  }
};