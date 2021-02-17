import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'RelationOneToManyIcon',
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
      "class": "icon icon-tabler icon-tabler-relation-one-to-many",
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
      "y": "5",
      "width": "18",
      "height": "14",
      "rx": "2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7 10h1v4"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M14 14v-4l3 4v-4"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "11",
      "y1": "10.5",
      "x2": "11",
      "y2": "10.51"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "11",
      "y1": "13.5",
      "x2": "11",
      "y2": "13.51"
    }), createTextVNode(" ")]);
  }

};