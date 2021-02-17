import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'SmokingIcon',
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
      "class": "icon icon-tabler icon-tabler-smoking",
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
      "y": "13",
      "width": "18",
      "height": "4",
      "rx": "1"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "8",
      "y1": "13",
      "x2": "8",
      "y2": "17"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5"
    }, null), _createTextVNode(" ")]);
  }
};