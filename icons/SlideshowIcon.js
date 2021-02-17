import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'SlideshowIcon',
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
      "class": "icon icon-tabler icon-tabler-slideshow",
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
    }), createTextVNode("   "), createVNode("line", {
      "x1": "15",
      "y1": "6",
      "x2": "15.01",
      "y2": "6"
    }), createTextVNode("   "), createVNode("rect", {
      "x": "3",
      "y": "3",
      "width": "18",
      "height": "14",
      "rx": "3"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M3 13l4 -4a3 5 0 0 1 3 0l4 4"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M13 12l2 -2a3 5 0 0 1 3 0l3 3"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "8",
      "y1": "21",
      "x2": "8.01",
      "y2": "21"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "21",
      "x2": "12.01",
      "y2": "21"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "16",
      "y1": "21",
      "x2": "16.01",
      "y2": "21"
    }), createTextVNode(" ")]);
  }

};