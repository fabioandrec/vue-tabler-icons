import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'BrandDribbbleIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-dribbble",
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
      "cx": "12",
      "cy": "12",
      "r": "9"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M9 3.6c5 6 7 10.5 7.5 16.2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M3.1 10.75c5 0 9.814 -.38 15.314 -5"
    }), createTextVNode(" ")]);
  }

};