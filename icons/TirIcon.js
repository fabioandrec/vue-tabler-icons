import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'TirIcon',
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
      "class": "icon icon-tabler icon-tabler-tir",
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
      "cx": "5",
      "cy": "17",
      "r": "2"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "17",
      "cy": "17",
      "r": "2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7 18h8m4 0h2v-6a5 7 0 0 0 -5 -7h-1l1.5 7h4.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 18v-13h3"
    }), createTextVNode("   "), createVNode("polyline", {
      "points": "3 17 3 12 12 12"
    }), createTextVNode(" ")]);
  }

};