import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'ConfettiIcon',
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
      "class": "icon icon-tabler icon-tabler-confetti",
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
      "d": "M4 5h2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M5 4v2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M11.5 4l-.5 2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M18 5h2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M19 4v2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M15 9l-1 1"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M18 13l2 -.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M18 19h2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M19 18v2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M14 16.518l-6.518 -6.518l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329l9.579 -4.39z"
    }), createTextVNode(" ")]);
  }

};