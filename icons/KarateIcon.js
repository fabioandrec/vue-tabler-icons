import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'KarateIcon',
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
      "class": "icon icon-tabler icon-tabler-karate",
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
      "cx": "18",
      "cy": "4",
      "r": "1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 9l4.5 1l3 2.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M13 21v-8l3 -5.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 4.5l4 2l4 1l4 3.5l-2 3.5"
    }, null), _createTextVNode(" ")]);
  }
};