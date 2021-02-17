import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'PictureInPictureOffIcon',
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
      "class": "icon icon-tabler icon-tabler-picture-in-picture-off",
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
      "d": "M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4"
    }), createTextVNode("   "), createVNode("rect", {
      "x": "14",
      "y": "14",
      "width": "7",
      "height": "5",
      "rx": "1"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "7",
      "y1": "9",
      "x2": "11",
      "y2": "13"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7 12v-3h3"
    }), createTextVNode(" ")]);
  }

};