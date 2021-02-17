import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'EyeglassIcon',
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
      "class": "icon icon-tabler icon-tabler-eyeglass",
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
      "d": "M8 4h-2l-3 10"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M16 4h2l3 10"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "10",
      "y1": "16",
      "x2": "14",
      "y2": "16"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"
    }), createTextVNode(" ")]);
  }

};