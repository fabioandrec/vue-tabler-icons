import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'DroneOffIcon',
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
      "class": "icon icon-tabler icon-tabler-drone-off",
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
      "d": "M14 14h-4v-4"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M10 10l-3.5 -3.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M9.957 5.95a3.503 3.503 0 0 0 -2.917 -2.91m-3.02 .989a3.5 3.5 0 0 0 1.98 5.936"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M14 10l3.5 -3.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M18 9.965a3.5 3.5 0 1 0 -3.966 -3.965"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "14",
      "y1": "14",
      "x2": "17.5",
      "y2": "17.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M14.035 18a3.5 3.5 0 0 0 5.936 1.98m.987 -3.026a3.503 3.503 0 0 0 -2.918 -2.913"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "10",
      "y1": "14",
      "x2": "6.5",
      "y2": "17.5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M6 14.035a3.5 3.5 0 1 0 3.966 3.965"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "3",
      "y1": "3",
      "x2": "21",
      "y2": "21"
    }), createTextVNode(" ")]);
  }

};