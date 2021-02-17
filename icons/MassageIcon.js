import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'MassageIcon',
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
      "class": "icon icon-tabler icon-tabler-massage",
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
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "4",
      "cy": "17",
      "r": "1"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "9",
      "cy": "5",
      "r": "1"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M4 22l4 -2v-3h12"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M11 20h9"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M8 14l3 -2l1 -4c3 1 3 4 3 6"
    }), createTextVNode(" ")]);
  }

};