import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'CurrencyKroneDanishIcon',
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
      "class": "icon icon-tabler icon-tabler-currency-krone-danish",
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
      "d": "M5 6v12"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5 12c3.5 0 6 -3 6 -6"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5 12c3.5 0 6 3 6 6"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M15 10v8"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M19 10a4 4 0 0 0 -4 4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 18.01v-.01"
    }, null), _createTextVNode(" ")]);
  }
};