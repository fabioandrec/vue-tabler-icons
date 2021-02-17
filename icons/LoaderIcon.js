import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'LoaderIcon',
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
      "class": "icon icon-tabler icon-tabler-loader",
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
      "x1": "12",
      "y1": "6",
      "x2": "12",
      "y2": "3"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "16.25",
      "y1": "7.75",
      "x2": "18.4",
      "y2": "5.6"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "18",
      "y1": "12",
      "x2": "21",
      "y2": "12"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "16.25",
      "y1": "16.25",
      "x2": "18.4",
      "y2": "18.4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "18",
      "x2": "12",
      "y2": "21"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7.75",
      "y1": "16.25",
      "x2": "5.6",
      "y2": "18.4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "6",
      "y1": "12",
      "x2": "3",
      "y2": "12"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "7.75",
      "y1": "7.75",
      "x2": "5.6",
      "y2": "5.6"
    }, null), _createTextVNode(" ")]);
  }
};