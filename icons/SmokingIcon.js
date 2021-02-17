import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'SmokingIcon',
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
      "class": "icon icon-tabler icon-tabler-smoking",
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
    }), createTextVNode("   "), createVNode("rect", {
      "x": "3",
      "y": "13",
      "width": "18",
      "height": "4",
      "rx": "1"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "8",
      "y1": "13",
      "x2": "8",
      "y2": "17"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5"
    }), createTextVNode(" ")]);
  }

};