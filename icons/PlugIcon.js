import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'PlugIcon',
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
      "class": "icon icon-tabler icon-tabler-plug",
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
      "d": "M7 7h10v6a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3v-6"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "9",
      "y1": "3",
      "x2": "9",
      "y2": "7"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "15",
      "y1": "3",
      "x2": "15",
      "y2": "7"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 16v2a2 2 0 0 0 2 2h3"
    }), createTextVNode(" ")]);
  }

};