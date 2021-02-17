import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BrandAndroidIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-android",
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
      "x1": "4",
      "y1": "10",
      "x2": "4",
      "y2": "16"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "20",
      "y1": "10",
      "x2": "20",
      "y2": "16"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "8",
      "y1": "3",
      "x2": "9",
      "y2": "5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "16",
      "y1": "3",
      "x2": "15",
      "y2": "5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9",
      "y1": "18",
      "x2": "9",
      "y2": "21"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "15",
      "y1": "18",
      "x2": "15",
      "y2": "21"
    }, null), _createTextVNode(" ")]);
  }
};