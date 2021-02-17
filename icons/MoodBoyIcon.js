import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'MoodBoyIcon',
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
      "class": "icon icon-tabler icon-tabler-mood-boy",
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
      "d": "M17 4.5a9 9 0 0 1 3.864 5.89a2.5 2.5 0 0 1 -.29 4.36a9 9 0 0 1 -17.137 0a2.5 2.5 0 0 1 -.29 -4.36a9 9 0 0 1 3.746 -5.81"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M9.5 16a3.5 3.5 0 0 0 5 0"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M8.5 2c1.5 1 2.5 3.5 2.5 5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12.5 2c1.5 2 2 3.5 2 5"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "9",
      "y1": "12",
      "x2": "9.01",
      "y2": "12"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "15",
      "y1": "12",
      "x2": "15.01",
      "y2": "12"
    }), createTextVNode(" ")]);
  }

};