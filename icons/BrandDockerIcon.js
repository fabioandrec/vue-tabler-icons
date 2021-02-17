import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'BrandDockerIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-docker",
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
      "d": "M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.102 1.568 -.92 2.4c.028 .238 -.32 1.002 -.557 1h-14c0 5.208 3.164 7 6.196 7c4.124 .022 7.828 -1.376 9.854 -5c1.146 -.101 2.296 -1.505 2.95 -2.46z"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M5 10h3v3h-3z"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M8 10h3v3h-3z"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M11 10h3v3h-3z"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M8 7h3v3h-3z"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M11 7h3v3h-3z"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M11 4h3v3h-3z"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M4.571 18.001c1.5 0 2.047 -.074 2.958 -.78"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "10",
      "y1": "16",
      "x2": "10",
      "y2": "16.01"
    }), createTextVNode(" ")]);
  }

};