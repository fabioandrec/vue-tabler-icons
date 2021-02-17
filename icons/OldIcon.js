import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'OldIcon',
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
      "class": "icon icon-tabler icon-tabler-old",
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
      "d": "M11 21l-1 -4l-2 -3v-6"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M5 14l-1 -3l4 -3l3 2l3 .5"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "8",
      "cy": "4",
      "r": "1"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7 17l-2 4"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5"
    }), createTextVNode(" ")]);
  }

};