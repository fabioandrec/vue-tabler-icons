import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'PhysotherapistIcon',
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
      "class": "icon icon-tabler icon-tabler-physotherapist",
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
      "d": "M9 15l-1 -3l4 -2l4 1h3.5"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "4",
      "cy": "19",
      "r": "1"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "12",
      "cy": "6",
      "r": "1"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 17v-7"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M8 20h7l1 -4l4 -2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M18 20h3"
    }), createTextVNode(" ")]);
  }

};