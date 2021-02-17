import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'TournamentIcon',
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
      "class": "icon icon-tabler icon-tabler-tournament",
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
      "d": "M5 4h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M5 14h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M10 7h4a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-4"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "15",
      "y1": "12",
      "x2": "20",
      "y2": "12"
    }), createTextVNode(" ")]);
  }

};