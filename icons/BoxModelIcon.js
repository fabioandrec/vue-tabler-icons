import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'BoxModelIcon',
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
      "class": "icon icon-tabler icon-tabler-box-model",
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
      "d": "M8 8h8v8h-8z"
    }), createTextVNode("   "), createVNode("rect", {
      "x": "4",
      "y": "4",
      "width": "16",
      "height": "16",
      "rx": "2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M16 16l3.3 3.3"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M16 8l3.3 -3.3"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M8 8l-3.3 -3.3"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M8 16l-3.3 3.3"
    }), createTextVNode(" ")]);
  }

};