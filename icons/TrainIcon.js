import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'TrainIcon',
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
      "class": "icon icon-tabler icon-tabler-train",
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
      "d": "M21 13c0 -3.87 -3.37 -7 -10 -7h-8"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M3 15h16a2 2 0 0 0 2 -2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M3 6v5h17.5"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "3",
      "y1": "10",
      "x2": "3",
      "y2": "14"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "8",
      "y1": "11",
      "x2": "8",
      "y2": "6"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "13",
      "y1": "11",
      "x2": "13",
      "y2": "6.5"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "3",
      "y1": "19",
      "x2": "21",
      "y2": "19"
    }), createTextVNode(" ")]);
  }

};