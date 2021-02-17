import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'PlayCardIcon',
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
      "class": "icon icon-tabler icon-tabler-play-card",
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
      "transform": "rotate(90 12 12)",
      "x": "3",
      "y": "5",
      "width": "18",
      "height": "14",
      "rx": "2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "8",
      "y1": "6",
      "x2": "8.01",
      "y2": "6"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "16",
      "y1": "18",
      "x2": "16.01",
      "y2": "18"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 16l-3 -4l3 -4l3 4z"
    }, null), _createTextVNode(" ")]);
  }
};