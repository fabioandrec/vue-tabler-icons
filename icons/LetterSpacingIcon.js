import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'LetterSpacingIcon',
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
      "class": "icon icon-tabler icon-tabler-letter-spacing",
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
      "d": "M5 12v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M13 4l3 8l3 -8"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M5 18h14"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M17 20l2 -2l-2 -2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7 16l-2 2l2 2"
    }), createTextVNode(" ")]);
  }

};