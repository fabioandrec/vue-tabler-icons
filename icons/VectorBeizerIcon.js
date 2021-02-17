import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'VectorBeizerIcon',
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
      "class": "icon icon-tabler icon-tabler-vector-beizer",
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
    }), createTextVNode("   "), createVNode("rect", {
      "x": "3",
      "y": "14",
      "width": "4",
      "height": "4",
      "rx": "1"
    }), createTextVNode("   "), createVNode("rect", {
      "x": "17",
      "y": "14",
      "width": "4",
      "height": "4",
      "rx": "1"
    }), createTextVNode("   "), createVNode("rect", {
      "x": "10",
      "y": "6",
      "width": "4",
      "height": "4",
      "rx": "1"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M10 8.5a6 6 0 0 0 -5 5.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M14 8.5a6 6 0 0 1 5 5.5"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "10",
      "y1": "8",
      "x2": "4",
      "y2": "8"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "20",
      "y1": "8",
      "x2": "14",
      "y2": "8"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "3",
      "cy": "8",
      "r": "1"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "21",
      "cy": "8",
      "r": "1"
    }), createTextVNode(" ")]);
  }

};