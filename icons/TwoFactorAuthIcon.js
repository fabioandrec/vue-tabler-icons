import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'TwoFactorAuthIcon',
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
      "class": "icon icon-tabler icon-tabler-2fa",
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
      "d": "M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M10 16v-8h4"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "10",
      "y1": "12",
      "x2": "13",
      "y2": "12"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M17 16v-6a2 2 0 0 1 4 0v6"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "17",
      "y1": "13",
      "x2": "21",
      "y2": "13"
    }), createTextVNode(" ")]);
  }

};