import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'GeometryIcon',
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
      "class": "icon icon-tabler icon-tabler-geometry",
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
      "d": "M7 21l4 -12m2 0l1.48 4.439m.949 2.847l1.571 4.714"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "12",
      "cy": "7",
      "r": "2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M4 12c1.526 2.955 4.588 5 8 5c3.41 0 6.473 -2.048 8 -5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 5v-2"
    }), createTextVNode(" ")]);
  }

};