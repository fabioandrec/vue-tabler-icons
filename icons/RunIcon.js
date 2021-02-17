import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'RunIcon',
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
      "class": "icon icon-tabler icon-tabler-run",
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
      "cx": "13",
      "cy": "4",
      "r": "1"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M4 17l5 1l.75 -1.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M15 21l0 -4l-4 -3l1 -6"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7 12l0 -3l5 -1l3 3l3 1"
    }), createTextVNode(" ")]);
  }

};