import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'ChartInfographicIcon',
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
      "class": "icon icon-tabler icon-tabler-chart-infographic",
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
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "7",
      "cy": "7",
      "r": "4"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7 3v4h4"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "9",
      "y1": "17",
      "x2": "9",
      "y2": "21"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "17",
      "y1": "14",
      "x2": "17",
      "y2": "21"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "13",
      "y1": "13",
      "x2": "13",
      "y2": "21"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "21",
      "y1": "12",
      "x2": "21",
      "y2": "21"
    }), createTextVNode(" ")]);
  }

};