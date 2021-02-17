import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'BuildingFortressIcon',
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
      "class": "icon icon-tabler icon-tabler-building-fortress",
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
      "d": "M7 21h1a1 1 0 0 0 1 -1v-1h0a3 3 0 0 1 6 0m3 2h1a1 1 0 0 0 1 -1v-15l-3 -2l-3 2v6h-4v-6l-3 -2l-3 2v15a1 1 0 0 0 1 1h2m8 -2v1a1 1 0 0 0 1 1h2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7 7h0v.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7 10h0v.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7 13h0v.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M17 7h0v.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M17 10h0v.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M17 13h0v.01"
    }), createTextVNode(" ")]);
  }

};