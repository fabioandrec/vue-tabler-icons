import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'BoxMultiple8Icon',
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
      "class": "icon icon-tabler icon-tabler-box-multiple-8",
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
    }), createTextVNode("   "), createVNode("rect", {
      "x": "7",
      "y": "3",
      "width": "14",
      "height": "14",
      "rx": "2"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "14",
      "cy": "8",
      "r": "2"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "14",
      "cy": "12",
      "r": "2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"
    }), createTextVNode(" ")]);
  }

};