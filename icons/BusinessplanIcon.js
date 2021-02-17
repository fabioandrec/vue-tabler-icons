import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'BusinessplanIcon',
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
      "class": "icon icon-tabler icon-tabler-businessplan",
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
    }), createTextVNode("     "), createVNode("ellipse", {
      "cx": "16",
      "cy": "6",
      "rx": "5",
      "ry": "3"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M5 15v1m0 -8v1"
    }), createTextVNode(" ")]);
  }

};