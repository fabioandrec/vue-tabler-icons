import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'FingerprintIcon',
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
      "class": "icon icon-tabler icon-tabler-fingerprint",
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
      "d": "M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 11v2a14 14 0 0 0 2.5 8"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M8 15a18 18 0 0 0 1.8 6"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95"
    }), createTextVNode(" ")]);
  }

};