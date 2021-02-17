import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'LiveViewIcon',
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
      "class": "icon icon-tabler icon-tabler-live-view",
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
      "d": "M4 8v-2a2 2 0 0 1 2 -2h2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M4 16v2a2 2 0 0 0 2 2h2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M16 4h2a2 2 0 0 1 2 2v2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M16 20h2a2 2 0 0 0 2 -2v-2"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "11",
      "x2": "12",
      "y2": "11.01"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 18l-3.5 -5a4 4 0 1 1 7 0l-3.5 5"
    }), createTextVNode(" ")]);
  }

};