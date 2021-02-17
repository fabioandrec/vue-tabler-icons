import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'RelationOneToOneIcon',
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
      "class": "icon icon-tabler icon-tabler-relation-one-to-one",
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
      "y": "5",
      "width": "18",
      "height": "14",
      "rx": "2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 10h1v4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M15 10h1v4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "10.5",
      "x2": "12",
      "y2": "10.51"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "13.5",
      "x2": "12",
      "y2": "13.51"
    }, null), _createTextVNode(" ")]);
  }
};