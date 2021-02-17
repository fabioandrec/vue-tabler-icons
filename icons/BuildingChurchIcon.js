import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'BuildingChurchIcon',
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
      "class": "icon icon-tabler icon-tabler-building-church",
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
      "y1": "21",
      "x2": "21",
      "y2": "21"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M10 21v-4a2 2 0 0 1 4 0v4"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "10",
      "y1": "5",
      "x2": "14",
      "y2": "5"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "3",
      "x2": "12",
      "y2": "8"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M6 21v-7m-2 2l8 -8l8 8m-2 -2v7"
    }), createTextVNode(" ")]);
  }

};