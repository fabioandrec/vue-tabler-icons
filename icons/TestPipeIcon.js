import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'TestPipeIcon',
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
      "class": "icon icon-tabler icon-tabler-test-pipe",
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
      "d": "M16 4l3 3l-12.35 12.35a1.5 1.5 0 0 1 -3 -3l12.35 -12.35"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "10",
      "y1": "10",
      "x2": "16",
      "y2": "10"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6"
    }), createTextVNode(" ")]);
  }

};