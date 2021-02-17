import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'MoodCryIcon',
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
      "class": "icon icon-tabler icon-tabler-mood-cry",
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
    }), createTextVNode("   "), createVNode("line", {
      "x1": "9",
      "y1": "10",
      "x2": "9.01",
      "y2": "10"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "15",
      "y1": "10",
      "x2": "15.01",
      "y2": "10"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M9.5 15.25a3.5 3.5 0 0 1 5 0"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M17.566 17.606a2 2 0 1 0 2.897 .03l-1.463 -1.636l-1.434 1.606z"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M20.865 13.517a8.937 8.937 0 0 0 .135 -1.517a9 9 0 1 0 -9 9c.69 0 1.36 -.076 2 -.222"
    }), createTextVNode(" ")]);
  }

};