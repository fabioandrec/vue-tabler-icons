import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'Ruler2Icon',
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
      "class": "icon icon-tabler icon-tabler-ruler-2",
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
      "d": "M17 3l4 4l-14 14l-4 -4z"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M16 7l-1.5 -1.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M13 10l-1.5 -1.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M10 13l-1.5 -1.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7 16l-1.5 -1.5"
    }), createTextVNode(" ")]);
  }

};