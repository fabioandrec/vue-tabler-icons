import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'GitBranchIcon',
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
      "class": "icon icon-tabler icon-tabler-git-branch",
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
      "cx": "7",
      "cy": "18",
      "r": "2"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "7",
      "cy": "6",
      "r": "2"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "17",
      "cy": "6",
      "r": "2"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "7",
      "y1": "8",
      "x2": "7",
      "y2": "16"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M9 18h6a2 2 0 0 0 2 -2v-5"
    }), createTextVNode("   "), createVNode("polyline", {
      "points": "14 14 17 11 20 14"
    }), createTextVNode(" ")]);
  }

};