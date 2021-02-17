import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'AffiliateIcon',
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
      "class": "icon icon-tabler icon-tabler-affiliate",
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
      "d": "M5.5 5.5l1.706 5.685m5.607 5.609l5.687 1.706"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M11.683 12.317l6.817 -6.817"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "5.5",
      "cy": "5.5",
      "r": "1.5"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "18.5",
      "cy": "5.5",
      "r": "1.5"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "18.5",
      "cy": "18.5",
      "r": "1.5"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "8.5",
      "cy": "15.5",
      "r": "4.5"
    }, null), _createTextVNode(" ")]);
  }
};