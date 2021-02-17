import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'Rotate2Icon',
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
      "class": "icon icon-tabler icon-tabler-rotate-2",
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
      "d": "M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "18.37",
      "y1": "7.16",
      "x2": "18.37",
      "y2": "7.17"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "13",
      "y1": "19.94",
      "x2": "13",
      "y2": "19.95"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "16.84",
      "y1": "18.37",
      "x2": "16.84",
      "y2": "18.38"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "19.37",
      "y1": "15.1",
      "x2": "19.37",
      "y2": "15.11"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "19.94",
      "y1": "11",
      "x2": "19.94",
      "y2": "11.01"
    }), createTextVNode(" ")]);
  }

};