import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'ChartDotsIcon',
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
      "class": "icon icon-tabler icon-tabler-chart-dots",
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
      "d": "M3 3v18h18"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "9",
      "cy": "9",
      "r": "2"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "19",
      "cy": "7",
      "r": "2"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "14",
      "cy": "15",
      "r": "2"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "10.16",
      "y1": "10.62",
      "x2": "12.5",
      "y2": "13.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M15.088 13.328l2.837 -4.586"
    }), createTextVNode(" ")]);
  }

};