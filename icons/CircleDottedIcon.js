import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'CircleDottedIcon',
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
      "class": "icon icon-tabler icon-tabler-circle-dotted",
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
      "x1": "7.5",
      "y1": "4.21",
      "x2": "7.5",
      "y2": "4.22"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "4.21",
      "y1": "7.5",
      "x2": "4.21",
      "y2": "7.51"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "3",
      "y1": "12",
      "x2": "3",
      "y2": "12.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "4.21",
      "y1": "16.5",
      "x2": "4.21",
      "y2": "16.51"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "7.5",
      "y1": "19.79",
      "x2": "7.5",
      "y2": "19.8"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "21",
      "x2": "12",
      "y2": "21.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "16.5",
      "y1": "19.79",
      "x2": "16.5",
      "y2": "19.8"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "19.79",
      "y1": "16.5",
      "x2": "19.79",
      "y2": "16.51"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "21",
      "y1": "12",
      "x2": "21",
      "y2": "12.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "19.79",
      "y1": "7.5",
      "x2": "19.79",
      "y2": "7.51"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "16.5",
      "y1": "4.21",
      "x2": "16.5",
      "y2": "4.22"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "3",
      "x2": "12",
      "y2": "3.01"
    }), createTextVNode(" ")]);
  }

};