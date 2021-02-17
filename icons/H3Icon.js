import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'H3Icon',
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
      "class": "icon icon-tabler icon-tabler-h-3",
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
      "d": "M19 14a2 2 0 1 0 -2 -2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M17 16a2 2 0 1 0 2 -2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M4 6v12"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 6v12"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M11 18h2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M3 18h2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M4 12h8"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M3 6h2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M11 6h2"
    }), createTextVNode(" ")]);
  }

};