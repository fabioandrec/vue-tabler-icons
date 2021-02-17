import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'PaletteIcon',
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
      "class": "icon icon-tabler icon-tabler-palette",
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
      "d": "M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "7.5",
      "cy": "10.5",
      "r": ".5",
      "fill": "currentColor"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "12",
      "cy": "7.5",
      "r": ".5",
      "fill": "currentColor"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "16.5",
      "cy": "10.5",
      "r": ".5",
      "fill": "currentColor"
    }), createTextVNode(" ")]);
  }

};