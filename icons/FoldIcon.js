import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'FoldIcon',
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
      "class": "icon icon-tabler icon-tabler-fold",
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
      "d": "M12 3v6l3 -3m-6 0l3 3"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 21v-6l3 3m-6 0l3 -3"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4",
      "y1": "12",
      "x2": "5",
      "y2": "12"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "9",
      "y1": "12",
      "x2": "10",
      "y2": "12"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "14",
      "y1": "12",
      "x2": "15",
      "y2": "12"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "19",
      "y1": "12",
      "x2": "20",
      "y2": "12"
    }, null), _createTextVNode(" ")]);
  }
};