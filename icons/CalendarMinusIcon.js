import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'CalendarMinusIcon',
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
      "class": "icon icon-tabler icon-tabler-calendar-minus",
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
      "x": "4",
      "y": "5",
      "width": "16",
      "height": "16",
      "rx": "2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "16",
      "y1": "3",
      "x2": "16",
      "y2": "7"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "8",
      "y1": "3",
      "x2": "8",
      "y2": "7"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4",
      "y1": "11",
      "x2": "20",
      "y2": "11"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "10",
      "y1": "16",
      "x2": "14",
      "y2": "16"
    }, null), _createTextVNode(" ")]);
  }
};