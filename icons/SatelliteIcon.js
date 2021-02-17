import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'SatelliteIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  },

  setup(props, ctx) {
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const attrs = { ...ctx.attrs
    };
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    return () => createVNode("svg", mergeProps({
      "xmlns": "http://www.w3.org/2000/svg",
      "class": "icon icon-tabler icon-tabler-satellite",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "stroke-width": "2",
      "stroke": "currentColor",
      "fill": "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, { ...attrs
    }), [createTextVNode("   "), createVNode("path", {
      "stroke": "none",
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M3.707 6.293l2.586 -2.586a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414z"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M6 10l-3 3l3 3l3 -3"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M10 6l3 -3l3 3l-3 3"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "12",
      "x2": "13.5",
      "y2": "13.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M14.5 17a2.5 2.5 0 0 0 2.5 -2.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M15 21a6 6 0 0 0 6 -6"
    }), createTextVNode(" ")]);
  }

};