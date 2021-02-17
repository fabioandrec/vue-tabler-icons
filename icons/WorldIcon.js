import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'WorldIcon',
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
      "class": "icon icon-tabler icon-tabler-world",
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
      "cy": "12",
      "r": "9"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "3.6",
      "y1": "9",
      "x2": "20.4",
      "y2": "9"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "3.6",
      "y1": "15",
      "x2": "20.4",
      "y2": "15"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M11.5 3a17 17 0 0 0 0 18"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12.5 3a17 17 0 0 1 0 18"
    }), createTextVNode(" ")]);
  }

};