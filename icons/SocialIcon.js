import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'SocialIcon',
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
      "class": "icon icon-tabler icon-tabler-social",
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
      "cx": "12",
      "cy": "5",
      "r": "2"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "5",
      "cy": "19",
      "r": "2"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "19",
      "cy": "19",
      "r": "2"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "12",
      "cy": "14",
      "r": "3"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "7",
      "x2": "12",
      "y2": "11"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "6.7",
      "y1": "17.8",
      "x2": "9.5",
      "y2": "15.8"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "17.3",
      "y1": "17.8",
      "x2": "14.5",
      "y2": "15.8"
    }), createTextVNode(" ")]);
  }

};