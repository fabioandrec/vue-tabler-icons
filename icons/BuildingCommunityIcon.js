import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'BuildingCommunityIcon',
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
      "class": "icon icon-tabler icon-tabler-building-community",
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
      "d": "M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "13",
      "y1": "7",
      "x2": "13",
      "y2": "7.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "17",
      "y1": "7",
      "x2": "17",
      "y2": "7.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "17",
      "y1": "11",
      "x2": "17",
      "y2": "11.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "17",
      "y1": "15",
      "x2": "17",
      "y2": "15.01"
    }), createTextVNode(" ")]);
  }

};