import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'DisabledIcon',
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
      "class": "icon icon-tabler icon-tabler-disabled",
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
      "cx": "11",
      "cy": "5",
      "r": "2"
    }), createTextVNode("   "), createVNode("polyline", {
      "points": "11 7 11 15 15 15 19 20"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "11",
      "y1": "11",
      "x2": "16",
      "y2": "11"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7 11.5a5 5 0 1 0 6 7.5"
    }), createTextVNode(" ")]);
  }

};