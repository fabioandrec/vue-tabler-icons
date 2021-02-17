import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'PizzaIcon',
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
      "class": "icon icon-tabler icon-tabler-pizza",
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
      "d": "M12 21.5c-3.04 0 -5.952 -.714 -8.5 -1.983l8.5 -16.517l8.5 16.517a19.09 19.09 0 0 1 -8.5 1.983z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5.2 15.772a14.939 14.939 0 0 0 6.995 1.728a14.944 14.944 0 0 0 6.638 -1.545"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "13",
      "y1": "11.01",
      "x2": "13",
      "y2": "11"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "11",
      "y1": "14",
      "x2": "11",
      "y2": "13.99"
    }, null), _createTextVNode(" ")]);
  }
};