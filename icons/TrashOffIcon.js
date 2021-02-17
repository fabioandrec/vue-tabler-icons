import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'TrashOffIcon',
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
      "class": "icon icon-tabler icon-tabler-trash-off",
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
    }), createTextVNode("   "), createVNode("line", {
      "x1": "3",
      "y1": "3",
      "x2": "21",
      "y2": "21"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M4 7h3m4 0h9"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "10",
      "y1": "11",
      "x2": "10",
      "y2": "17"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "14",
      "y1": "14",
      "x2": "14",
      "y2": "17"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l.077 -.923"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "18.384",
      "y1": "14.373",
      "x2": "19",
      "y2": "7"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M9 5v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"
    }), createTextVNode(" ")]);
  }

};