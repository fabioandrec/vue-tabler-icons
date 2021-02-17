import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'PlayCardIcon',
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
      "class": "icon icon-tabler icon-tabler-play-card",
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
      "transform": "rotate(90 12 12)",
      "x": "3",
      "y": "5",
      "width": "18",
      "height": "14",
      "rx": "2"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "8",
      "y1": "6",
      "x2": "8.01",
      "y2": "6"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "16",
      "y1": "18",
      "x2": "16.01",
      "y2": "18"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 16l-3 -4l3 -4l3 4z"
    }), createTextVNode(" ")]);
  }

};